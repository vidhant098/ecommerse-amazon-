import React, { useState } from "react";
import axios from "axios"; 
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

 

const Register = () => {

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(
        "http://localhost:4000/register",
        {
          username: username,
          email: email,
          password: password
        }
      );

      alert("Account created successfully");

      // clear form
      setUsername("");
      setEmail("");
      setPassword("");

    } catch (error) {
      console.log(error.response?.data);
    }
  };

  return (

    

    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      {/* Form Box */} 
    
      <div className="bg-white p-10 rounded-md shadow-lg w-full max-w-lg border">

        <h2 className="text-3xl font-semibold mb-8 text-center">
        Register Hare 
        </h2>

        <form onSubmit={handleRegister} className="space-y-5">

          {/* Username */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Username
            </label>

            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full h-12 border px-4 text-lg rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-12 border px-4 text-lg rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-12 border px-4 text-lg rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Button */}
          <button  onClick={handleRegister}
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 text-lg rounded"
          >
            Create your account
          </button>

        </form> 
        <br />
        <p>already have account </p> 
                <br />

  <Link    to={'/Login'}>  <button className="bg-cyan-100  text-blue font-semibold py-2 px-4 rounded" >login hare </button></Link>
      </div>
 
  
    </div>
  );
};

export default Register;