import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className="flex h-dvh">
      <Sidebar />
      <main className="w-full px-5">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
