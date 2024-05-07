import React from 'react'
import { useParams } from 'react-router-dom'

import ErrorPage from '../Error/ErrorPage.jsx'
import FinalsTFP from './FinalsTFP'


export default function FinalsProbleShower() {
  const topic = useParams()

  if (topic.topic === 'Transcendental-Functions') {
    return (
      <FinalsTFP/>
    )
  } else {
    return (
      <ErrorPage/>
    )
  }

}
