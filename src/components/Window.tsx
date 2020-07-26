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
  initialPosition: Position;
  initialWidth?: number;
}

const Window: React.SFC<Props> = ({
  title,
  active,
  initialPosition,
  initialWidth,
  children,
}) => {
  const headerRef = useRef(null)
  const [width, updateWidth] = useState(initialWidth || 100)
  return (
    <Draggable
      defaultPosition={initialPosition}
      onStart={(e) => {
        // @ts-ignore
        const classes = [...e.target.classList]
        if (!['Bar', 'WindowHeader--inner'].some(c => classes.includes(c))) {
          return false
        }
      }}
    >
      <div className="Window" style={{ width }}>
        <span ref={headerRef}>
          <WindowHeader
            text={title}
            active={active}
            textCenter={active}
            onCloseClick={() => alert('Clicked')}
          />
        </span>
        <div className="Window--inner">
          {children}
        </div>
      </div>
    </Draggable>
  )
}

export default Window
