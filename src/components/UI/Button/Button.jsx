import style from "./Button.module.css"

const Button = (props)=>{
  console.log(props.styles)
 
  return(
    <button  className={style[props.styles]} onClick = {props.onClick}>{props.children}</button>
  )
}

export default Button