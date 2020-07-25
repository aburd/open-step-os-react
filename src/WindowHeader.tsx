import React from 'react'
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
    <div className={`WindowHeader convex-border ${textCenter ? 'text-center' : ''} ${active ? 'active' : ''}`}>
      <div className="WindowHeader--inner">
        {text}
        {onCloseClick && (
          <button className="btn-close" onClick={onCloseClick}>X</button>
        )}
      </div>
    </div>
  )
}

export default WindowHeader
