import { forwardRef } from "react"
import Button from "../Button/Button"

const Input = forwardRef (function Input (props,ref){
  return(
    <div>
      <input ref={ref} className={props.inputStyle} placeholder={props.placeHolder} type={props.type}></input>
    </div>
    
  )
})

export default Input