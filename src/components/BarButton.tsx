import React from 'react'
import Bar from './Bar'
import ArrowRight from './ArrowRight'
import './BarButton.scss'

interface Props {
  text: string
  active?: boolean
  onClick?: (text: string) => void
}

const BarButton: React.SFC<Props> = ({
  text,
  active = false,
  onClick = () => { },
}) => {
  return (
    <Bar
      active={false}
      className={`${active ? 'active-white' : ''}`}
      onClick={() => onClick(text)}
    >
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
