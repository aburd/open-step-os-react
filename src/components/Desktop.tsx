import React from 'react'
import WindowHeader from './WindowHeader'
import './Desktop.scss'

export default function Desktop() {
  return (
    <div className="Desktop">
      <WindowHeader
        text="Regular"
        onCloseClick={() => alert('Clicked')}
      />
      <br />
      <WindowHeader
        text="Active"
        active
        textCenter
        onCloseClick={() => alert('Clicked')}
      />

    </div>
  )
}