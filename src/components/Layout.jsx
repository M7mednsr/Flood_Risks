import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

function Layout() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col">
        <Outlet />
      </div>
      <footer className="w-full py-8 text-center text-slate-500 text-sm z-200 bg-white border-t border-slate-100">
        <p>&copy; {new Date().getFullYear()} Flood Risks Platform. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Layout
