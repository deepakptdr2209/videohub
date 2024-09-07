import { useState } from 'react'
import './App.css'
import Head from './components/Head'
import Body from './components/Body'
import {Provider} from 'react-redux'
import appStore from './utils/AppStore'

function App() {
 

  return (
    <>
   <Provider store= {appStore}>
   <Head/>
   <Body/>
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