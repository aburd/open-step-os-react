import React from 'react'
import BarButton from './BarButton'
import Window from './Window'
import './Desktop.scss'

export default function Desktop() {
  return (
    <div className="Desktop">
      <Window
        title="File Viewer"
        initialPosition={{ x: 0, y: 0}}
        active
      />

      <br />

      <Window
        title="File Viewer"
        initialPosition={{ x: 100, y: 10 }}
        active={false}
      >
        <p>Section 1</p>
        <hr />
        <p>Section 2</p>
      </Window>
      <BarButton
        text="Hello Bar button"
      />
    </div>
  )
}