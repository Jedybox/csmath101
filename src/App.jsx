import React from 'react'
import './App.css'
import Navi from './widgets/nav'

function App() {

  return (
    <>
    	<header className="headerHome">
			  <Navi/>
        <div className="title">
          <div className="alge">Algebra</div>
          <div className="sub">Mastering Algebra: Prelims to Finals</div>
        </div>
		  </header>
    </>
  )
}

export default App
