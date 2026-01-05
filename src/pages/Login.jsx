import { Link } from "react-router-dom";

import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

export default function Login() {
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login button clicked");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <Card className="w-full max-w-md">
        <CardContent className="space-y-6">
          
          {/* HEADER */}
          <div className="text-center">
            <h1 className="text-2xl font-bold">Login</h1>
            <p className="text-sm text-gray-500">
              Masuk ke akun TixApps
            </p>
          </div>

          {/* FORM */}
          <form className="space-y-4" onSubmit={handleLogin}>
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="email@example.com"
                required
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="********"
                required
              />
            </div>

            {/* LUPA PASSWORD */}
            <div className="text-right">
              <Link
                to="/forgot-password"
                className="text-sm text-blue-600 hover:underline"
              >
                Lupa password?
              </Link>
            </div>

            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>

          {/* SIGN UP */}
          <p className="text-center text-sm text-gray-500">
            Belum punya akun?{" "}
            <Link
              to="/signup"
              className="text-blue-600 hover:underline font-medium"
            >
              Daftar
            </Link>
          </p>

        </CardContent>
      </Card>
    </div>
  );
}
