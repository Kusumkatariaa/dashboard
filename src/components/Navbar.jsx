import React from 'react'

const Navbar = ({ toggleSidebar }) => {
    return (
        <div className="h-14 bg-white shadow flex items-center justify-between px-6">

            <div className="flex items-center gap-4">

                {/* HAMBURGER */}
                <button onClick={toggleSidebar} className="text-xl">
                    ☰
                </button>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="px-3 py-1 rounded bg-gray-100 outline-none"
                    />
                    
                    <svg className="absolute right-3 top-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </div>
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