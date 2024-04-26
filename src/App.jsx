import React from 'react';

import './App.css';

import Navi from './widgets/nav'
import Foot from './widgets/foot';

import bg1 from "./assets/bgGradients/bg1.png";
import bg2 from "./assets/bgGradients/bg2.png";
import bg3 from "./assets/bgGradients/bg3.png";
import headerBG from "./assets/bgheader.png";
import graphics from "./assets/graphs.png";
import _123 from "./assets/123.png";
import _2 from "./assets/2.png";
import sqrtTable from "./assets/tablesqrt.png";
import func from "./assets/func.png";
import wave from "./assets/wave.png";

function App() {

  return (
    <>
    	<header className="headerHome">
        <img src={bg1} alt="" id='bg1'/>
        <img src={headerBG} alt="Header Background" className='bgimg'/>
			  <Navi/>
        <div className="title">
          <div className="alge">Algebra</div>
          <div className="sub">Mastering Algebra: Prelims to Finals</div>
        </div>
		  </header>
      <div className='graphics'>
        <img src={bg2} alt="" id='bg2'/>
        <img src={graphics} alt="graphics" className='graphs'/>
      </div>
      <div className='periods'>
        <img src={bg3} alt="" id='bg3'/>
        <div className='periodsIntro'>
          <h1 className='conquer'>Conquer core concepts</h1>
          <p className='embark'>Embark on a journey of Algebraic Discovery: From fundamentals to advanced mathematical concepts</p>
        </div>
        <div className="semestrialterms">
          <div className="term">
            <div className="termIcon" id='prelim'>
              <img src={_123} alt="123" className='_123'/>
              <img src={_2} alt="2" className='_2'/>
            </div>
            <h1 className="termtitle">Preliminary Term</h1>
            <ul className='termlist'>
              <li className='termItem'>Basic Number Theory Concepts</li>
              <li className='termItem'>Real Number System and Complex Number System</li>
            </ul>
          </div>
          <div className="term">
            <div className="termIcon" id='midterm'>
              <img src={sqrtTable} alt="table" className='sqrtTable'/>
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
              <img src={func} alt="function" className='function'/>
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
              <img src={wave} alt="wave" className='wave'/>
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
