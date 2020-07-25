import React, { useState } from 'react'
import WindowHeader from './WindowHeader'
import './Window.scss'

type Position = [number, number];

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
  const [top, updateTop] = useState(initialPosition[0])
  const [left, updateLeft] = useState(initialPosition[1])
  const [width, updateWidth] = useState(initialWidth || 100)
  return (
    <div
      className="Window"
      style={{
        top: `${top}px`,
        left: `${left}px`,
        width: `${width}px`,
      }}
    >
      <WindowHeader
        text={title}
        active={active}
        textCenter={active}
        onCloseClick={() => alert('Clicked')}
        onDrag={(dx, dy) => {
          updateTop(top + dy)
          updateLeft(left + dx)
        }}
      />
      <div className="Window--inner">
        {children}
      </div>
    </div>
  )
}

export default Window
