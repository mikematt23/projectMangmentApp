import style from "./Button.module.css"

const Button = (props)=>{
  return(
    <button className={style.button} onClick = {props.onClick}>{props.children}</button>
  )
}

export default Button