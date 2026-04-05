import { isSupabaseConfigured, supabase } from "../../lib/supabase";

export type WorkStatus = "Not Started" | "In Progress" | "Completed";
export type UserRole = "employee" | "admin";

export interface AssignedWork {
  id: string;
  title: string;
  status: WorkStatus;
  priority: "Low" | "Medium" | "High";
  dueDate: string;
}

export interface EmployeeUser {
  id: string;
  username: string;
  password: string;
  name: string;
  email: string;
  role: UserRole;
  department: string;
  designation: string;
  assignedWorks: AssignedWork[];
}

export interface DailyWorkEntry {
  id: string;
  workDate: string;
  sNo: number;
  clientCategory: string;
  clientName: string;
  location: string;
  phoneNumber: string;
  address: string;
  callStatus: string;
  demoConfirmed: "Yes" | "No";
  demoStatus: string;
  orderStatus: string;
  paymentReceived: "Yes" | "No";
  assignedTo: string;
  comment: string;
  createdBy: string;
  isLocked: boolean;
  lockedBy: string | null;
  lockedAt: string | null;
}

export interface DailyWorkSaveResult {
  entry: DailyWorkEntry | null;
  error: string | null;
}

export interface EmployeeTimesheetEntry {
  id: string;
  workDate: string;
  employeeUsername: string;
  taskTitle: string;
  hoursSpent: number;
  status: "Not Started" | "In Progress" | "Completed";
  notes: string;
  createdAt: string;
  updatedAt: string;
}

export interface EmployeeTimesheetSaveResult {
  entry: EmployeeTimesheetEntry | null;
  error: string | null;
}

interface EmployeeDbRow {
  id: string;
  username: string;
  password: string;
  name: string;
  email: string;
  role: UserRole;
  department: string;
  designation: string;
  assigned_works: AssignedWork[] | null;
}

interface DailyWorkDbRow {
  id: string;
  work_date: string;
  s_no: number;
  client_category: string;
  client_name: string;
  location: string;
  phone_number: string | null;
  address: string;
  call_status: string;
  demo_confirmed: "Yes" | "No";
  demo_status: string;
  order_status: string;
  payment_received: "Yes" | "No";
  assigned_to: string;
  comment_text: string | null;
  created_by: string;
  is_locked: boolean | null;
  locked_by: string | null;
  locked_at: string | null;
}

interface EmployeeTimesheetDbRow {
  id: string;
  work_date: string;
  employee_username: string;
  task_title: string;
  hours_spent: number;
  status: "Not Started" | "In Progress" | "Completed";
  notes: string | null;
  created_at: string;
  updated_at: string;
}

const mapDbUserToEmployeeUser = (row: EmployeeDbRow): EmployeeUser => {
  return {
    id: row.id,
    username: row.username,
    password: row.password,
    name: row.name,
    email: row.email,
    role: row.role,
    department: row.department,
    designation: row.designation,
    assignedWorks: row.assigned_works ?? [],
  };
};

const mapDbDailyWorkToEntry = (row: DailyWorkDbRow): DailyWorkEntry => {
  return {
    id: row.id,
    workDate: row.work_date,
    sNo: row.s_no,
    clientCategory: row.client_category,
    clientName: row.client_name,
    location: row.location,
    phoneNumber: row.phone_number ?? "",
    address: row.address,
    callStatus: row.call_status,
    demoConfirmed: row.demo_confirmed,
    demoStatus: row.demo_status,
    orderStatus: row.order_status,
    paymentReceived: row.payment_received,
    assignedTo: row.assigned_to,
    comment: row.comment_text ?? "",
    createdBy: row.created_by,
    isLocked: Boolean(row.is_locked),
    lockedBy: row.locked_by,
    lockedAt: row.locked_at,
  };
};

const mapDbTimesheetToEntry = (
  row: EmployeeTimesheetDbRow,
): EmployeeTimesheetEntry => {
  return {
    id: row.id,
    workDate: row.work_date,
    employeeUsername: row.employee_username,
    taskTitle: row.task_title,
    hoursSpent: row.hours_spent,
    status: row.status,
    notes: row.notes ?? "",
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
};

export const getUserByCredentials = async (
  username: string,
  password: string,
) => {
  if (!isSupabaseConfigured) {
    return null;
  }

  const normalizedUsername = username.trim();
  const normalizedPassword = password.trim();

  const { data, error } = await supabase
    .from("employees")
    .select("*")
    .ilike("username", normalizedUsername)
    .eq("password", normalizedPassword)
    .maybeSingle();

  if (error) {
    return null;
  }

  if (!data) {
    return null;
  }

  return mapDbUserToEmployeeUser(data as EmployeeDbRow);
};

export const getAllEmployees = async () => {
  if (!isSupabaseConfigured) {
    return [];
  }

  const { data, error } = await supabase
    .from("employees")
    .select("*")
    .eq("role", "employee");

  if (error || !data) {
    return [];
  }

  return (data as EmployeeDbRow[]).map(mapDbUserToEmployeeUser);
};

export const getDailyWorkEntries = async (
  workDate: string,
  assignedTo?: string,
) => {
  if (!isSupabaseConfigured) {
    return [];
  }

  let query = supabase
    .from("daily_work_entries")
    .select("*")
    .eq("work_date", workDate)
    .order("s_no", { ascending: true });

  if (assignedTo) {
    query = query.eq("assigned_to", assignedTo);
  }

  const { data, error } = await query;

  if (error || !data) {
    return [];
  }

  return (data as DailyWorkDbRow[]).map(mapDbDailyWorkToEntry);
};

export const saveDailyWorkEntry = async (
  entry: DailyWorkEntry,
): Promise<DailyWorkSaveResult> => {
  if (!isSupabaseConfigured) {
    return {
      entry: null,
      error:
        "Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.",
    };
  }

  const payload = {
    work_date: entry.workDate,
    s_no: entry.sNo,
    client_category: entry.clientCategory,
    client_name: entry.clientName,
    location: entry.location,
    phone_number: entry.phoneNumber,
    address: entry.address,
    call_status: entry.callStatus,
    demo_confirmed: entry.demoConfirmed,
    demo_status: entry.demoStatus,
    order_status: entry.orderStatus,
    payment_received: entry.paymentReceived,
    assigned_to: entry.assignedTo,
    comment_text: entry.comment,
    created_by: entry.createdBy,
  };

  const fallbackPayload = {
    work_date: entry.workDate,
    s_no: entry.sNo,
    client_category: entry.clientCategory,
    client_name: entry.clientName,
    location: entry.location,
    phone_number: entry.phoneNumber,
    address: entry.address,
    call_status: entry.callStatus,
    demo_confirmed: entry.demoConfirmed,
    demo_status: entry.demoStatus,
    order_status: entry.orderStatus,
    payment_received: entry.paymentReceived,
    assigned_to: entry.assignedTo,
    created_by: entry.createdBy,
  };

  if (!entry.id) {
    const { data, error } = await supabase
      .from("daily_work_entries")
      .insert(payload)
      .select("*")
      .single();

    if (error) {
      if (error.message.toLowerCase().includes("comment_text")) {
        const fallbackResult = await supabase
          .from("daily_work_entries")
          .insert(fallbackPayload)
          .select("*")
          .single();

        if (fallbackResult.error || !fallbackResult.data) {
          return {
            entry: null,
            error:
              fallbackResult.error?.message ?? "Failed to save daily entry.",
          };
        }

        return {
          entry: mapDbDailyWorkToEntry(fallbackResult.data as DailyWorkDbRow),
          error: null,
        };
      }

      return { entry: null, error: error.message };
    }

    if (!data) {
      return { entry: null, error: "No data returned after insert." };
    }

    return {
      entry: mapDbDailyWorkToEntry(data as DailyWorkDbRow),
      error: null,
    };
  }

  const { data, error } = await supabase
    .from("daily_work_entries")
    .update(payload)
    .eq("id", entry.id)
    .select("*")
    .single();

  if (error) {
    if (error.message.toLowerCase().includes("comment_text")) {
      const fallbackResult = await supabase
        .from("daily_work_entries")
        .update(fallbackPayload)
        .eq("id", entry.id)
        .select("*")
        .single();

      if (fallbackResult.error || !fallbackResult.data) {
        return {
          entry: null,
          error:
            fallbackResult.error?.message ?? "Failed to update daily entry.",
        };
      }

      return {
        entry: mapDbDailyWorkToEntry(fallbackResult.data as DailyWorkDbRow),
        error: null,
      };
    }

    return { entry: null, error: error.message };
  }

  if (!data) {
    return { entry: null, error: "No data returned after update." };
  }

  return { entry: mapDbDailyWorkToEntry(data as DailyWorkDbRow), error: null };
};

export const deleteDailyWorkEntry = async (entryId: string) => {
  if (!isSupabaseConfigured) {
    return false;
  }

  const { error } = await supabase
    .from("daily_work_entries")
    .delete()
    .eq("id", entryId);

  return !error;
};

export const setDailyEntriesLock = async (
  workDate: string,
  isLocked: boolean,
  lockedBy: string,
) => {
  if (!isSupabaseConfigured) {
    return false;
  }

  const { error } = await supabase
    .from("daily_work_entries")
    .update({
      is_locked: isLocked,
      locked_by: isLocked ? lockedBy : null,
      locked_at: isLocked ? new Date().toISOString() : null,
      updated_at: new Date().toISOString(),
    })
    .eq("work_date", workDate);

  return !error;
};

export const getEmployeeTimesheetEntries = async (
  workDate?: string,
  employeeUsername?: string,
) => {
  if (!isSupabaseConfigured) {
    return [];
  }

  let query = supabase
    .from("employee_timesheets")
    .select("*")
    .order("work_date", { ascending: false })
    .order("created_at", { ascending: false });

  if (workDate) {
    query = query.eq("work_date", workDate);
  }

  if (employeeUsername) {
    query = query.eq("employee_username", employeeUsername);
  }

  const { data, error } = await query;

  if (error || !data) {
    return [];
  }

  return (data as EmployeeTimesheetDbRow[]).map(mapDbTimesheetToEntry);
};

export const saveEmployeeTimesheetEntry = async (
  entry: EmployeeTimesheetEntry,
): Promise<EmployeeTimesheetSaveResult> => {
  if (!isSupabaseConfigured) {
    return {
      entry: null,
      error:
        "Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.",
    };
  }

  const payload = {
    work_date: entry.workDate,
    employee_username: entry.employeeUsername,
    task_title: entry.taskTitle,
    hours_spent: entry.hoursSpent,
    status: entry.status,
    notes: entry.notes,
    updated_at: new Date().toISOString(),
  };

  if (!entry.id) {
    const { data, error } = await supabase
      .from("employee_timesheets")
      .insert(payload)
      .select("*")
      .single();

    if (error || !data) {
      return {
        entry: null,
        error: error?.message ?? "Failed to save timesheet entry.",
      };
    }

    return {
      entry: mapDbTimesheetToEntry(data as EmployeeTimesheetDbRow),
      error: null,
    };
  }

  const { data, error } = await supabase
    .from("employee_timesheets")
    .update(payload)
    .eq("id", entry.id)
    .select("*")
    .single();

  if (error || !data) {
    return {
      entry: null,
      error: error?.message ?? "Failed to update timesheet entry.",
    };
  }

  return {
    entry: mapDbTimesheetToEntry(data as EmployeeTimesheetDbRow),
    error: null,
  };
};

export const deleteEmployeeTimesheetEntry = async (entryId: string) => {
  if (!isSupabaseConfigured) {
    return false;
  }

  const { error } = await supabase
    .from("employee_timesheets")
    .delete()
    .eq("id", entryId);

  return !error;
};
