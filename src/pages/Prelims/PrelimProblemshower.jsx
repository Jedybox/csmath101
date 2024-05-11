import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import ErrorPage from '../Error/ErrorPage'

import BasicNum from './BasicNum.jsx'
import RealNum from './RealNum.jsx'
import ComplexNum from './ComplexNum.jsx'

export default function PrelimProblemshower() {

    const topic = useParams()

    const [notlocked, unlock] = useState(false)

    const unlocker = () => {

        const inputedPass = document.getElementById('inputedPass').value
        if (inputedPass === 'MacaulayBagnate1') {
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

    if (topic.topic === 'Basic-Number') {
        return (
            <BasicNum />
        )
    } else if (topic.topic === 'Real-Number') {
        return (
            <RealNum />
        )
    } else if (topic.topic === 'Complex-Number') {
        return (
            <ComplexNum />
        )
    } else {
        return (
            <ErrorPage />
        )
    }

}
