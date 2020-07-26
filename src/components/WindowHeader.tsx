import React from 'react'
import Bar from './Bar'
import IconButton from './IconButton'
import './WindowHeader.scss'

interface Props {
  text: string
  active?: boolean
  textCenter?: boolean
  onCloseClick?: () => void
}

const WindowHeader: React.SFC<Props> = ({
  text,
  active,
  textCenter,
  onCloseClick,
}) => {
  return (
    <Bar active={active}>
      <div
        className={`WindowHeader ${textCenter ? 'text-center' : ''}`}
      >
        <div className="WindowHeader--inner">
          {text}
          {onCloseClick && (
            <IconButton iconClass="" onClick={onCloseClick} />
          )}
        </div>
      </div>
    </Bar>
  )
}

export default WindowHeader
