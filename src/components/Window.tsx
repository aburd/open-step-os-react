import React from 'react'
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
  children,
}) => {
  return (
    <Draggable
      defaultPosition={initialPosition}
    >
      <div className="Window">
        <WindowHeader
          text={title}
          active={active}
          textCenter={active}
          onCloseClick={() => alert('Clicked')}
        />
        <div className="Window--inner">
          {children}
        </div>
      </div>
    </Draggable>
  )
}

export default Window
