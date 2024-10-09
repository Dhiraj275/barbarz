import React from 'react'

interface UnderLineProps {
  size?: string,
}
const UnderLine = ({ size }: UnderLineProps) => {
  return (
    <div className={`underline ${size}`}>
      <div className="line"></div>
      <img src="/assets/icons/moustache.png" alt="" />
      <div className="line"></div>
    </div>
  )
}

export default UnderLine