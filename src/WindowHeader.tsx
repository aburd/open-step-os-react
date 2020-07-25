import React from 'react'
import './WindowHeader.scss'

interface Props {
  text: string
  active?: boolean
  onCloseClick?: () => void
}

const WindowHeader: React.SFC<Props> = ({
  text,
  active,
  onCloseClick,
}) => {
  return (
    <div className={`WindowHeader convex-border ${active ? 'active' : ''}`}>
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
