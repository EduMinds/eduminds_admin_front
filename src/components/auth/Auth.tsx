import { useState } from "react";
import LoginForm from "./LoginForm";
import Dashboard from "../dashboard/Dashboard";

export default function AdminAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return isAuthenticated ? (
    <Dashboard onLogout={() => setIsAuthenticated(false)} />
  ) : (
    <LoginForm onLogin={() => setIsAuthenticated(true)} />
  );
}