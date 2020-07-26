import React from 'react'
import Bar from './Bar'
import ArrowRight from './ArrowRight'
import './BarButton.scss'

interface Props {
  text: string
}

const BarButton: React.SFC<Props> = ({
  text,
}) => {
  return (
    <Bar active={false}>
      <div
        className={`BarButton`}
      >
        <span className="text">{text}</span>
        <ArrowRight />
      </div>
    </Bar>
  )
}

export default BarButton
