import React from 'react'
import { useParams } from 'react-router-dom'
import ErrorPage from '../Error/ErrorPage'

import BasicNum from './BasicNum.jsx'

export default function PrelimProblemshower() {

    const topic = useParams()

    if (topic.topic === 'Basic-Number') {
        return (
            <BasicNum />
        )
    } else if (topic.topic === 'Real-Number') {
        return (
            <div>
                <h1>Real Number System</h1>
                <p>
                    The real number system is a set of numbers that includes all 
                    rational and irrational numbers, which can be positive or negative. 
                    This system is denoted by the symbol R. 
                </p>
            </div>
        )
    } else if (topic.topic === 'Complex-Number') {
        return (
            <div>
                <h1>Complex Number System</h1>
                <p>
                    Complex numbers are numbers that consist of a real part and an 
                    imaginary part. The imaginary part is a real number multiplied by 
                    the imaginary unit i. The real part of the complex number is any 
                    real number.
                </p>
            </div>
        )
    } else {
        return (
            <ErrorPage />
        )
    }

}
