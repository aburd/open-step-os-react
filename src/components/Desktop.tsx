import React from 'react'
import BarButton from './BarButton'
import Window from './Window'
import WindowInfo from './WindowInfo'
import './Desktop.scss'
import WorkspaceWindow from './WorkspaceWindow'

export default function Desktop() {
  return (
    <div className="Desktop">
      <WorkspaceWindow />

      <Window
        title="File Viewer"
        initialPosition={{ x: 100, y: 10 }}
        active={false}
      >
        <p>Section 1</p>
        <hr />
        <p>Section 2</p>
      </Window>

      <Window
        title="Info"
        initialPosition={{ x: 50, y: 100 }}
        initialWidth={500}
        onCloseClick={() => alert('Closed!')}
        active
      >
        <WindowInfo />
      </Window>
    </div>
  )
}