// src/components/ManageUsers.jsx
import { useEffect, useState } from "react";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/users")
      .then((res) => res.json())
      .then(setUsers);
  }, []);

  const updateRole = async (id, role) => {
    await fetch(`http://localhost:3001/api/users/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ role }),
    });

    setUsers(users.map((u) => (u._id === id ? { ...u, role } : u)));
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Manage Users</h2>
      {users.map((user) => (
        <div key={user._id} className="mb-2">
          {user.email}
          <select
            value={user.role}
            onChange={(e) => updateRole(user._id, e.target.value)}
            className="ml-2 border p-1"
          >
            <option value="contributor">Contributor</option>
            <option value="admin">Admin</option>
          </select>
        </div>
      ))}
    </div>
  );
};

export default ManageUsers;
