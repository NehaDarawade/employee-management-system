import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function Login()
{
    const [email,setEmail]=useState("");
    const[passward,setPassword]=useState("");
    const navigate=useNavigate();

    const handleLogin=()=>{
        if(email=='admin@gmail.com'||passward=='admin123')
        {
            navigate("/dashboard");
        }
        else{
            alert("Invalid Email and Passward");
        }
    }
    return(
        <div className="container mt-5 col-md-4">
      <h3 className="text-center">Login</h3>

      <input
        type="email"
        className="form-control mb-3"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        className="form-control mb-3"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="btn btn-primary w-100" onClick={handleLogin}>
        Login
      </button>
    </div>
    )
}
export default Login;


// import React from "react";
// import { useNavigate } from "react-router-dom";

// function Login() {

//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     navigate("/dashboard/add");   // after login go to add page
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "100px" }}>
//       <h2>Login Page</h2>

//       <form onSubmit={handleLogin}>
//         <input type="email" placeholder="Enter Email" required />
//         <br /><br />
//         <input type="password" placeholder="Enter Password" required />
//         <br /><br />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// export default Login;
