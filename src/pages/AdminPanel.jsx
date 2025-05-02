// src/pages/AdminPanel.jsx
import FileUpload from "../components/FileUpload";
import ManageUsers from "../components/ManageUsers";

export default function AdminPanel() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      <FileUpload />
      <hr className="my-6" />
      <ManageUsers />
    </div>
  );
}
