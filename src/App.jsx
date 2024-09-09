import { useState } from 'react'
import './App.css'
import Head from './components/Head'
import Body from './components/Body'
import {Provider} from 'react-redux'
import appStore from './utils/AppStore'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import MainContainer from './components/MainContainer'
import WatchPage from './components/WatchPage'

// createBrowserRouter take array object of path
 const appRouter = createBrowserRouter([{
   path: "/",
   element:<Body/>,
   children:[{
     path : "/",
     element: <MainContainer/>,
  },
  {
    path: "watch",
    element:<WatchPage/>
  }

]
 }])

function App() {
  return (
    <>
   <Provider store= {appStore}>
   <Head/>
   <RouterProvider router={appRouter}/>
   </Provider>
   
   
    

    </>
  )
}

export default App
/* head
    hamburger
    logo
    search
    profile
   body
    sidebar
    buttun
    vidocontainer
      video card




*/