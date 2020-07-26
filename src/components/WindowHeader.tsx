import React from 'react'
import Bar from './Bar'
import IconButton from './IconButton'
import './WindowHeader.scss'

interface Props {
  text: string
  active?: boolean
  textCenter?: boolean
  onMinimizeClick?: () => void
  onCloseClick?: () => void
}

const WindowHeader: React.SFC<Props> = ({
  text,
  active,
  textCenter,
  onMinimizeClick,
  onCloseClick,
}) => {
  return (
    <Bar active={active}>
      <div
        className={`WindowHeader ${textCenter ? 'text-center' : ''}`}
      >
        <div className="WindowHeader--inner">
          {text}
          {onMinimizeClick && (
            <IconButton iconClass="icon-minimize" onClick={onMinimizeClick} />
          )}
          {onCloseClick && (
            <IconButton iconClass="icon-close" onClick={onCloseClick} />
          )}
        </div>
      </div>
    </Bar>
  )
}

export default WindowHeader
