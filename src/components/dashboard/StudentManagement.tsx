import Button from "../Atom/Button";

export default function StudentManagement() {
  const students = [
    { id: 1, name: "Alex Johnson", email: "alex.j@email.com", courses: 3, status: "active", joinedAt: "2024-01-15" },
    { id: 2, name: "Sarah Chen", email: "sarah.c@email.com", courses: 5, status: "active", joinedAt: "2024-01-10" },
    { id: 3, name: "Michael Brown", email: "michael.b@email.com", courses: 2, status: "inactive", joinedAt: "2024-01-08" },
    { id: 4, name: "Emma Wilson", email: "emma.w@email.com", courses: 4, status: "active", joinedAt: "2024-01-05" },
    { id: 5, name: "David Lee", email: "david.l@email.com", courses: 6, status: "active", joinedAt: "2024-01-03" }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-amber-900 flex items-center">
            <span className="mr-3 text-3xl">👥</span>
            Student Management
          </h2>
          <p className="text-amber-700 mt-1">Manage and monitor student progress</p>
        </div>
        <Button type="button" className="mt-4 sm:mt-0 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900" label="Add Student" onClick={() => {}} />
      </div>
      
      <div className="bg-gradient-to-br from-white/98 to-amber-50/98 backdrop-blur-xl rounded-3xl shadow-xl border border-amber-200/50 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-amber-100/80 to-yellow-100/80">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-amber-800 uppercase tracking-wider">Student</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-amber-800 uppercase tracking-wider">Email</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-amber-800 uppercase tracking-wider">Courses</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-amber-800 uppercase tracking-wider">Joined</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-amber-800 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-amber-800 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-amber-200/50">
              {students.map((student, index) => (
                <tr key={student.id} className="hover:bg-amber-50/50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className={`w-10 h-10 bg-gradient-to-br ${
                        index % 4 === 0 ? 'from-blue-500 to-blue-700' :
                        index % 4 === 1 ? 'from-lime-500 to-lime-700' :
                        index % 4 === 2 ? 'from-amber-500 to-amber-700' :
                        'from-orange-500 to-orange-700'
                      } rounded-full flex items-center justify-center text-white font-semibold shadow-lg`}>
                        {student.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-amber-900">{student.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-amber-700">{student.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      {student.courses} courses
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-amber-600">{student.joinedAt}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${
                      student.status === 'active' 
                        ? 'bg-lime-100 text-lime-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {student.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-3 font-semibold">Edit</button>
                    <button className="text-red-600 hover:text-red-900 font-semibold">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}