import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import About from './Components/About/About.jsx'
import Home from './Components/Home/Home.jsx'
import Contact from './Components/Contact/Contact.jsx'


// method 1

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App/>,
//     children: [
//       {
//         path: '', // after the slash to mtlb localhost:3000/ k baad kuch nahi hoga
//         element: <Home/>
//       },
//       {
//         path: 'about', // localhost:3000/about
//         element: <About/>
//       },
//       {
//         path: 'contact', // localhost:3000/contact
//         element: <Contact/>
//       }
//     ]
//   }
// ])


// method 2 thorda easier to visualize
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<App/>} >
      <Route path='' element = {<Home/>} />
      <Route path='about' element = {<About/>} />
      <Route path='contact' element = {<Contact/>} />
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
