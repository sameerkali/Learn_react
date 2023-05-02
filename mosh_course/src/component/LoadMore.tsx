import { useState } from "react"

interface Props {
    children: string
    maxChars?: number
}



const LoadMore = ({children, maxChars = 100} : Props) => {

    const [isExpended, setExpended] = useState(false)

    if (children.length <= maxChars) return <p>{children}</p>
    const text = isExpended? children : children.substring(0, maxChars)

  return <p className="mt-3">{text}... <button onClick={()=> setExpended(!isExpended)}>{isExpended ? 'Less' : 'more'}</button></p>
}

export default LoadMore