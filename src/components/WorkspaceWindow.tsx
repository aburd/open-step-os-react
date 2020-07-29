import React, { useState } from 'react'
import BarButton from './BarButton'
import Window from './Window'
import './WorkspaceWindow.scss'

function showSubMenu(activeButton: string) {
  switch (activeButton) {
    case 'Info':
      return <BarButton text="Info" />
    default:
      return null
  }
}

export default function WorkspaceWindow() {
  const [activeButton, updateActiveButton] = useState('')
  function ActiveButton({ text }: { text: string }) {
    return (
      <BarButton
        text={text}
        onClick={text => updateActiveButton(text)}
        active={activeButton === text}
      />
    )
  }

  return (
    <div className="WorkspaceWindow">
      <Window
        title="Workspace"
        initialPosition={{ x: 0, y: 0}}
        active
      >
        <ActiveButton text="Info" />
        <ActiveButton text="File" />
        <ActiveButton text="Edit" />
        <ActiveButton text="Disk" />
        <ActiveButton text="View" />
        <ActiveButton text="Tools" />
        <ActiveButton text="Windows" />
        <ActiveButton text="Services" />
        <BarButton text="Hide" onClick={() => alert('Hidden!')} />
        <BarButton text="Log Out" onClick={() => alert('Logging out!')} />
      </Window>
      <div className="sub-menu">
        {showSubMenu(activeButton)}
      </div>
    </div>
  )
}