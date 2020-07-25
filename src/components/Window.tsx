import React from 'react'
import WindowHeader from './WindowHeader'

interface Props {
  title: string
  active: boolean
}

const Window: React.SFC<Props> = ({
  title,
  active,
}) => {
  return (
    <div className="Window">
      <WindowHeader
        text={title}
        active={active}
        textCenter={active}
        onCloseClick={() => alert('Clicked')}
      />
    </div>
  )
}

export default Window
