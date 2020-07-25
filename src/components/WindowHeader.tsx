import React, { useState, useRef } from 'react'
import IconButton from './IconButton'
import './WindowHeader.scss'

interface Props {
  text: string
  active?: boolean
  textCenter?: boolean
  onCloseClick?: () => void
  onDrag?: (dx: number, dy: number) => void
}

const WindowHeader: React.SFC<Props> = ({
  text,
  active,
  textCenter,
  onCloseClick,
  onDrag,
}) => {
  const [mouseIsDown, updateMouseIsDown] = useState(false)

  return (
    <div
      className={`WindowHeader convex-border ${textCenter ? 'text-center' : ''} ${active ? 'active' : ''}`}
      onMouseMove={(e) => {
        if (mouseIsDown && onDrag) onDrag(e.movementX, e.movementY)
      }}
      onMouseDown={() => updateMouseIsDown(true)}
      onMouseUp={() => updateMouseIsDown(false)}
      onMouseLeave={() => updateMouseIsDown(false)}
    >
      <div className="WindowHeader--inner">
        {text}
        {onCloseClick && (
          <IconButton iconClass="" onClick={onCloseClick} />
        )}
      </div>
    </div>
  )
}

export default WindowHeader
