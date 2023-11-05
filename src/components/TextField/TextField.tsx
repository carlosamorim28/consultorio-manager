
import React, { useEffect, useState } from "react";

import TextField from '@mui/material/TextField';
import { ReactSetState } from "@/src/utils";
import styled from "styled-components";
import { colors } from "@/src/colors";
import styles from './TextField.module.css'

export default function CMTextField({label, onChange, value, style, isPassword}:{isPassword?: boolean,label: string, value: string, onChange: ReactSetState, style?: React.CSSProperties}): React.ReactElement{
  return(
    <input type={isPassword ? 'password' : 'text' } className={styles.generalInput} placeholder={label} value={value} onChange= { (value)=> onChange(value.target.value)}  style={{backgroundColor: colors.primary,...style}} />
  )
}