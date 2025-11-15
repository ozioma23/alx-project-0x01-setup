import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
    return (
<header className="w-full p-4 bg-gray-900 text-white flex justify-between">
      <h1 className="text-xl">My App</h1>
      <nav className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/posts">Posts</Link>
        <Link href="/users">Users</Link>
      </nav>
    </header>
    )
}

export default Header