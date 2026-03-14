import React, { useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      await axios.post("http://localhost:4000/login", {
        email: email,
        password: password
      });

      alert("Login successful");

      setEmail("");
      setPassword("");

    } catch (error) {
      console.log(error);
    }
  };

  return (

    <div className="flex items-center justify-center min-h-screen bg-gray-100">

     
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">

        <h2 className="text-3xl font-semibold mb-8 text-center">
          Let's Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-5">

         
          <div>
            <label className="block text-sm font-medium mb-1">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-12 border px-4 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

         
          <div>
            <label className="block text-sm font-medium mb-1">
              Password
            </label>

        <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-12 border px-4 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

         
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 text-lg rounded"
          >
            Login
          </button>

        </form>

   
        <p className="text-center mt-6">
          Don't have an account?
        </p>

        <Link to="/Register">
          <button className="w-full mt-3 bg-gray-300 hover:bg-gray-400 text-black font-semibold py-3 text-lg rounded">
            Create new account
          </button>
        </Link>

      </div>

    </div>

  )
}

export default Login