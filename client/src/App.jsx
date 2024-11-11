import { useState } from 'react'
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import User from './components/GetUsers/User'
import Add from './components/AddUsers/Add'
import Edit from './components/UpdateUsers/Edit'

function App() {
  const route=createBrowserRouter([
    {
      path:'/',
      element:<User/>,
    },
    {
      path:'/add',
      element:<Add/>,
    },
    {
      path:'/edit/:id',
      element:<Edit/>,
    }
  ])

  return (
    <>
     <RouterProvider router={route}>

     </RouterProvider>
    </>
  )
}

export default App
