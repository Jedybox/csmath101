import React from 'react'
import { useParams } from 'react-router-dom'

import ErrorPage from '../Error/ErrorPage.jsx'
import BAC from './BAC.jsx'
import IE from './IE.jsx'
import SLEM from './SLEM.jsx'

export default function MidtermProblemShower() {
  
    const { topic } = useParams()

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
