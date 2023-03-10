import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";

export function Layout() {
  return (
    <div className="h-screen w-screen max-w-[425px] flex flex-col justify-between">
      <main className="flex-1 p-2 route-container">
        <Outlet />
      </main>
    </div>
  );
}
