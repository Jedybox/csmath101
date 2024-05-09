import React from 'react'
import { useParams } from 'react-router-dom'

import ErrorPage from '../Error/ErrorPage.jsx'
import BAC from './BAC.jsx'

export default function MidtermProblemShower() {
  
    const { topic } = useParams()

    if (topic === 'Basic-Algebraic-Concepts') {
        return <BAC />
    } else {
        return <ErrorPage />
    }
}
