"use client";
import Link from "next/link";
import React from "react";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="font-bold text-2xl">Login</h1>
      <form>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter Username"
            className="p-1.5 m-1 border-0 w-full"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            className="p-1.5 m-1 border-0 w-full"
          />
        </div>
        <button
          type="submit"
          className="p-1 m-3 bg-gray-400 text-white p-2 rounded-full hover:bg-gray-600 hover:shadow-lg hover:cursor-auto transition duration-300"
        >
          Login
        </button>
        <button
          type="submit"
          className="p-.5 m-3 bg-gray-400 text-white p-2 rounded-full hover:bg-gray-600 hover:shadow-lg hover:cursor-auto transition duration-300"
        >
          Reset Password
        </button>
        <Link href="/signup">Sign up here</Link>
      </form>
    </div>
  );
}
