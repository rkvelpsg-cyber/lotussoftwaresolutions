import { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";
import {
  LogOut,
  FileText,
  BarChart3,
  Users,
  Clock,
  Plus,
  Save,
  Trash2,
  Download,
  Lock,
  Unlock,
} from "lucide-react";
import {
  AssignedWork,
  DailyWorkEntry,
  deleteDailyWorkEntry,
  getAllEmployees,
  getDailyWorkEntries,
  saveDailyWorkEntry,
  setDailyEntriesLock,
} from "../lib/employeeAuth";

interface EmployeeDashboardProps {
  onLogout: () => void;
}

interface EmployeeData {
  id: string;
  username: string;
  name?: string;
  email?: string;
  department?: string;
  designation?: string;
  role?: "employee" | "admin";
  assignedWorks?: AssignedWork[];
}

interface DailyWorkRow extends DailyWorkEntry {
  localId: string;
}

type DailyField =
  | "sNo"
  | "clientCategory"
  | "clientName"
  | "location"
  | "phoneNumber"
  | "address"
  | "callStatus"
  | "demoConfirmed"
  | "demoStatus"
  | "orderStatus"
  | "paymentReceived"
  | "assignedTo"
  | "comment";

const LOCATION_OPTIONS = [
  "Chennai",
  "Bengaluru",
  "Coimbatore",
  "Hyderabad",
  "Pune",
  "Mumbai",
  "Delhi",
  "Other",
];

const CALL_STATUS_OPTIONS = [
  "Not Called",
  "Connected",
  "Follow Up",
  "No Response",
  "Not Interested",
  "Interested",
];

const YES_NO_OPTIONS: Array<"Yes" | "No"> = ["Yes", "No"];
const DEMO_STATUS_OPTIONS = ["Pending", "Scheduled", "Completed", "Cancelled"];
const ORDER_STATUS_OPTIONS = ["Pending", "In Negotiation", "Confirmed", "Lost"];

const getTodayIsoDate = () => new Date().toISOString().slice(0, 10);

const getDateLabel = (isoDate: string) => {
  const parsed = new Date(`${isoDate}T00:00:00`);
  return parsed.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

export function EmployeeDashboard({ onLogout }: EmployeeDashboardProps) {
  const [employeeData, setEmployeeData] = useState<EmployeeData | null>(null);
  const [allEmployees, setAllEmployees] = useState<EmployeeData[]>([]);
  const [activeTab, setActiveTab] = useState<string>("overview");
  const [selectedDate, setSelectedDate] = useState(getTodayIsoDate());
  const [dailyRows, setDailyRows] = useState<DailyWorkRow[]>([]);
  const [isDailyLoading, setIsDailyLoading] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const isAdmin = employeeData?.role === "admin";
  const currentUserWorks = employeeData?.assignedWorks ?? [];
  const isDateLocked = dailyRows.some((row) => row.isLocked);

  const employeeUsers = useMemo(
    () => allEmployees.filter((user) => user.role === "employee"),
    [allEmployees],
  );

  useEffect(() => {
    const storedData = localStorage.getItem("employeeData");
    if (storedData) {
      setEmployeeData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    const loadEmployees = async () => {
      const employees = await getAllEmployees();
      setAllEmployees(employees);
    };

    loadEmployees();
  }, []);

  useEffect(() => {
    const allowedTabs = isAdmin
      ? ["overview", "team", "timesheet"]
      : ["overview", "tasks", "timesheet"];

    if (!allowedTabs.includes(activeTab)) {
      setActiveTab("overview");
    }
  }, [isAdmin, activeTab]);

  const loadDailyRows = async () => {
    if (!employeeData?.username) {
      return;
    }

    setIsDailyLoading(true);
    setFeedbackMessage("");

    const entries = await getDailyWorkEntries(
      selectedDate,
      isAdmin ? undefined : employeeData.username,
    );

    setDailyRows(
      entries.map((entry) => ({
        ...entry,
        localId: entry.id || `loaded-${Math.random().toString(36).slice(2, 6)}`,
      })),
    );
    setIsDailyLoading(false);
  };

  useEffect(() => {
    loadDailyRows();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [employeeData?.username, isAdmin, selectedDate]);

  const handleLogout = () => {
    localStorage.removeItem("employeeData");
    localStorage.removeItem("isEmployeeLoggedIn");
    onLogout();
  };

  const dashboardTabs = isAdmin
    ? [
        { id: "overview", label: "Overview", icon: BarChart3 },
        { id: "team", label: "Employee Status", icon: Users },
        { id: "timesheet", label: "Work Tracker", icon: Clock },
      ]
    : [
        { id: "overview", label: "Overview", icon: BarChart3 },
        { id: "tasks", label: "My Tasks", icon: FileText },
        { id: "timesheet", label: "Timesheet", icon: Clock },
      ];

  const buildWorkStats = (works: AssignedWork[]) => {
    const completed = works.filter(
      (work) => work.status === "Completed",
    ).length;
    const inProgress = works.filter(
      (work) => work.status === "In Progress",
    ).length;
    const notStarted = works.filter(
      (work) => work.status === "Not Started",
    ).length;

    return {
      total: works.length,
      completed,
      inProgress,
      notStarted,
    };
  };

  const getStatusBadgeClass = (status: AssignedWork["status"]) => {
    if (status === "Completed") return "bg-green-100 text-green-700";
    if (status === "In Progress") return "bg-yellow-100 text-yellow-700";
    return "bg-gray-100 text-gray-700";
  };

  const allAssignedWorks = allEmployees.flatMap(
    (employee) => employee.assignedWorks ?? [],
  );
  const overallStats = buildWorkStats(allAssignedWorks);
  const employeeStats = buildWorkStats(currentUserWorks);

  const overviewStats = isAdmin
    ? [
        {
          title: "Employees",
          value: `${allEmployees.length}`,
          color: "from-blue-500",
        },
        {
          title: "Total Assigned Works",
          value: `${overallStats.total}`,
          color: "from-cyan-500",
        },
        {
          title: "Completed",
          value: `${overallStats.completed}`,
          color: "from-green-500",
        },
        {
          title: "In Progress",
          value: `${overallStats.inProgress}`,
          color: "from-orange-500",
        },
      ]
    : [
        {
          title: "My Tasks",
          value: `${employeeStats.total}`,
          color: "from-blue-500",
        },
        {
          title: "Completed",
          value: `${employeeStats.completed}`,
          color: "from-green-500",
        },
        {
          title: "In Progress",
          value: `${employeeStats.inProgress}`,
          color: "from-orange-500",
        },
        {
          title: "Pending",
          value: `${employeeStats.notStarted}`,
          color: "from-purple-500",
        },
      ];

  const canEditField = (field: DailyField) => {
    if (isAdmin) {
      return true;
    }

    if (isDateLocked) {
      return false;
    }

    return [
      "callStatus",
      "demoConfirmed",
      "demoStatus",
      "orderStatus",
      "paymentReceived",
    ].includes(field);
  };

  const createEmptyRow = (): DailyWorkRow => ({
    id: "",
    localId: `new-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    workDate: selectedDate,
    sNo: dailyRows.length + 1,
    clientCategory: "",
    clientName: "",
    location: LOCATION_OPTIONS[0],
    phoneNumber: "",
    address: "",
    callStatus: CALL_STATUS_OPTIONS[0],
    demoConfirmed: "No",
    demoStatus: DEMO_STATUS_OPTIONS[0],
    orderStatus: ORDER_STATUS_OPTIONS[0],
    paymentReceived: "No",
    assignedTo: employeeUsers[0]?.username ?? "",
    comment: "",
    createdBy: employeeData?.username ?? "",
    isLocked: false,
    lockedBy: null,
    lockedAt: null,
  });

  const addNewRow = () => {
    if (!isAdmin || isDateLocked) {
      return;
    }

    setDailyRows((previous) => [...previous, createEmptyRow()]);
    setFeedbackMessage("");
  };

  const updateRowValue = (
    localId: string,
    field: DailyField,
    value: string,
  ) => {
    setDailyRows((previous) =>
      previous.map((row) => {
        if (row.localId !== localId) {
          return row;
        }

        if (field === "sNo") {
          return { ...row, sNo: Number(value) || 0 };
        }

        return { ...row, [field]: value };
      }),
    );
  };

  const validateAdminRow = (row: DailyWorkRow) => {
    return (
      row.sNo > 0 &&
      row.clientCategory.trim() &&
      row.clientName.trim() &&
      row.location.trim() &&
      row.phoneNumber.trim() &&
      row.address.trim() &&
      row.assignedTo.trim()
    );
  };

  const saveRow = async (row: DailyWorkRow) => {
    if (!employeeData?.username) {
      return;
    }

    if (!isAdmin && isDateLocked) {
      setFeedbackMessage("This date is locked by admin. Editing is disabled.");
      return;
    }

    if (isAdmin && !validateAdminRow(row)) {
      setFeedbackMessage(
        "Please fill S.No, Client Category, Client Name, Location, Address and Assigned To before saving.",
      );
      return;
    }

    const payload: DailyWorkEntry = {
      id: row.id,
      workDate: selectedDate,
      sNo: row.sNo,
      clientCategory: row.clientCategory,
      clientName: row.clientName,
      location: row.location,
      phoneNumber: row.phoneNumber,
      address: row.address,
      callStatus: row.callStatus,
      demoConfirmed: row.demoConfirmed,
      demoStatus: row.demoStatus,
      orderStatus: row.orderStatus,
      paymentReceived: row.paymentReceived,
      assignedTo: row.assignedTo,
      comment: row.comment,
      createdBy: row.createdBy || employeeData.username,
      isLocked: row.isLocked,
      lockedBy: row.lockedBy,
      lockedAt: row.lockedAt,
    };

    const saveResult = await saveDailyWorkEntry(payload);

    if (!saveResult.entry) {
      const isSchemaCacheIssue = (saveResult.error ?? "")
        .toLowerCase()
        .includes("could not find the table 'public.daily_work_entries'");

      setFeedbackMessage(
        isSchemaCacheIssue
          ? "Save failed: daily_work_entries table is not visible to Supabase API yet. Run updated seed_employees.sql and reload schema."
          : `Save failed: ${saveResult.error ?? "Please check Supabase policies and table schema."}`,
      );
      return;
    }

    const saved = saveResult.entry;

    setDailyRows((previous) =>
      previous.map((current) =>
        current.localId === row.localId
          ? { ...saved, localId: saved.id }
          : current,
      ),
    );

    setFeedbackMessage("Saved successfully.");
  };

  const saveAllRows = async () => {
    for (const row of dailyRows) {
      // Save sequentially to keep row update state deterministic.
      // eslint-disable-next-line no-await-in-loop
      await saveRow(row);
    }
  };

  const handleDeleteRow = async (row: DailyWorkRow) => {
    if (!isAdmin || isDateLocked) {
      return;
    }

    if (!row.id) {
      setDailyRows((previous) =>
        previous.filter((item) => item.localId !== row.localId),
      );
      setFeedbackMessage("Unsaved row removed.");
      return;
    }

    const deleted = await deleteDailyWorkEntry(row.id);
    if (!deleted) {
      setFeedbackMessage("Delete failed. Please try again.");
      return;
    }

    setDailyRows((previous) =>
      previous.filter((item) => item.localId !== row.localId),
    );
    setFeedbackMessage("Row deleted.");
  };

  const handleToggleDateLock = async () => {
    if (!isAdmin || !employeeData?.username || dailyRows.length === 0) {
      return;
    }

    const success = await setDailyEntriesLock(
      selectedDate,
      !isDateLocked,
      employeeData.username,
    );

    if (!success) {
      setFeedbackMessage("Failed to update lock status.");
      return;
    }

    setFeedbackMessage(
      isDateLocked ? "Date unlocked." : "Date locked for employee edits.",
    );
    await loadDailyRows();
  };

  const handleExportCsv = () => {
    if (dailyRows.length === 0) {
      setFeedbackMessage("No rows to export for selected date.");
      return;
    }

    const headers = [
      "Date",
      "S.No",
      "Client Category",
      "Client Name",
      "Location",
      "Phone Number",
      "Address",
      "Call Status",
      "Demo Confirmed",
      "Demo Status",
      "Order Status",
      "Payment Received",
      "Assigned To",
      "Comment",
      "Locked",
    ];

    const csvRows = dailyRows.map((row) => [
      row.workDate,
      String(row.sNo),
      row.clientCategory,
      row.clientName,
      row.location,
      row.phoneNumber,
      row.address,
      row.callStatus,
      row.demoConfirmed,
      row.demoStatus,
      row.orderStatus,
      row.paymentReceived,
      row.assignedTo,
      row.comment,
      row.isLocked ? "Yes" : "No",
    ]);

    const escapeCell = (value: string) => `"${value.replace(/"/g, '""')}"`;
    const csv = [headers, ...csvRows]
      .map((cells) => cells.map((cell) => escapeCell(cell)).join(","))
      .join("\n");

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `daily-work-${selectedDate}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const renderTextInput = (
    row: DailyWorkRow,
    field: DailyField,
    placeholder: string,
    type: "text" | "number" = "text",
  ) => (
    <input
      type={type}
      min={type === "number" ? 0 : undefined}
      value={field === "sNo" ? String(row.sNo) : (row[field] as string)}
      onChange={(event) =>
        updateRowValue(row.localId, field, event.target.value)
      }
      disabled={!canEditField(field)}
      className="w-full min-w-[120px] rounded border border-gray-300 px-2 py-1 text-sm text-gray-700 disabled:bg-gray-100 disabled:text-gray-500"
      placeholder={placeholder}
    />
  );

  const renderSelectInput = (
    row: DailyWorkRow,
    field: DailyField,
    options: string[],
  ) => (
    <select
      value={row[field] as string}
      onChange={(event) =>
        updateRowValue(row.localId, field, event.target.value)
      }
      disabled={!canEditField(field)}
      className="w-full min-w-[130px] rounded border border-gray-300 px-2 py-1 text-sm text-gray-700 disabled:bg-gray-100 disabled:text-gray-500"
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );

  const renderDailyTracker = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-lg p-6 space-y-4"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2
          className="text-2xl font-bold text-gray-800"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {isAdmin ? "Daily Assignment Table" : "My Daily Work Status"}
        </h2>

        <div className="flex flex-wrap items-center gap-3">
          <span className="text-sm font-semibold text-gray-700">
            Current Date: {getDateLabel(selectedDate)}
          </span>
          <input
            type="date"
            value={selectedDate}
            onChange={(event) => setSelectedDate(event.target.value)}
            className="rounded border border-gray-300 px-3 py-2 text-sm text-gray-700"
          />
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${
              isDateLocked
                ? "bg-red-100 text-red-700"
                : "bg-green-100 text-green-700"
            }`}
          >
            {isDateLocked ? "Locked" : "Open"}
          </span>
          <button
            type="button"
            onClick={handleExportCsv}
            className="inline-flex items-center gap-2 rounded bg-gray-700 px-3 py-2 text-sm font-semibold text-white hover:bg-gray-800"
          >
            <Download size={16} /> Export CSV
          </button>
          {isAdmin && (
            <>
              <button
                type="button"
                onClick={addNewRow}
                disabled={isDateLocked}
                className="inline-flex items-center gap-2 rounded bg-purple-600 px-3 py-2 text-sm font-semibold text-white hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Plus size={16} /> Add Row
              </button>
              <button
                type="button"
                onClick={handleToggleDateLock}
                disabled={dailyRows.length === 0}
                className="inline-flex items-center gap-2 rounded bg-orange-600 px-3 py-2 text-sm font-semibold text-white hover:bg-orange-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isDateLocked ? <Unlock size={16} /> : <Lock size={16} />}
                {isDateLocked ? "Unlock Date" : "Lock Date"}
              </button>
            </>
          )}
          {dailyRows.length > 0 && (
            <button
              type="button"
              onClick={saveAllRows}
              disabled={!isAdmin && isDateLocked}
              className="inline-flex items-center gap-2 rounded bg-cyan-600 px-3 py-2 text-sm font-semibold text-white hover:bg-cyan-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Save size={16} /> Save All
            </button>
          )}
        </div>
      </div>

      {feedbackMessage && (
        <p className="rounded border border-purple-200 bg-purple-50 px-3 py-2 text-sm text-purple-700">
          {feedbackMessage}
        </p>
      )}

      {isDailyLoading ? (
        <p className="text-sm text-gray-600">Loading daily entries...</p>
      ) : dailyRows.length === 0 ? (
        <p className="text-sm text-gray-600">
          {isAdmin
            ? "No rows for this date. Add a row and assign it to an employee."
            : "No tasks assigned for this date."}
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1500px] text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="px-3 py-2 text-sm font-semibold text-gray-700">
                  S.No
                </th>
                <th className="px-3 py-2 text-sm font-semibold text-gray-700">
                  Client Category
                </th>
                <th className="px-3 py-2 text-sm font-semibold text-gray-700">
                  Client Name
                </th>
                <th className="px-3 py-2 text-sm font-semibold text-gray-700">
                  Location
                </th>
                <th className="px-3 py-2 text-sm font-semibold text-gray-700">
                  Phone Number
                </th>
                <th className="px-3 py-2 text-sm font-semibold text-gray-700">
                  Address
                </th>
                <th className="px-3 py-2 text-sm font-semibold text-gray-700">
                  Call Status
                </th>
                <th className="px-3 py-2 text-sm font-semibold text-gray-700">
                  Demo Confirmed
                </th>
                <th className="px-3 py-2 text-sm font-semibold text-gray-700">
                  Demo Status
                </th>
                <th className="px-3 py-2 text-sm font-semibold text-gray-700">
                  Order Status
                </th>
                <th className="px-3 py-2 text-sm font-semibold text-gray-700">
                  Payment Received
                </th>
                {isAdmin && (
                  <th className="px-3 py-2 text-sm font-semibold text-gray-700">
                    Assigned To
                  </th>
                )}
                <th className="px-3 py-2 text-sm font-semibold text-gray-700">
                  Comment
                </th>
                <th className="px-3 py-2 text-sm font-semibold text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {dailyRows.map((row) => (
                <tr
                  key={row.localId}
                  className="border-b border-gray-200 align-top"
                >
                  <td className="px-3 py-2">
                    {renderTextInput(row, "sNo", "S.No", "number")}
                  </td>
                  <td className="px-3 py-2">
                    {renderTextInput(row, "clientCategory", "Category")}
                  </td>
                  <td className="px-3 py-2">
                    {renderTextInput(row, "clientName", "Client")}
                  </td>
                  <td className="px-3 py-2">
                    {renderSelectInput(row, "location", LOCATION_OPTIONS)}
                  </td>
                  <td className="px-3 py-2">
                    {renderTextInput(row, "phoneNumber", "Phone Number")}
                  </td>
                  <td className="px-3 py-2">
                    {renderTextInput(row, "address", "Address")}
                  </td>
                  <td className="px-3 py-2">
                    {renderSelectInput(row, "callStatus", CALL_STATUS_OPTIONS)}
                  </td>
                  <td className="px-3 py-2">
                    {renderSelectInput(row, "demoConfirmed", YES_NO_OPTIONS)}
                  </td>
                  <td className="px-3 py-2">
                    {renderSelectInput(row, "demoStatus", DEMO_STATUS_OPTIONS)}
                  </td>
                  <td className="px-3 py-2">
                    {renderSelectInput(
                      row,
                      "orderStatus",
                      ORDER_STATUS_OPTIONS,
                    )}
                  </td>
                  <td className="px-3 py-2">
                    {renderSelectInput(row, "paymentReceived", YES_NO_OPTIONS)}
                  </td>
                  {isAdmin && (
                    <td className="px-3 py-2">
                      <select
                        value={row.assignedTo}
                        onChange={(event) =>
                          updateRowValue(
                            row.localId,
                            "assignedTo",
                            event.target.value,
                          )
                        }
                        disabled={isDateLocked}
                        className="w-full min-w-[160px] rounded border border-gray-300 px-2 py-1 text-sm text-gray-700 disabled:bg-gray-100 disabled:text-gray-500"
                      >
                        <option value="">Select employee</option>
                        {employeeUsers.map((employee) => (
                          <option key={employee.id} value={employee.username}>
                            {employee.name} ({employee.username})
                          </option>
                        ))}
                      </select>
                    </td>
                  )}
                  <td className="px-3 py-2">
                    {renderTextInput(row, "comment", "Comment")}
                  </td>
                  <td className="px-3 py-2">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => saveRow(row)}
                        disabled={!isAdmin && isDateLocked}
                        className="rounded bg-purple-600 px-3 py-1 text-xs font-semibold text-white hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        Save
                      </button>
                      {isAdmin && (
                        <button
                          type="button"
                          onClick={() => handleDeleteRow(row)}
                          disabled={isDateLocked}
                          className="inline-flex items-center gap-1 rounded bg-red-600 px-2 py-1 text-xs font-semibold text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                          <Trash2 size={12} /> Delete
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-cyan-50"
    >
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg sticky top-0 z-40"
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1
              className="text-3xl font-bold"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {isAdmin ? "Admin Dashboard" : "Employee Dashboard"}
            </h1>
            <p className="text-purple-100 text-sm">
              Welcome, {employeeData?.name || employeeData?.username || "User"}
            </p>
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLogout}
            className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-6 py-2 rounded-lg transition-colors font-semibold backdrop-blur-sm"
          >
            <LogOut size={20} />
            Logout
          </motion.button>
        </div>
      </motion.header>

      <div className="bg-white border-b border-gray-200 sticky top-16 z-30">
        <div className="container mx-auto px-6">
          <div className="flex gap-8 overflow-x-auto">
            {dashboardTabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 py-4 px-2 border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? "border-purple-600 text-purple-600"
                      : "border-transparent text-gray-600 hover:text-purple-600"
                  }`}
                  whileHover={{ y: -2 }}
                >
                  <Icon size={20} />
                  <span className="font-semibold">{tab.label}</span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>

      <main className="container mx-auto px-6 py-12">
        {activeTab === "overview" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {overviewStats.map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-gradient-to-br ${stat.color} to-transparent rounded-lg p-6 text-white shadow-lg hover:shadow-xl transition-shadow`}
              >
                <p className="text-gray-100 text-sm font-semibold mb-2">
                  {stat.title}
                </p>
                <p className="text-4xl font-bold">{stat.value}</p>
              </motion.div>
            ))}
          </motion.div>
        )}

        {!isAdmin && activeTab === "tasks" && renderDailyTracker()}
        {isAdmin && activeTab === "team" && renderDailyTracker()}

        {activeTab === "timesheet" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h2
              className="text-2xl font-bold mb-6 text-gray-800"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {isAdmin ? "Team Work Tracker" : "Weekly Timesheet"}
            </h2>
            {isAdmin ? (
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="px-4 py-3 font-semibold text-gray-700">
                        Employee
                      </th>
                      <th className="px-4 py-3 font-semibold text-gray-700">
                        Department
                      </th>
                      <th className="px-4 py-3 font-semibold text-gray-700">
                        Completed
                      </th>
                      <th className="px-4 py-3 font-semibold text-gray-700">
                        In Progress
                      </th>
                      <th className="px-4 py-3 font-semibold text-gray-700">
                        Not Started
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {allEmployees.map((member, index) => {
                      const stats = buildWorkStats(member.assignedWorks ?? []);
                      return (
                        <motion.tr
                          key={member.id}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: index * 0.06 }}
                          className="border-b border-gray-200 hover:bg-gray-50"
                        >
                          <td className="px-4 py-3 text-gray-700">
                            {member.name}
                          </td>
                          <td className="px-4 py-3 text-gray-700">
                            {member.department}
                          </td>
                          <td className="px-4 py-3 text-green-700 font-semibold">
                            {stats.completed}
                          </td>
                          <td className="px-4 py-3 text-yellow-700 font-semibold">
                            {stats.inProgress}
                          </td>
                          <td className="px-4 py-3 text-gray-700 font-semibold">
                            {stats.notStarted}
                          </td>
                        </motion.tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="px-4 py-3 font-semibold text-gray-700">
                        Task
                      </th>
                      <th className="px-4 py-3 font-semibold text-gray-700">
                        Due Date
                      </th>
                      <th className="px-4 py-3 font-semibold text-gray-700">
                        Priority
                      </th>
                      <th className="px-4 py-3 font-semibold text-gray-700">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentUserWorks.map((work, index) => (
                      <motion.tr
                        key={work.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.05 }}
                        className="border-b border-gray-200 hover:bg-gray-50"
                      >
                        <td className="px-4 py-3 text-gray-700">
                          {work.title}
                        </td>
                        <td className="px-4 py-3 font-semibold text-gray-800">
                          {work.dueDate}
                        </td>
                        <td className="px-4 py-3 text-gray-700">
                          {work.priority}
                        </td>
                        <td className="px-4 py-3">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusBadgeClass(work.status)}`}
                          >
                            {work.status}
                          </span>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </motion.div>
        )}
      </main>
    </motion.div>
  );
}
