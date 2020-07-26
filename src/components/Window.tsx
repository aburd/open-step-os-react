import React, { useState, useRef } from 'react'
import Draggable from 'react-draggable'
import WindowHeader from './WindowHeader'
import './Window.scss'

interface Position {
  x: number,
  y: number,
}

interface Props {
  title: string
  active: boolean
  initialPosition: Position
  initialWidth?: number
  onCloseClick?: () => void
}

const Window: React.SFC<Props> = ({
  title,
  active,
  initialPosition,
  initialWidth = 100,
  onCloseClick,
  children,
}) => {
  const headerRef = useRef(null)
  const [width, updateWidth] = useState(initialWidth)
  const [resizeActive, updateResizeActive] = useState(false)
  return (
    <Draggable
      defaultPosition={initialPosition}
      handle=".Bar, .WindowHeader--inner"
    >
      <div className="Window" style={{ width }}>
        <span ref={headerRef}>
          <WindowHeader
            text={title}
            active={active}
            textCenter={active}
            onCloseClick={onCloseClick}
          />
        </span>
        <div className="Window--inner">
          {children}
        </div>
        <Draggable
          axis="x"
          bounds={{ right: 0 }}
          onStart={() => {
            updateResizeActive(true)
          }}
          onDrag={(e) => {
            // @ts-ignore
            const newWidth = width + e.movementX
            if (newWidth < 100) return false
            updateWidth(newWidth)
          }}
          onStop={() => updateResizeActive(false)}
        >
          <span className="resize-east"></span>
        </Draggable>
        <div
          className={`resize-background ${resizeActive ? 'active' : ''}`}
          style={{ width }}
        />
      </div>
    </Draggable>
  )
}

export default Window
