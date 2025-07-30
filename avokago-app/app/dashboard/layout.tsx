import AuthGuard from "@/components/AuthGuard";
import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthGuard>
      <div className="flex h-screen bg-[#FEFDFF]">
        <div className="p-4">
          <Sidebar />
        </div>
        <div className="flex-1">{children}</div>
      </div>
    </AuthGuard>
  );
}
