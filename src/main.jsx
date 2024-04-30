import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import './index.css'

import App from './App.jsx'
import Semi from './pages/Semis/Semis.jsx'
import ErrorPage from './pages/Error/ErrorPage.jsx'
import SemiProblem from './pages/Semis/Semis_Problem.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/Semi",
    element: <Semi/>
  },
  {
    path: "/Semi/:topic",
    element: <SemiProblem/>
  },
  {
    path: "*",
    element: <ErrorPage/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
