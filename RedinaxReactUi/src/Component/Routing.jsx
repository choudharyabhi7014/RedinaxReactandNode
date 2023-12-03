import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserLogin from './UserLogin'
import Dashboard from './Dashboard'
import Analytics from './Analytics'
import DataTable from './Datatable'

function Routing() {
  return (
    <>
     <BrowserRouter>
     <Routes>
        <Route path='/' Component={UserLogin}/>
        <Route path='dashboard' Component={Dashboard}>
            <Route path='/dashboard/analytics' Component={Analytics}/>
            <Route path='/dashboard/data' Component={DataTable}/>
        </Route>
     </Routes>
     </BrowserRouter> 
    </>
  )
}

export default Routing
