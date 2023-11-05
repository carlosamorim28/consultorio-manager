import React from "react";
import styles from './style.module.css'
export default function CMSubmitButton({onClick,style,title}:{ onClick: VoidFunction, title: string, style?: React.CSSProperties }): React.ReactElement {
  return (
  <button className={styles.button}  onClick={()=>onClick()} style={{...style}}>
    <p>{title}</p>
  </button>
  )
}