import React from 'react'
import { useParams } from 'react-router-dom'
import ErrorPage from '../Error/ErrorPage'

import BasicNum from './BasicNum.jsx'
import RealNum from './RealNum.jsx'
import ComplexNum from './ComplexNum.jsx'

export default function PrelimProblemshower() {

    const topic = useParams()

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
