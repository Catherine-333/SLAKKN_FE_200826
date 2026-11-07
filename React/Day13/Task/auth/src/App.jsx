

import { Route, Routes } from 'react-router-dom'
import Navbar from './Component/Navbar'
import Dashboard from './Pages/Dashboard'
import Register from './Pages/Register'
import Login from './Pages/Login'


const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Register' element={<Register/>}/>
    </Routes>
   
    </>
  )
}

export default App
