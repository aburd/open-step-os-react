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
        initialPosition={[10, 10]}
        active
      />

      <br />

      <Window
        title="File Viewer"
        initialPosition={[20, 20]}
        active={false}
      >
        <p>Section 1</p>
        <hr />
        <p>Section 2</p>
      </Window>

    </div>
  )
}