"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Signup() {
  const [pass, setPass] = useState(false);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  console.log(user);
  return (
    <div className=" flex flex-col items-center justify-center min-h-screen py-2 ">
      <h1
        style={{ alignContent: "center" }}
        className=" font-bold text-2xl m-2"
      >
        Signup
      </h1>
      <hr />
      <div className="alignContent p-1.5 ">
        <label className="m-1" htmlFor="username">
          Username
        </label>
        <input
          className="p-1.5 m-1 border-0 w-full"
          id="username"
          type="text"
          placeholder="Enter Username"
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <hr />
        <label htmlFor="Email" className="m-1">
          Email
        </label>
        <input
          className="w-[300px] h-[40px] p-1 m-1 text-lg  w-full"
          id="Email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          type="text"
          placeholder="Enter Email"
        />
        <hr />
        <label htmlFor="password" className="m-1">
          Password
        </label>
        <div className="flex ">
          <input
            className="w-[300px] h-[40px] p-1 m-1 text-lg  w-full"
            id="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            type={pass ? "text" : "password"}
            placeholder="Enter Password"
          />
          <button onClick={() => setPass(!pass)}>
            {!pass ? <FaEye className="" /> : <FaEyeSlash />}
          </button>
        </div>
        <hr />
        <div className="flex  items-center justify-between">
          <button
            type="submit"
            className="p-1 m-3 bg-gray-400 rounded-full align-center flex justify-center shadow-md transition duration-300 hover:bg-gray-600 hover:shadow-lg hover:cursor-auto text-white"
          >
            Signup
          </button>
          <Link href="/login">Already a user ! Login here </Link>
        </div>
      </div>
    </div>
  );
}
