import React from "react";
import ClientNameLabel from "../Texts/client-name";
import DoctorNameLabel from "../Texts/doctor-name-label";
import IconField from "../Texts/icon-field";
import CalendarIcon from '@/src/imgs/icons/calendarIcon.png'
import CloeckItem from '@/src/imgs/icons/clockIcon.png'
import styles from './style.module.css'

export default function BodyCard(): React.ReactElement {
 return(
  <div className={styles.bodyCard}>          
    <ClientNameLabel label="Carlos Jorge de Castro Amorim" />
    <DoctorNameLabel label="Dr. Carlos" />
    <div style={{display:'flex', flex: 1}} />
    <IconField icon={CalendarIcon} text="DEC 14, 2023" />
    <IconField icon={CloeckItem} text="08:00 PM - 09:00PM" />
    <div style={{display:'flex', flex: 1}} />
  </div>
 ) 
}