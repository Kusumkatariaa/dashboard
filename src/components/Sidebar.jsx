import React, { useState } from 'react'
import { NavLink } from 'react-router'

const Sidebar = () => {
 
    const [openDashboard, setOpenDashboard] = useState(true);
    const [openPages, setOpenPages] = useState(false);
    const [openAuth, setOpenAuth] = useState(false);
 
    const linkClass = ({ isActive }) =>
        `flex items-center gap-3 px-3 py-2 rounded text-sm transition ${
            isActive
                ? "text-blue-400 bg-[#2c3a4d] border-l-4 border-blue-500"
                : "text-gray-300 hover:bg-[#2c3a4d]"
        }`;

    return (
        <div className='min-w-60 bg-[#1f2937] text-white h-screen flex flex-col'>

            <div className="p-5 space-y-6">

                {/* Logo */}
                <div className="relative">
                    <h2 className="text-xl font-semibold">AdminKit</h2>
                    <span className="text-[10px] bg-blue-600 px-1 py-0.5 font-bold uppercase rounded absolute top-0 left-24">
                        Pro
                    </span>
                </div>

                {/* User */}
                <div className="flex items-center gap-3">
                    <img
                        className="w-10 h-10 rounded"
                        src="https://demo.adminkit.io/img/avatars/avatar.jpg"
                        alt=""
                    />
                    <div>
                        <p className="text-sm font-medium">Charles Hall</p>
                        <p className="text-xs text-gray-400">Designer</p>
                    </div>
                </div>

                {/* Section */}
                <p className="text-xs text-gray-400 uppercase">Pages</p>

                {/* DASHBOARD */}
                <div>
                    <div
                        onClick={() => setOpenDashboard(!openDashboard)}
                        className="flex justify-between px-3 py-2 cursor-pointer hover:bg-[#2c3a4d] rounded"
                    >
                        <span>Dashboards</span>
                        <span>{openDashboard ? "▾" : "▸"}</span>
                    </div>

                    {openDashboard && (
                        <div className="ml-4 mt-2 space-y-1">
                            <NavLink to="/dashboard-analytics" className={linkClass}>
                                → Analytics
                            </NavLink>

                            <NavLink to="/dashboard-ecommerce" className={linkClass}>
                                → E-commerce
                            </NavLink>

                            <NavLink to="/dashboard-crypto" className={linkClass}>
                                → Crypto
                            </NavLink>
                        </div>
                    )}
                </div>

                {/* PAGES */}
                <div>
                    <div
                        onClick={() => setOpenPages(!openPages)}
                        className="flex justify-between px-3 py-2 cursor-pointer hover:bg-[#2c3a4d] rounded"
                    >
                        <span>Pages</span>
                        <span>{openPages ? "▾" : "▸"}</span>
                    </div>

                    {openPages && (
                        <div className="ml-4 mt-2 space-y-1">
                            <NavLink to="/pages-clients" className={linkClass}>
                                → Clients
                            </NavLink>

                            <NavLink to="/pages-settings" className={linkClass}>
                                → Settings
                            </NavLink>
                        </div>
                    )}
                </div>

                {/* PROFILE */}
                <NavLink to="/profile" className={linkClass}>
                    Profile
                </NavLink>

                {/* AUTH */}
                <div>
                    <div
                        onClick={() => setOpenAuth(!openAuth)}
                        className="flex justify-between px-3 py-2 cursor-pointer hover:bg-[#2c3a4d] rounded"
                    >
                        <span>Auth</span>
                        <span>{openAuth ? "▾" : "▸"}</span>
                    </div>

                    {openAuth && (
                        <div className="ml-4 mt-2 space-y-1">
                            <NavLink to="/auth-signin" className={linkClass}>
                                → Sign In
                            </NavLink>

                            <NavLink to="/auth-signup" className={linkClass}>
                                → Sign Up
                            </NavLink>
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}

export default Sidebar