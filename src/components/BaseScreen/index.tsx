import React, { ReactNode } from "react";
import styles from './style.module.css'
import { colors } from "@/src/colors";
export default function CMBaseScreen({children, style}:{children: ReactNode, style?: React.CSSProperties}): React.ReactElement {
  return(
    <div className={styles.screenContainer} style={{backgroundColor: colors.background, ...style}}>
      <div className={styles.safeAreaContent}>
        {children}
      </div>
    </div>
  )
}