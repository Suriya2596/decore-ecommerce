// import React from 'react'

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import MainLayout from "./modules/routes/MainLayout"
import Home from "./modules/pages/Home"

const App = () => {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Route>
  ))
  
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
