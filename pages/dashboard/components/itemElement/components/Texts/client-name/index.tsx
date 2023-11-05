import React from "react";
import styles from './style.module.css'

export default function ClientNameLabel({label}:{label: string}): React.ReactElement{
  return (
    <p className={styles.text}> {label} </p>
  )
}