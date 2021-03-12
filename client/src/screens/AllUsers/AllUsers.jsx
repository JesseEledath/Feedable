import { useState, useEffect } from "react";
import Layout from "../../components/shared/Layout/Layout"
import Sort from "../../components/Sort/Sort";
import { allUsers } from "../../services/users";
import "./AllUsers.css"

export default function AllUsers ({ user }) {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchUsers = async () => {
            const users = await allUsers()
            setUsers(users)
        }
        fetchUsers()
    }, [])

    console.log(user);
    console.log(users);

    return (
        <Layout user={user}>
            <div className="screen">
                <div className="filter-container">
                    <Sort />

                </div>
                <div className="users-container">
                    {users.map((user, i) => 
                        {const userCreated = new Date(user.createdAt).toDateString()
                            console.log(userCreated);
                            return (
                        <div key={i} className="user-box">
                            <div>{user.full_name}</div>
                            <div>{user.email}</div>
                            <div>User Since: {userCreated}</div>
                            <select>
                                <option value={user.role}>{user.role}</option>
                            </select>                            
                        </div>
                    )})}
                </div>
            </div>
        </Layout>
    )
}