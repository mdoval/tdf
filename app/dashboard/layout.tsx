import { ReactNode } from "react";
import { DashboardNavBar } from "../ui/dashboard/dashboard-navbar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-gray-200 h-full w-full">
      <DashboardNavBar />
      <div className="p-10">{children}</div>
    </div>
  );
}
