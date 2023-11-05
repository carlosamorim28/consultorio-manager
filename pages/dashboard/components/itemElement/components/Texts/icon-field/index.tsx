import Image, { StaticImageData } from "next/image";
import React, { ReactNode } from "react";
import styles from './style.module.css'
export default function IconField({icon, text}:{icon: StaticImageData, text: string}): React.ReactElement {
  return (
    <div  className={styles.container}>
      <Image alt="" src={icon} width={20} height={20} style={{marginRight: '8px'}} />
      <p className={styles.labelIconField}>{text}</p>
    </div>
  )
}