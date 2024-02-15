import React from "react";
import Spacer from "../Spacer";
import Image from "next/image";
import styles from './styles.module.css'

export default function CMIconButton({title, icon, personStyles} :{title: string, icon: any, personStyles?: React.CSSProperties}): React.ReactElement {
 return(
  <div className={styles.nextButton} style={personStyles}>
    <p className={styles.textButton}>{title}</p>
    <Image alt="" src={icon} width={12} height={12} />
  </div>
 )
}