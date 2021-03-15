import { useState, useEffect } from "react";
import Layout from "../../components/shared/Layout/Layout";
import { allUsers } from "../../services/users";
import "./AllUsers.css";

export default function AllUsers({ user }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await allUsers();
      setUsers(users);
    };
    fetchUsers();
  }, []);

  return (
    <Layout user={user}>
      <div className="screen">
        <div className="users-container">
          {users.map((user, i) => {
            const userCreated = new Date(user.createdAt).toDateString();

            return (
              <div key={i} className="user-box">
                <div>{user.full_name}</div>
                <div>{user.email}</div>
                <div>User Since: {userCreated}</div>
                <select>
                  <option value={user.role}>{user.role}</option>
                </select>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
