import Button from "../Atom/Button";

export default function CourseManagement() {
  const courses = [
    { id: 1, title: "React Mastery Course", instructor: "John Smith", students: 245, progress: 92, status: "active", category: "Frontend", price: 199 },
    { id: 2, title: "Python for Data Science", instructor: "Jane Doe", students: 189, progress: 78, status: "active", category: "Data Science", price: 249 },
    { id: 3, title: "UI/UX Design Fundamentals", instructor: "Mike Johnson", students: 156, progress: 85, status: "active", category: "Design", price: 179 },
    { id: 4, title: "Node.js Backend Development", instructor: "Sarah Wilson", students: 134, progress: 67, status: "active", category: "Backend", price: 229 },
    { id: 5, title: "Machine Learning Basics", instructor: "Alex Chen", students: 98, progress: 45, status: "draft", category: "AI/ML", price: 299 },
    { id: 6, title: "Mobile App Development", instructor: "Emma Davis", students: 167, progress: 89, status: "active", category: "Mobile", price: 259 }
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
  };

  const getGradientByIndex = (index: number) => {
    const gradients = [
      'from-amber-400 to-yellow-500',
      'from-blue-500 to-blue-700',
      'from-lime-500 to-lime-700',
      'from-orange-500 to-red-500',
      'from-yellow-500 to-amber-600',
      'from-blue-600 to-indigo-600'
    ];
    return gradients[index % gradients.length];
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-amber-900 flex items-center">
            <span className="mr-3 text-3xl">📚</span>
            Course Management
          </h2>
          <p className="text-amber-700 mt-1">Create and manage educational content</p>
        </div>
        <Button type="button" className="mt-4 sm:mt-0 bg-gradient-to-r from-lime-600 to-lime-800 hover:from-lime-700 hover:to-lime-900" label="Create Course" onClick={() => {}} />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <div key={course.id} className="bg-gradient-to-br from-white/98 to-amber-50/98 backdrop-blur-xl p-6 rounded-3xl shadow-xl border border-amber-200/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                course.status === 'active' ? 'bg-lime-100 text-lime-800' :
                course.status === 'draft' ? 'bg-yellow-100 text-yellow-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {course.status}
              </span>
              <span className="text-sm font-medium text-amber-600 bg-amber-100 px-2 py-1 rounded-lg">{course.category}</span>
            </div>
            
            <div className={`w-full h-3 bg-gradient-to-r ${getGradientByIndex(index)} rounded-full mb-4 shadow-inner`}>
              <div className="h-full bg-white/30 rounded-full transition-all duration-500" style={{width: `${100-course.progress}%`}}></div>
            </div>
            
            <h3 className="font-bold text-lg mb-2 text-amber-900">{course.title}</h3>
            <p className="text-amber-700 mb-4 flex items-center">
              <span className="mr-2">👨🏫</span>
              Instructor: {course.instructor}
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-amber-700 flex items-center">
                  <span className="mr-1">👥</span>
                  Students: {course.students}
                </span>
                <span className="text-amber-700 flex items-center">
                  <span className="mr-1">📈</span>
                  Progress: {course.progress}%
                </span>
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold text-amber-900">{formatCurrency(course.price)}</span>
              </div>
            </div>
            
            <div className="flex space-x-2">
              <Button type="button" className="flex-1 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900" label="Edit" onClick={() => {}} />
              <Button type="button" className="flex-1 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700" label="View" onClick={() => {}} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}