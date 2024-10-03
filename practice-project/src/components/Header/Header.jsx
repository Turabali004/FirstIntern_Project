import React from 'react'
import { Link } from "react-router-dom";


function Header() {
  return (
    <div>
      <nav className="flex justify-between items-center w-full py-4">
        <div className="text-xl font-bold">Your Logo</div>
        <div className="space-x-10 text-2xl text-gray-400">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 text-black rounded-full"
          />
          <Link to="/" className=" hover:underline">
            Home
          </Link>
          <Link to="/store" className=" hover:underline">
            Store
          </Link>
          <Link to="/contact" className=" hover:underline">
            Contact
          </Link>
          <Link to="/help" className=" hover:underline">
            Help
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Header