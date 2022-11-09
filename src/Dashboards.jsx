import React,{useContext} from "react";
import { UserContext } from "./context/userContext";

const Dashboard = ()=>{
    const{user,logoutUser}=useContext(UserContext);

    return(
        <div>
    <h1>Dashboard</h1>
    <h2>Name: {user.displayName}</h2>
    <h2>Email:{user.email}</h2>
    <button onClick={logoutUser} className="logout-btn">Logout</button>
    </div>
    )
}

export default Dashboard;