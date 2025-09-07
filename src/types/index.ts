export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  role: "admin" | "superadmin";
  status: "active" | "inactive";
  joinedAt: Date;
}

export interface Course {
  id: number;
  title: string;
  description: string;
  instructor: string;
  students: number;
  price: number;
  createdAt: string;
  updatedAt: string;
}