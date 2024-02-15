import React from "react";
import ItemContainer from "./components/container";
import { Footer } from "./components/footer";
import Image from "next/image";
import BodyCard from "./components/body-card/indesx";
import Spacer from "@/src/components/Spacer";

import DentistImage from "@/src/imgs/DentistCardImage.png"
import whatsAppIcon from '@/src/imgs/icons/whatsapp icon.png'
import personCheckIcon from '@/src/imgs/icons/check check_icon.png'
import mailIcon from '@/src/imgs/icons/email icon.png'
import editIcon from '@/src/imgs/icons/pencil icon.png'
import transhIcon from '@/src/imgs/icons/trash_icon.png'

import styles from './style.module.css'

export default function ItemElement(): React.ReactElement{
return (
    <ItemContainer>
      <div className={styles.badyCard}>
        
        <Image src={DentistImage} height={120} width={160} alt="" />

        <BodyCard />

      </div>
      
      
      <Footer>
        
        <div className={styles.subcard} >
          <Image src={whatsAppIcon} alt="" />
        </div>

        <div className={styles.subcard} >
          <Image src={mailIcon} alt="" />
        </div>

        <div className={styles.subcard} >
          <Image src={editIcon} alt="" />
        </div>

        <div className={styles.subcard} >
          <Image src={transhIcon} alt="" />
        </div>

        <Spacer />
        <div className={styles.nextButton}>
          <p>Pŕoximo</p>
          <Spacer />
          <Image alt="" src={personCheckIcon} width={12} height={12} />
        </div>
      </Footer>

    </ItemContainer>
  )
}