
import React, { useEffect, useState } from "react";

import TextField from '@mui/material/TextField';
import { ReactSetState } from "@/src/utils";
import styled from "styled-components";
import { colors } from "@/src/colors";
import styles from './FormTextField.module.css'

export default function CMFormTextField({label, onChange, value, style, isPassword}:{isPassword?: boolean,label: string, value: string, onChange: ReactSetState, style?: React.CSSProperties}): React.ReactElement{
  return(
    <div className={styles.generalContainerInput}>
      <p className={styles.labelText}>{label}</p>
      <input type={isPassword ? 'password' : 'text' } className={styles.generalInput} placeholder={label} value={value} onChange= { (value)=> onChange(value.target.value)}  style={{...style}} />
    </div>
  )
}