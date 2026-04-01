import React from 'react'

const Navbar = () => {
  return (
    <div className="h-14 bg-white shadow flex items-center justify-between px-6">

      {/* Left */}
      <div className="flex items-center gap-4">
        <span className="text-xl">☰</span>

        <input
          type="text"
          placeholder="Search..."
          className="px-3 py-1 rounded bg-gray-100 outline-none"
        />
      </div>

      {/* Right */}
      <div className="flex items-center gap-5">
        <span>🔔</span>
        <span>💬</span>
        <span>🌍</span>

        <img
          src="https://demo.adminkit.io/img/avatars/avatar.jpg"
          className="w-8 h-8 rounded-full"
        />
      </div>

    </div>
  )
}

export default Navbar
