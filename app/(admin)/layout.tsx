import "../globals.css";
import AdminSidebar from "@/app/_components/admin-sidebar";

export default function AdminLayout() {
  return (
    <html lang="en">
      <body>
        <div
          className="flex items-center justify-evenly p-4 bg-brand"
          aria-label="Admin"
        >
          <AdminSidebar />
        </div>
      </body>
    </html>
  );
}
