"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function UserProfile() {
  const [data, setData] = useState("nothing");
  const router = useRouter();
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout successful");
      router.push("/login");
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
    }
  };
  const getUserDetails = async () => {
    const res = await axios.get("/api/users/me");
    console.log(res.data);
    setData(res.data.data._id);
    console.log(data, "id");
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="font-bold text-2xl">Profile</h1>
      <hr />
      <p>Profile </p>
      <h2>
        {data == "nothing" ? (
          "nothing"
        ) : (
          <Link href={`profile/${data}`}>{data}</Link>
        )}
      </h2>
      <button
        className="mt-4 rounded-md bg-gray-500 px-4 py-2 text-white"
        onClick={logout}
      >
        Logout
      </button>
      <button
        className="mt-4 rounded-md bg-gray-500 px-4 py-2 text-white"
        onClick={getUserDetails}
      >
        Fetch User Details
      </button>
    </div>
  );
}
