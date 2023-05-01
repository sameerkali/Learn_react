import { ReactNode, useState } from "react";

interface props {
  children: ReactNode;
  onClose: ()=> void;
}



const Alert = ({ children, onClose }: props) => {
  return (
    <div
      className="alert alert-warning alert-dismissible fade show alert-primary"
      role="alert"
    >
      {children}
      <button type="button" className="btn-close"  onClick={onClose}  data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  );
};

export default Alert;
