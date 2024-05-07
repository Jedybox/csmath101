import React from 'react'
import { useParams } from 'react-router-dom'

import ErrorPage from '../Error/ErrorPage'
import FinalsTFP from './FinalsTFP'


export default function ProbleShower() {
  const { topic } = useParams()

  if (topic === 'TFP') {
    return (
      <FinalsTFP/>
    )
  } else {
    return (
      <ErrorPage/>
    )
  }

}
