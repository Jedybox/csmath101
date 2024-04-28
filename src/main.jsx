import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import './index.css'

import App from './App.jsx'
import Prelims from './Prelim.jsx'
import PrelimProblem from './problem_prelim.jsx'
import Midterms from './Midterm.jsx'
import MidtermPronblem from './Midterm_problems.jsx'
import Semis from './Semi.jsx'
import SemiProblem from './Semis_problems.jsx'
import Final from './Finals.jsx'
import FinalProblem from './Finals_problem.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/prelims",
    element: <Prelims/>
  },
  {
    path: "/prelim/:topicproblem",
    element: <PrelimProblem/>
  },
  {
    path: "/midterm",
    element: <Midterms/>
  },
  {
    path: "/midterm/:topicproblem",
    element: <MidtermPronblem/>
  },
  {
    path: "/semis",
    element: <Semis/>
  },
  {
    path: "/semis/:topicproblem",
    element: <SemiProblem/>
  },
  {
    path: "/finals",
    element: <Final/>
  },
  {
    path: "/finals/:topicproblems",
    element: <FinalProblem/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
