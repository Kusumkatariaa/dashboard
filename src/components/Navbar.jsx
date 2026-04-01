import React from 'react'

const Navbar = ({ toggleSidebar }) => {
    return (
        <div className="h-14 bg-white shadow flex items-center justify-between px-6">

            <div className="flex items-center gap-4">

                {/* HAMBURGER */}
                <button onClick={toggleSidebar} className="text-xl">
                    ☰
                </button>

                <input
                    type="text"
                    placeholder="Search..."
                    className="px-3 py-1 rounded bg-gray-100 outline-none"
                />
            </div>

            <div className="flex items-center gap-5">
                <img
                    className="w-10 h-10 rounded"
                    src="https://demo.adminkit.io/img/avatars/avatar.jpg"
                    alt=""
                />

            </div>

        </div>
    );
};

export default Navbar;