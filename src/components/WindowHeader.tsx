import React, { useState, useRef } from 'react'
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
    <div
      className={`WindowHeader convex-border ${textCenter ? 'text-center' : ''} ${active ? 'active' : ''}`}
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
