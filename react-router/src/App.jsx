import { useState } from 'react'
import Home from './Components/Home/Home'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Outlet/> 
      {/* // isme values change hoti rahengi and header footer same rahega */}
      <Footer/>
    </>
  )
}

export default App
