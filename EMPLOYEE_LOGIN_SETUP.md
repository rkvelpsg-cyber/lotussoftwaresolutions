# Employee Login Setup Guide

## Overview

The Employee Login feature is now integrated into your Lotus Software Solutions website. Follow these steps to set up Supabase and enable the employee authentication system.

## Step 1: Create a Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign up or log in to your account
3. Click "New Project" and create a new project
4. Choose a name, database password, and region
5. Wait for the project to be created

## Step 2: Get Your Credentials

1. Navigate to your project settings
2. Go to "API" section (in the left sidebar)
3. Copy the following values:
   - **Project URL** (SUPABASE_URL)
   - **Anon Public** key (SUPABASE_ANON_KEY)

## Step 3: Update Supabase Configuration

1. Open `src/lib/supabase.ts` in your code editor
2. Replace the placeholder values with your actual credentials:

```typescript
const SUPABASE_URL = "https://your-project.supabase.co"; // Replace with your Project URL
const SUPABASE_ANON_KEY = "your-anon-key"; // Replace with your Anon Public key
```

## Step 4: Create Employees Table in Supabase

1. In Supabase dashboard, go to "Table Editor"
2. Click "New Table"
3. Create a table named **`employees`** with the following columns:
   - `id` (UUID, Primary Key, Auto-generate)
   - `username` (Text, Required)
   - `password` (Text, Required)
   - `email` (Text, Optional)
   - `department` (Text, Optional)
   - `created_at` (Timestamp, set default to `now()`)

## Step 5: Add Employee Data

1. Insert a new row with the following data:
   - **username**: `veenaanand`
   - **password**: `Test$123`
   - **email**: (optional) `veena@example.com`
   - **department**: (optional) `Development`

2. You can add more employees by inserting additional rows with different usernames and passwords

## Step 6: Enable Row Level Security (RLS) - Optional but Recommended

1. Go to "Authentication" → "Policies"
2. For the `employees` table, consider adding policies to protect the data
3. Example: Allow select only when the user is authenticated

## Step 7: Test the Login

1. Your development server should still be running at `http://localhost:5173/`
2. Click the "Employee Login" button in the top right
3. Enter the credentials:
   - **Username**: `veenaanand`
   - **Password**: `Test$123`
4. You should see the Employee Dashboard

## Features Included

### Employee Dashboard Includes:

- **Overview Tab**: Shows key statistics and tasks
- **My Tasks Tab**: Display and manage tasks
- **Team Tab**: View team members information
- **Timesheet Tab**: Weekly timesheet tracking
- **Logout Button**: Secure logout functionality

## Important Notes

⚠️ **Security Consideration**: The current implementation stores passwords in plain text in the database. For production use, you should:

- Use Supabase's built-in authentication instead
- Hash passwords using a library like `bcryptjs`
- Implement JWT tokens for session management
- Enable Row Level Security (RLS) policies

## Directory Structure

```
src/
├── lib/
│   └── supabase.ts          // Supabase configuration
├── app/
│   ├── App.tsx              // Main app with login flow
│   └── components/
│       ├── Header.tsx        // Updated with Employee Login button
│       ├── EmployeeLogin.tsx // Login modal component
│       └── EmployeeDashboard.tsx // Dashboard component
```

## Troubleshooting

### Login fails with "Invalid username or password"

- Check that you've entered the correct credentials
- Verify the data exists in the Supabase employees table
- Check browser console for any error messages

### Supabase connection errors

- Verify your SUPABASE_URL and SUPABASE_ANON_KEY are correct
- Check that your Supabase project is active
- Clear browser cache and try again

### Dashboard doesn't show after login

- Check that localStorage is enabled in your browser
- Open browser DevTools → Application → Storage to verify data is saved
- Check console for JavaScript errors

## Demo Credentials

For testing purposes, the following demo credentials are set up:

- **Username**: `veenaanand`
- **Password**: `Test$123`

## Environment Variables (Optional)

If you want to use environment variables (recommended for production):

1. Create a `.env.local` file in the project root:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

2. Update `src/lib/supabase.ts`:

```typescript
const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://your-project.supabase.co";
const SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "your-anon-key";
```

## Next Steps

To further enhance the Employee Dashboard:

1. Add more detailed task management features
2. Implement role-based access control
3. Add email notifications
4. Create admin panel for managing employees
5. Integrate with project management tools
6. Add analytics and reporting features

---

For any questions or issues, refer to:

- [Supabase Documentation](https://supabase.com/docs)
- [React Documentation](https://react.dev)
- [Next.js Documentation](https://nextjs.org/docs)
