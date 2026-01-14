import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { getUsers } from "../services/userService";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("idle");
  // idle | loading | success | invalid | api-error

  const handleLogin = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const users = await getUsers();

      const foundUser = users.find(
        (u) => u.email === email && u.password === password
      );

      if (!foundUser) {
        setStatus("invalid");
        return;
      }

      setStatus("success");

      // SAVE TO LOCAL STORAGE
      localStorage.setItem("auth", JSON.stringify(foundUser));

      setTimeout(() => {
        if (foundUser.role === "admin") {
          navigate("/admin/events");
        } else {
          navigate("/");
        }
      }, 700);

    } catch (err) {
      setStatus("api-error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <Card
        className={`w-full max-w-md transition-all duration-300
          ${status === "invalid" ? "animate-shake border-red-500" : ""}
        `}
      >
        <CardContent className="space-y-6">

          {/* HEADER */}
          <div className="text-center">
            <h1 className="text-2xl font-bold">Login</h1>
            <p className="text-sm text-gray-500">
              Masuk ke akun TixApps
            </p>
          </div>

          {/* MESSAGE */}
          {status === "invalid" && (
            <div className="bg-red-100 text-red-700 p-2 rounded text-sm">
              Password atau email salah
            </div>
          )}

          {status === "api-error" && (
            <div className="bg-yellow-100 text-yellow-700 p-2 rounded text-sm">
              Server tidak merespons. Coba lagi.
            </div>
          )}

          {status === "success" && (
            <div className="bg-green-100 text-green-700 p-2 rounded text-sm">
              Login berhasil
            </div>
          )}

          {/* FORM */}
          <form className="space-y-4" onSubmit={handleLogin}>
            <div className="space-y-1">
              <Label>Email</Label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-1">
              <Label>Password</Label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Memproses..." : "Login"}
            </Button>
          </form>

          <p className="text-center text-sm text-gray-500">
            Belum punya akun?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Daftar
            </Link>
          </p>

        </CardContent>
      </Card>
    </div>
  );
}
