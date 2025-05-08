"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function LoginPage() {
  const router = useRouter();
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pass, setPass] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onLogin = async () => {
    try {
      setLoading(true);
      console.log("Login clicked", user);
      const response = await axios.post("/api/users/login", user);
      console.log("Login success", response.data);
      toast.success("Login successful");
      router.push("/profile");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="font-bold text-2xl">{loading ? "loading" : "Login"}</h1>
      <div className="alignContent p-1.5 width-half">
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="Enter Email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="p-1.5 m-1 border-0 w-full"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <div className="flex items-center">
            <input
              type="password"
              id="password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              value={user.password}
              placeholder="Enter Password"
              className="p-1.5 m-1 border-0 w-full"
            />
            <button onClick={() => setPass(!pass)}>
              {!pass ? <FaEye className="" /> : <FaEyeSlash />}
            </button>
          </div>
        </div>

        <button
          onClick={onLogin}
          className="p-1 m-3 bg-gray-400 text-white  rounded-full hover:bg-gray-600 hover:shadow-lg hover:cursor-auto transition duration-300"
        >
          Login
        </button>
        <button className="p-.5 m-3 bg-gray-400 text-white p-2 rounded-full hover:bg-gray-600 hover:shadow-lg hover:cursor-auto transition duration-300">
          Reset Password
        </button>
        <Link href="/signup">Sign up here</Link>
      </div>
    </div>
  );
}
