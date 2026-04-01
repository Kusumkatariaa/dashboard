import React from 'react'
import Sidebar from './components/Sidebar'
import AppRoutes from './routes/AppRoutes'
import Navbar from './components/Navbar'

const App = () => {
  return (
   <div className="flex h-screen">

      <Sidebar />

      <div className="flex-1 flex flex-col">

        <Navbar />

        <div className="flex-1 p-6 bg-gray-100">
          <AppRoutes />
        </div>

      </div>

    </div>
  )
}

export default App