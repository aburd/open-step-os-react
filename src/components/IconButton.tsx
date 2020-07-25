import React from 'react'
import './IconButton.scss'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  iconClass: string
}

const IconButton: React.SFC<Props> = ({
  iconClass,
  ...buttonProps
}) => {
  return (
    <button
      className={`IconButton convex-border ${iconClass}`}
      {...buttonProps}
    />
  )
}

export default IconButton
