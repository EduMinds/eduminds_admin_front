interface DashboardOverviewProps {
  currentTime: Date;
}

export default function DashboardOverview({ currentTime }: DashboardOverviewProps) {
  const stats = {
    totalStudents: 12847,
    totalCourses: 234,
    totalInstructors: 156,
    totalRevenue: 892450,
    activeUsers: 3421,
    completionRate: 87.5
  };

  const activities = [
    { id: 1, type: "enrollment", message: "New student enrolled in React Mastery Course", timestamp: "2 minutes ago", user: "Alex Johnson" },
    { id: 2, type: "completion", message: "Sarah Chen completed Python for Data Science", timestamp: "15 minutes ago", user: "Sarah Chen" },
    { id: 3, type: "payment", message: "Payment received for UI/UX Design course", timestamp: "1 hour ago", user: "Michael Brown" },
    { id: 4, type: "course_update", message: "Node.js course content updated", timestamp: "2 hours ago", user: "Sarah Wilson" },
    { id: 5, type: "enrollment", message: "Emma Wilson joined Machine Learning Basics", timestamp: "3 hours ago", user: "Emma Wilson" }
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "enrollment": return "🎓";
      case "completion": return "✅";
      case "payment": return "💰";
      case "course_update": return "📝";
      default: return "📌";
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-amber-900">Dashboard Overview</h2>
          <p className="text-amber-700 mt-1">Welcome back! Here's what's happening with your platform.</p>
        </div>
        <div className="mt-4 sm:mt-0 text-sm text-amber-600">
          Last updated: {currentTime.toLocaleString()}
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        <div className="col-span-1 sm:col-span-2 lg:col-span-1 xl:col-span-2 bg-gradient-to-br from-amber-400 to-yellow-500 p-6 rounded-3xl text-white shadow-xl transform hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-amber-100 text-sm font-medium">Total Students</p>
              <p className="text-3xl font-bold">{stats.totalStudents.toLocaleString()}</p>
              <p className="text-amber-100 text-sm">+12% from last month</p>
            </div>
            <div className="text-4xl opacity-80">👥</div>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 rounded-3xl text-white shadow-xl transform hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm font-medium">Courses</p>
              <p className="text-3xl font-bold">{stats.totalCourses}</p>
              <p className="text-blue-100 text-sm">+8 new</p>
            </div>
            <div className="text-4xl opacity-80">📚</div>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-lime-500 to-lime-700 p-6 rounded-3xl text-white shadow-xl transform hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-lime-100 text-sm font-medium">Instructors</p>
              <p className="text-3xl font-bold">{stats.totalInstructors}</p>
              <p className="text-lime-100 text-sm">+5 this week</p>
            </div>
            <div className="text-4xl opacity-80">👨🏫</div>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-amber-600 to-orange-600 p-6 rounded-3xl text-white shadow-xl transform hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-amber-100 text-sm font-medium">Revenue</p>
              <p className="text-3xl font-bold">{formatCurrency(stats.totalRevenue)}</p>
              <p className="text-amber-100 text-sm">+15% growth</p>
            </div>
            <div className="text-4xl opacity-80">💰</div>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-yellow-500 to-amber-500 p-6 rounded-3xl text-white shadow-xl transform hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-yellow-100 text-sm font-medium">Active Users</p>
              <p className="text-3xl font-bold">{stats.activeUsers.toLocaleString()}</p>
              <p className="text-yellow-100 text-sm">Online now</p>
            </div>
            <div className="text-4xl opacity-80">🟢</div>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-orange-500 to-red-500 p-6 rounded-3xl text-white shadow-xl transform hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100 text-sm font-medium">Completion</p>
              <p className="text-3xl font-bold">{stats.completionRate}%</p>
              <p className="text-orange-100 text-sm">Average rate</p>
            </div>
            <div className="text-4xl opacity-80">📈</div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-white/98 to-amber-50/98 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-amber-200/50">
        <h3 className="text-xl font-bold text-amber-900 mb-6 flex items-center">
          <span className="mr-3 text-2xl">📋</span>
          Recent Activities
        </h3>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-center space-x-4 p-4 rounded-2xl hover:bg-amber-100/50 transition-colors border border-amber-100/50 bg-white/50">
              <div className="text-2xl bg-gradient-to-br from-blue-100 to-blue-200 p-2 rounded-xl">{getActivityIcon(activity.type)}</div>
              <div className="flex-1">
                <p className="text-amber-900 font-medium">{activity.message}</p>
                <div className="flex items-center space-x-2 text-sm text-amber-600">
                  <span>{activity.user}</span>
                  <span>•</span>
                  <span>{activity.timestamp}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}