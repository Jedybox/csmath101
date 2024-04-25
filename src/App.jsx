import React from 'react'
import './App.css'
import Navi from './widgets/nav'
import Foot from './widgets/foot'

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
        <div className='periodsIntro'>
          <h1 className='conquer'>Conquer core concepts</h1>
          <p className='embark'>Embark on a journey of Algebraic Discovery: From fundamentals to advanced mathematical concepts</p>
        </div>
        <div className="semestrialterms">
          <div className="term">
            <div className="termIcon" id='prelim'>
              <img src="./src/assets/123.png" alt="123" className='_123'/>
              <img src="./src/assets/2.png" alt="2" className='_2'/>
            </div>
            <h1 className="termtitle">Preliminary Term</h1>
            <ul className='termlist'>
              <li className='termItem'>Basic Number Theory Concepts</li>
              <li className='termItem'>Real Number System and Complex Number System</li>
            </ul>
          </div>
          <div className="term">
            <div className="termIcon" id='midterm'>
              <img src="./src/assets/tablesqrt.png" alt="table" className='sqrtTable'/>
            </div>
            <h1 className="termtitle">Midterm</h1>
            <ul className='termlist'>
              <li className="termItem">Basic Algebraic Concepts</li>
              <li className="termItem">Equations and Inequalities</li>
              <li className="termItem">Systems of Linear Equations and Matrices</li>
            </ul>
          </div>
          <div className="term">
            <div className="termIcon" id='semis'>
              <img src="./src/assets/func.png" alt="function" className='function'/>
            </div>
            <h1 className="termtitle">Semi-Finals Term</h1>
            <ul className='termlist'>
              <li className="termItem">Relations and Functions</li>
              <li className="termItem">Linear Functions </li>
              <li className="termItem">Quadratic Functions</li>
            </ul>
          </div>
          <div className="term">
            <div className="termIcon" id='finals'>
              <img src="./src/assets/wave.png" alt="wave" className='wave'/>
            </div>
            <h1 className="termtitle">Final Term</h1>
            <ul className='termlist'>
              <li className="termItem">Transcendental Functions</li>
              <li className="termItem">Exponential Functions</li>
              <li className="termItem">Logarithmic Functions</li>
            </ul>
          </div>
        </div>
      </div>
      <Foot/>
    </>
  )
}

export default App
