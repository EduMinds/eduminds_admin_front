import { useState } from "react";
import Input from "../Atom/Input";
import Button from "../Atom/Button";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full border-2 p-5 rounded-2xl">
        <div className="mt-2">
          <h2 className="text-center text-3xl font-black text-black font-poppins">
            Admin Dashboard
          </h2>
        </div>

        <form className="mt-8" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2 mb-3">
            <Input
              id="email"
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required={true}
              className=""
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
              className=""
              autoComplete="current-password"
            />
          </div>
          <div className="w-full">
            <Button
            type="submit"
            className="w-full capitalize"
            label="Sign In"
            onClick={() => {handleSubmit}}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
