import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Lock, AlertCircle, Loader } from "lucide-react";
import { getUserByCredentials } from "../lib/employeeAuth";

interface EmployeeLoginProps {
  onLoginSuccess: () => void;
  onClose: () => void;
  isDarkMode?: boolean;
}

export function EmployeeLogin({
  onLoginSuccess,
  onClose,
  isDarkMode = false,
}: EmployeeLoginProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    const authenticatedUser = await getUserByCredentials(username, password);

    if (authenticatedUser) {
      const employeeData = {
        id: authenticatedUser.id,
        username: authenticatedUser.username,
        name: authenticatedUser.name,
        email: authenticatedUser.email,
        department: authenticatedUser.department,
        designation: authenticatedUser.designation,
        role: authenticatedUser.role,
        assignedWorks: authenticatedUser.assignedWorks,
      };
      localStorage.setItem("employeeData", JSON.stringify(employeeData));
      localStorage.setItem("isEmployeeLoggedIn", "true");

      onLoginSuccess();
    } else {
      setError("Invalid username or password");
    }

    setIsLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className={`w-full max-w-md mx-4 rounded-lg shadow-2xl p-8 ${
          isDarkMode ? "bg-gray-800" : "bg-white"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center mb-8">
          <h2
            className={`text-3xl font-bold mb-2 ${
              isDarkMode ? "text-white" : "text-gray-800"
            }`}
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Employee Dashboard
          </h2>
          <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            Enter your credentials to access
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg"
            >
              <AlertCircle className="text-red-600" size={20} />
              <p className="text-red-700 text-sm">{error}</p>
            </motion.div>
          )}

          <div className="relative">
            <label
              className={`block text-sm font-semibold mb-2 ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Username
            </label>
            <div className="relative">
              <Mail
                className={`absolute left-3 top-3 ${
                  isDarkMode ? "text-gray-500" : "text-gray-400"
                }`}
                size={20}
              />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={`w-full pl-10 pr-4 py-3 border-2 rounded-lg focus:outline-none focus:border-purple-500 transition-colors ${
                  isDarkMode
                    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-500"
                    : "bg-white border-gray-200 text-gray-800 placeholder-gray-400"
                }`}
                placeholder="Enter your username"
                autoComplete="off"
                disabled={isLoading}
              />
            </div>
          </div>

          <div className="relative">
            <label
              className={`block text-sm font-semibold mb-2 ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Password
            </label>
            <div className="relative">
              <Lock
                className={`absolute left-3 top-3 ${
                  isDarkMode ? "text-gray-500" : "text-gray-400"
                }`}
                size={20}
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full pl-10 pr-4 py-3 border-2 rounded-lg focus:outline-none focus:border-purple-500 transition-colors ${
                  isDarkMode
                    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-500"
                    : "bg-white border-gray-200 text-gray-800 placeholder-gray-400"
                }`}
                placeholder="Enter your password"
                autoComplete="new-password"
                disabled={isLoading}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading || !username || !password}
            className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold py-3 rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <Loader size={20} className="animate-spin" />
                Logging in...
              </>
            ) : (
              "Login"
            )}
          </button>

          <button
            type="button"
            onClick={onClose}
            className={`w-full py-3 rounded-lg font-semibold transition-colors ${
              isDarkMode
                ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Close
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
}
