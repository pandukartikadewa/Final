import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

const USERS_API = "https://695529841cd5294d2c7e8d7f.mockapi.io/api/v1/users";

export default function Signup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("idle");
  // idle | loading | exist | success | api-error

  const handleSignup = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch(USERS_API);
      if (!res.ok) throw new Error("API_ERROR");

      const users = await res.json();

      const isExist = users.some((u) => u.email === email);
      if (isExist) {
        setStatus("exist");
        return;
      }

      await fetch(USERS_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          role: "user",
        }),
      });

      setStatus("success");

      setTimeout(() => {
        navigate("/login");
      }, 800);

    } catch (err) {
      setStatus("api-error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <Card
        className={`w-full max-w-md transition-all duration-300
          ${status === "exist" ? "animate-shake border-red-500" : ""}
        `}
      >
        <CardContent className="space-y-6">

          {/* HEADER */}
          <div className="text-center">
            <h1 className="text-2xl font-bold">Daftar Akun</h1>
            <p className="text-sm text-gray-500">
              Buat akun baru TixApps
            </p>
          </div>

          {/* MESSAGE */}
          {status === "exist" && (
            <div className="bg-red-100 text-red-700 p-2 rounded text-sm">
              Email sudah terdaftar
            </div>
          )}

          {status === "api-error" && (
            <div className="bg-yellow-100 text-yellow-700 p-2 rounded text-sm">
              Server tidak merespons
            </div>
          )}

          {status === "success" && (
            <div className="bg-green-100 text-green-700 p-2 rounded text-sm">
              Akun berhasil dibuat
            </div>
          )}

          {/* FORM */}
          <form className="space-y-4" onSubmit={handleSignup}>
            <div className="space-y-1">
              <Label>Email</Label>
              <Input
                type="email"
                placeholder="email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-1">
              <Label>Password</Label>
              <Input
                type="password"
                placeholder="********"
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
              {status === "loading" ? "Membuat akun..." : "Daftar"}
            </Button>
          </form>

          {/* LOGIN */}
          <p className="text-center text-sm text-gray-500">
            Sudah punya akun?{" "}
            <Link
              to="/login"
              className="text-blue-600 hover:underline font-medium"
            >
              Login
            </Link>
          </p>

        </CardContent>
      </Card>
    </div>
  );
}
