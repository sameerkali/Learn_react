import React from 'react'

interface Props {
    children: string
    onClick: ()=> void;
    color?: 'success' | 'primary' | 'secondary'
}

const Button = ({ children, onClick, color = 'success'} : Props) => {
  return (
    <button type="button" className={`btn btn-${color}`} onClick={onClick}>{ children }</button>
  )
}

export default Button