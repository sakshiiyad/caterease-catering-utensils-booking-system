import React from 'react'
import AdminNav from '../Admin/components/AdminNav'
import { Outlet } from 'react-router-dom'
import AdminDashboard from '../Admin/pages/AdminDashboard'

const AdminLayout = () => {
  return (
    <div>
       <AdminNav/>
        <Outlet/>
    </div>
  )
}

export default AdminLayout