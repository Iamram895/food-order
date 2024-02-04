"use client";

import Image from "next/image";
import React, { useState } from "react";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      // Handle successful registration, e.g., redirect to login page
    } catch (error) {
      console.error("Error during registration:", error.message);
      // Handle error, e.g., display an error message to the user
    }
  };

  return (
    <section className="mt-8">
      <h1 className="text-center mt-4 text-primary text-4xl mb-4">Register</h1>
      <form className="block max-w-xs mx-auto" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded"
          type="submit"
        >
          Register
        </button>
        <div className="my-4 text-center text-gray-500">
          Or login with provider
        </div>
        <button className="flex gap-4 justify-center">
          <Image src={"/google.png"} alt="Google" width={24} height={24} />
          Login With Google
        </button>
      </form>
    </section>
  );
};

export default RegisterPage;
