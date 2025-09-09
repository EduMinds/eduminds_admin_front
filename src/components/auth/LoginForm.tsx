import { useState } from "react";
import Input from "../Atom/Input";
import Button from "../Atom/Button";

interface LoginFormProps {
  onLogin: () => void;
}

export default function LoginForm({ onLogin }: LoginFormProps) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    onLogin();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-400 via-yellow-500 to-orange-400 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-amber-600/20 to-transparent"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-lime-400/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-amber-300/25 rounded-full blur-2xl animate-pulse delay-500"></div>
      
      <div className="relative z-10 max-w-md w-full mx-4">
        <div className="backdrop-blur-xl bg-white/95 border border-amber-200/50 p-8 rounded-3xl shadow-2xl">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
              <span className="text-2xl font-bold text-white">📚</span>
            </div>
            <h2 className="text-3xl font-bold text-amber-900 mb-2">EduMind Admin</h2>
            <p className="text-amber-700">Educational Technology Dashboard</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              id="email"
              label="Email Address"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="admin@edumind.com"
              required={true}
              className="bg-amber-50/80 border-amber-200 text-amber-900 placeholder-amber-600"
              autoComplete="email"
            />
            <Input
              id="password"
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              required={true}
              className="bg-amber-50/80 border-amber-200 text-amber-900 placeholder-amber-600"
              autoComplete="current-password"
            />
            <Button 
              type="submit" 
              className={`w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 transform transition-all duration-300 hover:scale-105 shadow-lg ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
              label={isLoading ? "Authenticating..." : "Access Dashboard"} 
              onClick={() => {}} 
            />
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-amber-600 text-sm">Demo credentials: any email/password</p>
          </div>
        </div>
      </div>
    </div>
  );
}