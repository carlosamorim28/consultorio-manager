import React from "react";
import styles from './styles.module.css'
import { ReactSetState } from "@/src/utils";
import { colors } from "@/src/colors";

export default function ConsultFormDropBox({label, onChange, value, style, isPassword, placeholder}:{isPassword?: boolean,label: string, value: string, onChange: ReactSetState, style?: React.CSSProperties, placeholder: string}): React.ReactElement{
  return(
    <div>
      <p className={styles.labelText} >{label}</p>

      <select className={styles.generalInput}  value={value} onChange={ (value)=> onChange(value.target.value)}  style={{...style}}>
        <option value="">{placeholder}</option>
        <option value="opcao1">Opção 1</option>
        <option value="opcao2">Opção 2</option>
        <option value="opcao3">Opção 3</option>
      </select>
    </div>
  )
}