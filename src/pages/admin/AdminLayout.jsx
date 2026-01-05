import { Outlet } from "react-router-dom";
import AdminHeader from "../../components/admin/AdminHeader";

export default function AdminLayout() {
  return (
    <>
      <AdminHeader />
      <main className="p-6 bg-gray-50 min-h-screen">
        <Outlet />
      </main>
    </>
  );
}
