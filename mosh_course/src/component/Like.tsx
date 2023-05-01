import react, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
    onClick: () => void;
}

const Like = ({onClick} : Props) => {
    const [status, setStatus] = useState(true);

    const toggle = () => {
        setStatus(!status);
        onClick();
    }
  
    if(status) return <AiFillHeart color='#ff6bf1' size={200} onClick={toggle}/>
    return <AiOutlineHeart color='#ff6bf1' size={200} onClick={toggle}/>
  
}

export default Like