import { useState } from 'react'
import './App.css'
import { BrowserRouter,  Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Contacts from './views/Contacts'



function App() {
  return (
    <BrowserRouter>
 
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Contacts' element={<Contacts/>} />   

    </Routes>
          

      {/* här ska du in med browserrouter etc från react-router-dom - finns i inspelningen navigering med react
       */}
    </BrowserRouter>
  )
}

export default App
