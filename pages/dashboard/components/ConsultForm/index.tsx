import React from "react";
import styles  from './style.module.css'
import Spacer from "@/src/components/Spacer";
import Image from "next/image";
import CloeckItem from '@/src/imgs/icons/clockIcon.png'
import CalendarIcom from '@/src/imgs/icons/calendarIcon.png' 
import CMSubmitButton from "@/src/components/Button/Button";
import CMIconButton from "@/src/components/IconButton/indesx";
import PersonIcon from '@/src/imgs/icons/check check_icon.png'
import { TextField } from "@mui/material";
import CMTextField from "@/src/components/TextField/TextField";
import ConsultFormTextField from "../ConsultFormInput/ConsultFormTextField";
import ConsultFormDropBox from "../ConsultFormInput/CustomFormDropBox/indesx";
import CustomDateFormField from "../ConsultFormInput/CustomFormDateField";

export default function ConsultForm (): React.ReactElement {
  return (
    <div className={styles.cardContainer} >
      <div className={styles.headerArea}>
        <div>
          <p className={styles.cardTitle}>Plano de Tratamento</p>
          <p className={styles.cardDoctorNmade}>Dr.Carlos Jorge</p>
        </div>
        <Spacer />
        <div style={{display: 'flex', alignItems: 'center'}}>
          <Image alt="" src={CloeckItem} width={20} height={20} style={{marginRight: '8px', height: '20px', width: '20px'}} />
          <p className={styles.smallText}>03:30 PM - 05:00 PM</p>
          <Image alt="" src={CalendarIcom} width={20} height={20} style={{marginRight: '8px', height: '20px', width: '20px'}} />
          <p className={styles.smallText}>AGO 27, 2023</p>
          <CMIconButton icon={PersonIcon} title="Em atendimento" personStyles={{backgroundColor: '#CCD100'}} />

        </div>
      </div>

      <div className={styles.cardFormArea}>
        <div className={styles.inputRow} style={{display: 'flex'}}>
          <CustomDateFormField label="Data" onChange={()=>null} placeholder="10/10/2010" value="" />
          <ConsultFormDropBox label="Dentes" placeholder="Selecione" value="" onChange={()=> null}  />
          <ConsultFormTextField placeholder="Descreva  o Procedimento" label="Procedimentos" onChange={()=>null} value={""} />
        </div>

        <div className={styles.inputRow} style={{display: 'flex'}}>
          <CustomDateFormField label="Data" onChange={()=>null} placeholder="10/10/2010" value="" />
          <ConsultFormDropBox label="Dentes" placeholder="Selecione" value="" onChange={()=> null}  />
          <ConsultFormTextField placeholder="Descreva  o Procedimento" label="Procedimentos" onChange={()=>null} value={""} />
        </div>

        <div className={styles.inputRow} style={{display: 'flex'}}>
          <CustomDateFormField label="Data" onChange={()=>null} placeholder="10/10/2010" value="" />
          <ConsultFormDropBox label="Dentes" placeholder="Selecione" value="" onChange={()=> null}  />
          <ConsultFormTextField placeholder="Descreva  o Procedimento" label="Procedimentos" onChange={()=>null} value={""} />
        </div>

        <div className={styles.footerContainer}>
          <Spacer />
          <CMIconButton icon={PersonIcon} title="Cancelar Atendimento" personStyles={{backgroundColor: '#CCCCCC', marginRight: '12px'}} />
          <CMIconButton icon={PersonIcon} title="Finalizar atendimento" personStyles={{backgroundColor: '#00D121'}} />

        </div>

      </div>

    </div>
  )
}