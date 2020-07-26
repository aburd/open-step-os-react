import React from 'react'
import './WindowInfo.scss'

export default function WindowInfo() {
  return (
    <div className="WindowInfo">
      <div className="WindowInfo--splash">
        <img src="/icons/NeXT.png" alt="" />
        <h1>Workspace<br /> <span className="bottom">Manager</span></h1>
      </div>
      <div className="WindowInfo--authors">
        Lee Boyton - Jean-Marie Hullot - Bertrand Serlet<br />
        Graphic Design by Keith Ohlfs<br />
        Web Version by Aaron Burdick
      </div>
    </div>
  )
}
