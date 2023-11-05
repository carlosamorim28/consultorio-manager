import React from "react";
import ItemContainer from "./components/container";
import { Footer } from "./components/footer";
import Image from "next/image";
import DentistImage from "@/src/imgs/DentistCardImage.png"
import styles from './style.module.css'
import ClientNameLabel from "./components/Texts/client-name";
import DoctorNameLabel from "./components/Texts/doctor-name-label";
import CalendarIcon from '@/src/imgs/icons/calendarIcon.png'
import CloeckItem from '@/src/imgs/icons/clockIcon.png'
import IconField from "./components/Texts/icon-field";
import BodyCard from "./components/body-card/indesx";
export default function ItemElement(): React.ReactElement{
  return (
    <ItemContainer>
      <div className={styles.badyCard}>
        
        <Image src={DentistImage} height={120} width={160} alt="" />

        <BodyCard />

      </div>
      
      
      <Footer>
        
      </Footer>

    </ItemContainer>
  )
}