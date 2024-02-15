import React from "react";
import styles from './styles.module.css'
import { ReactSetState } from "@/src/utils";
import { colors } from "@/src/colors";

export default function ConsultFormTextField({label, onChange, value, style, isPassword, placeholder}:{isPassword?: boolean,label: string, value: string, onChange: ReactSetState, style?: React.CSSProperties, placeholder: string}): React.ReactElement{
  return(
    <div className={styles.generalContainerInput}>
      <p className={styles.labelText} >{label}</p>
      <input type={isPassword ? 'password' : 'text' } className={styles.generalInput} placeholder={placeholder} value={value} onChange= { (value)=> onChange(value.target.value)}  style={{...style}} />
    </div>
  )
}