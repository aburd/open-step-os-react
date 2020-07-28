import React from 'react'
import './Bar.scss'

interface Props {
  active?: boolean
  className?: string
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
}

const Bar: React.SFC<Props> = ({
  active,
  children,
  className,
  onClick = () => {},
}) => {
  return (
    <div
      className={`Bar convex-border ${active ? 'active' : ''} ${className}`}
      onClick={onClick}
    >
      <div className="Bar--inner">
        {children}
      </div>
    </div>
  )
}

export default Bar
