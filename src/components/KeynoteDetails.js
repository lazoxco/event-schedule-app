import React from 'react'

const KeynoteDetails = (props) => {
  console.log(props)
  const id = props.match.params.id
  return (
    <div>
      <h3>Keynote Title for { id }</h3>
      <p>Keynote Speaker</p>
      <p>Keynote Time</p>
      <p>Keynote Description</p>
    </div>
  )
}

export default KeynoteDetails