import React, { ReactNode } from "react";
import styles from './style.module.css'
export default function ItemContainer({children}:{children: ReactNode}): React.ReactElement{
  return(
    <div className={styles.itemContainer}>
      {children}
    </div>
  )
}