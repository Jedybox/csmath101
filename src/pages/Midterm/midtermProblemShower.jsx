import React, {useState} from 'react'
import { useParams } from 'react-router-dom'

import ErrorPage from '../Error/ErrorPage.jsx'
import BAC from './BAC.jsx'
import IE from './IE.jsx'
import SLEM from './SLEM.jsx'

export default function MidtermProblemShower() {
  
    const { topic } = useParams()

    const [notlocked, unlock] = useState(false)

    const unlocker = () => {

        const inputedPass = document.getElementById('inputedPass').value
        if (inputedPass === 'MacaulayBagnate2') {
            unlock(true)
        } else {
            document.getElementById('inputedPass').value = ''
            alert('Wrong Password')
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

    if (topic === 'Basic-Algebraic-Concepts') {
        return <BAC />
    } else if (topic === 'Equations-and-Inequalities') {
        return <IE />
    } else if (topic === 'Systems-of-Linear-Equations-and-Matrices') {
        return <SLEM />
    } else {
        return <ErrorPage />
    }
}
