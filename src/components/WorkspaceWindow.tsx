import React from 'react'
import BarButton from './BarButton'
import Window from './Window'
import './Desktop.scss'

export default function WorkspaceWindow() {
  return (
    <div className="WorkspaceWindow">
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
    </div>
  )
}