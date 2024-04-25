import React from 'react'
import style from './App.css'
import Navi from './widgets/nav'

function App() {

  return (
    <>
    	<header className={style.headerHome}>
			  <Navi/>
        <div className={style.title}>
          <div className={style.alge}></div>
          <div className={style.sub}></div>
        </div>
		  </header>
    </>
  )
}

export default App
