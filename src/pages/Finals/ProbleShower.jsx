import React, {useState} from 'react'
import { useParams } from 'react-router-dom'

import ErrorPage from '../Error/ErrorPage.jsx'
import FinalsTFP from './FinalsTFP'
import FinalsLFP from './FinalsLFP.jsx'
import FinalsAFP from './FinalsAFP.jsx'

export default function FinalsProbleShower() {
  const topic = useParams()

  const [notlocked, unlock] = useState(false)

  const unlocker = () => {

      const inputedPass = document.getElementById('inputedPass').value
      if (inputedPass === 'CS_101') {
          unlock(true)
      } else {
          document.getElementById('inputedPass').value = ''
          alert(inputedPass + ' is the wrong password')
      }
      
  }

  if (!notlocked) { 
      return (
          <div className='LockBG'>
              <div className='locker'>
                  <h1 className='lockMessage'>To access this page please enter the password</h1>
                  <input type="password" name="password" id="inputedPass"/>
                  <button onClick={unlocker} className='checkpass'><p className='textinbtn'>Enter</p></button>
              </div>
          </div>
      )
  }

  if (topic.topic === 'Transcendental-Functions') {
    return (
      <FinalsTFP/>
    )
  } else if(topic.topic === 'Logarithmic-Functions') {
    return (
      <FinalsLFP/>
    )
  } else if (topic.topic === 'Exponential-Functions') {
    return (
      <FinalsAFP/>
    )
  } else {
    return (
      <ErrorPage/>
    )
  }

}
