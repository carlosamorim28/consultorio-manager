import React from "react";
import styles from './styles.module.css'
import { ReactSetState } from "@/src/utils";
import { colors } from "@/src/colors";

export default function CustomDateFormField({label, onChange, value, style, isPassword, placeholder}:{isPassword?: boolean,label: string, value: string, onChange: ReactSetState, style?: React.CSSProperties, placeholder: string}): React.ReactElement{
  return(
    <div>
      <p className={styles.labelText} >{label}</p>
      <input type={'date'}className={styles.generalInput} placeholder={placeholder} value={value} onChange= { (value)=> onChange(value.target.value)}  style={{...style}} />
    </div>
  )
}