import React, { ReactNode } from "react";
import styles from './styles.module.css'
export function Footer({children}:{children: ReactNode}): React.ReactElement{
  return (
    <div className={styles.footer} >
      {children}
    </div>
  )
}