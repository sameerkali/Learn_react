import { ReactNode } from "react";

interface props {
    children : ReactNode;
}


const Alert = ({ children }:props) => {
  return (
    <div className="alert alert-primary">{children}</div>
  )
}

export default Alert