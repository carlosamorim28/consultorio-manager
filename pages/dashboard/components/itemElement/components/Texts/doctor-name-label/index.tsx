import React from "react";
import styles from './style.module.css'

export default function DoctorNameLabel({label}:{label: string}): React.ReactElement{
  return (
    <p className={styles.text}> {label} </p>
  )
}