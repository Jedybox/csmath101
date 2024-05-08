import React from 'react'
import { useParams } from 'react-router-dom'

import ErrorPage from '../Error/ErrorPage.jsx'
import FinalsTFP from './FinalsTFP'
import FinalsLFP from './FinalsLFP.jsx'
import FinalsAFP from './FinalsAFP.jsx'

export default function FinalsProbleShower() {
  const topic = useParams()

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
