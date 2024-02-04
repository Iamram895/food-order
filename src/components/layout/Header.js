import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <header className="flex items-center justify-between p-3">
      <nav className="flex gap-8 items-center text-gray-500 font-semibold">
        <Link className=" text-primary font-semibold text-2xl" href="/">
          ST Pizza
        </Link>
        <Link href={""}>Home</Link>
        <Link href={""}>Menu</Link>
        <Link href={""}>About</Link>
        <Link href={""}>Connect</Link>
      </nav>
      <nav className="flex gap-4 items-center text-gray-500 font-semibold">
        <Link href={"/login"}>Login</Link>
        <Link
          href={"/register"}
          className="bg-primary rounded-full text-white px-8 py-2"
        >
          Register
        </Link>
      </nav>
    </header>
  );
};

export default Header;
