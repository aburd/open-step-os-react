import React from 'react'
import BarButton from './BarButton'
import Window from './Window'
import './Desktop.scss'

export default function Desktop() {
  return (
    <div className="Desktop">
      <Window
        title="Workspace"
        initialPosition={{ x: 0, y: 0}}
        active
      >
        <BarButton text="Info" />
        <BarButton text="File" />
        <BarButton text="Edit" />
        <BarButton text="Disk" />
        <BarButton text="View" />
        <BarButton text="Tools" />
        <BarButton text="Windows" />
        <BarButton text="Services" />
        <BarButton text="Hide" />
        <BarButton text="Log Out" />
      </Window>

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
        initialWidth={700}
        onCloseClick={() => alert('Closed!')}
        active
      >

      </Window>
    </div>
  )
}