import React from 'react'
import './App.css'
import Navi from './widgets/nav'

function App() {

  return (
    <>
    	<header className="headerHome">
        <img src="./src/assets/bgheader.png" alt="Header Background" className='bgimg'/>
			  <Navi/>
        <div className="title">
          <div className="alge">Algebra</div>
          <div className="sub">Mastering Algebra: Prelims to Finals</div>
        </div>
		  </header>
      <div className='graphics'>
        <img src="./src/assets/graphs.png" alt="graphics" className='graphs'/>
      </div>
      <div className='periods'>
        <div className='periodIntro'>
          <h1></h1>
          <p></p>
        </div>
        <div className="semestrialterms">
          
        </div>
      </div>
    </>
  )
}

export default App
