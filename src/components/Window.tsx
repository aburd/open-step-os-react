import React from 'react'
import Draggable from 'react-draggable'
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
  children,
}) => {
  return (
    <Draggable>
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
