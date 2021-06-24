import React from 'react'
import KeynoteSummary from './KeynoteSummary'
// import { BrowserRouter as Link } from 'react-router-dom'

const Keynotes = ({ keynotes }) => {
  return (
    <div className="container">
      { keynotes && keynotes.map(keynote => {
        return (
          <KeynoteSummary keynote={keynote} key={keynote.id}/>
        )
      })}
    </div>
  )
}

export default Keynotes