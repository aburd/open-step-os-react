import React from 'react'
import './ArrowRight.scss'

interface Props {
  height?: number
}

const ArrowRight: React.SFC<Props> = ({ height = 7 }) => {
  return (
    <svg
      className="ArrowRight"
      height={height}
      viewBox="0 0 7 7"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left */}
      <rect className="rect-left" width="1" height="1" y="0" />
      <rect className="rect-left" width="1" height="1" y="1" />
      <rect className="rect-left" width="1" height="1" y="2" />
      <rect className="rect-left" width="1" height="1" y="3" />
      <rect className="rect-left" width="1" height="1" y="4" />
      <rect className="rect-left" width="1" height="1" y="5" />
      <rect className="rect-left" width="1" height="1" y="6" />
      {/* Top */}
      <rect className="rect--top" width="1" height="1" x="1" y="0" />
      <rect className="rect--top" width="1" height="1" x="2" y="1" />
      <rect className="rect--top" width="1" height="1" x="3" y="1" />
      <rect className="rect--top" width="1" height="1" x="4" y="2" />
      <rect className="rect--top" width="1" height="1" x="5" y="2" />
      {/* Bottom */}
      <rect className="rect--bottom" width="1" height="1" x="1" y="6" />
      <rect className="rect--bottom" width="1" height="1" x="2" y="5" />
      <rect className="rect--bottom" width="1" height="1" x="3" y="5" />
      <rect className="rect--bottom" width="1" height="1" x="4" y="4" />
      <rect className="rect--bottom" width="1" height="1" x="5" y="4" />
      <rect className="rect--bottom" width="1" height="1" x="6" y="3" />
    </svg>
  )
}

export default ArrowRight
