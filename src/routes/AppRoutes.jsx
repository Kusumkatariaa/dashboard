import React from 'react'
import { Route, Routes } from 'react-router'
import Analytics from '../screen/dashboard/Analytics'
import Layout from '../screen/Layout'
import Crypto from '../screen/dashboard/Crypto'
import Ecommerce from '../screen/dashboard/Ecommerce'

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/dashboard-analytics' element={<Analytics />} />
        <Route path='/dashboard-crypto' element={<Crypto />} />
        <Route path='/dashboard-ecommerce' element={<Ecommerce />} />
      </Routes>
    </div>
  )
}

export default AppRoutes