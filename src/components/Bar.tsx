import React from 'react'
import './Bar.scss'

interface Props {
  active?: boolean
}

const Bar: React.SFC<Props> = ({
  active,
  children,
}) => {
  return (
    <div
      className={`Bar convex-border ${active ? 'active' : ''}`}
    >
      <div className="Bar--inner">
        {children}
      </div>
    </div>
  )
}

export default Bar
