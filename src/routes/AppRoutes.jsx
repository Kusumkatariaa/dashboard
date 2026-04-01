import React from 'react'
import { Route, Routes } from 'react-router'
import Analytics from '../screen/dashboard/Analytics'
import Crypto from '../screen/dashboard/Crypto'
import Ecommerce from '../screen/dashboard/Ecommerce'
import Clients from "../screen/pages/Clients";
import Settings from "../screen/pages/Settings";
import Profile from "../screen/Profile";
import SignIn from "../screen/auth/SignIn";
import SignUp from "../screen/auth/SignUp";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Analytics />} />
        <Route path='/dashboard-analytics' element={<Analytics />} />
        <Route path='/dashboard-crypto' element={<Crypto />} />
        <Route path='/dashboard-ecommerce' element={<Ecommerce />} />
        <Route path='/pages-clients' element={<Clients />} />
        <Route path='/pages-settings' element={<Settings />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/auth-signin' element={<SignIn />} />
        <Route path='/auth-signup' element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default AppRoutes