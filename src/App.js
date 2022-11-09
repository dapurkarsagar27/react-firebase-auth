import { useContext } from "react";
import "./App.css";
import Dashboard from "./Dashboards";
// import SignIn from "./signIn";
// import SignUp from "./signUp";
import Auth from "./auth";
import { UserContext } from "./context/userContext";

function App() {
  const{loading,error,user}=useContext(UserContext)

  

  return <div className="App">
    {error && <p className="error-message">{error}</p>}
    {loading ? <h2 >Loading... </h2> : <>{user ? <Dashboard/>: <Auth/>} </>}
  </div>;
}

export default App;
