import { useState, useEffect } from "react";
import Button from "../Atom/Button";
import DashboardOverview from "./DashboardOverview";
import StudentManagement from "./StudentManagement";
import CourseManagement from "./CourseManagement";

interface DashboardProps {
  onLogout: () => void;
}

export default function Dashboard({ onLogout }: DashboardProps) {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: "🏠", description: "Overview & Analytics" },
    { id: "students", label: "Students", icon: "👥", description: "Student Management" },
    { id: "courses", label: "Courses", icon: "📚", description: "Course Management" },
    { id: "instructors", label: "Instructors", icon: "👨🏫", description: "Instructor Portal" },
    { id: "analytics", label: "Analytics", icon: "📊", description: "Reports & Insights" },
    { id: "payments", label: "Payments", icon: "💳", description: "Financial Overview" },
    { id: "settings", label: "Settings", icon: "⚙️", description: "System Configuration" }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardOverview currentTime={currentTime} />;
      case "students":
        return <StudentManagement />;
      case "courses":
        return <CourseManagement />;
      default:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-amber-900 capitalize">{activeTab} Management</h2>
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 backdrop-blur-xl rounded-3xl shadow-xl border border-amber-200/50 p-12 text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-lime-400 to-lime-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                <span className="text-6xl text-white">🚧</span>
              </div>
              <h3 className="text-2xl font-bold text-amber-900 mb-4">Coming Soon</h3>
              <p className="text-amber-700 text-lg mb-6">
                {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} management features are currently under development.
              </p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      {sidebarOpen && (
        <div className="fixed inset-0 bg-amber-900/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)}></div>
      )}

      <header className="bg-gradient-to-r from-amber-100/95 to-yellow-100/95 backdrop-blur-xl border-b border-amber-200/50 sticky top-0 z-30 shadow-lg">
        <div className="px-3 sm:px-4 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-1.5 sm:p-2 rounded-xl hover:bg-amber-200/50 transition-colors"
              >
                <span className="text-lg sm:text-xl text-amber-800">☰</span>
              </button>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm sm:text-base">📚</span>
                </div>
                <div>
                  <h1 className="text-base sm:text-xl font-bold text-amber-900">EduMind Admin</h1>
                  <p className="text-xs sm:text-sm text-amber-700 hidden sm:block">{currentTime.toLocaleString()}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="hidden md:block text-right">
                <p className="text-xs sm:text-sm font-medium text-amber-900">Administrator</p>
                <p className="text-xs text-amber-700">Super Admin Access</p>
              </div>
              <Button 
                type="button" 
                className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 transform transition-all duration-200 hover:scale-105 text-xs sm:text-sm px-3 sm:px-4 py-2 shadow-lg" 
                label="Logout" 
                onClick={onLogout} 
              />
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-72 bg-gradient-to-b from-white/98 to-amber-50/98 backdrop-blur-xl border-r border-amber-200/50 shadow-xl transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
          <nav className="p-6 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center space-x-4 px-4 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 group ${
                  activeTab === item.id 
                    ? "bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg" 
                    : "hover:bg-gradient-to-r hover:from-amber-100 hover:to-yellow-100 text-amber-800"
                }`}
              >
                <span className="text-2xl">{item.icon}</span>
                <div className="text-left">
                  <div className="font-semibold">{item.label}</div>
                  <div className={`text-xs ${activeTab === item.id ? 'text-blue-100' : 'text-amber-600'}`}>
                    {item.description}
                  </div>
                </div>
              </button>
            ))}
          </nav>
        </aside>

        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}