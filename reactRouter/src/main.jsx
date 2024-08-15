import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route,RouterProvider, createBrowserRouter, createRoutesFromChildren, createRoutesFromElements} from 'react-router-dom'
import {Header,Footer,Layout,Contact,Home,About,User} from './components/component'
import Github,{ GithubLoader } from './components/Github/Github'

const router=createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    children:[{
      path:"",
      element: <Home/>
    },
    {
      path:"about",
      element:<About/>
    },
    {
      path:"contact",
      element:<Contact/>
    },
    {
      path:"user/:id",
      element: <User/>
    },
    {
      loader:GithubLoader,
      path:"github",
      element:<Github/>
    }
  ]
  }
])


// const router=createBrowserRouter([
//   createRoutesFromElements(
//     <Route path='/' element={<Layout />}>
//       <Route path='' element={<Home />}/>
//       <Route path='about' element={<About />}/>
//       <Route path='contact' element={<Contact />}/>
//     </Route>
//   )
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
