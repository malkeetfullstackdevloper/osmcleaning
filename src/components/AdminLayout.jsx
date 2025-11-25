import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const AdminLayout = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="p-4 w-100">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
