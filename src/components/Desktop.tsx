import React from 'react'
import WindowHeader from './WindowHeader'
import Window from './Window'
import './Desktop.scss'

export default function Desktop() {
  return (
    <div className="Desktop">
      <WindowHeader
        text="Regular"
        onCloseClick={() => alert('Clicked')}
      />
      <br />
      <Window
        title="File Viewer"
        active={false}
      />

    </div>
  )
}