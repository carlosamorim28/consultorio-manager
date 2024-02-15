import CMBaseScreen from "@/src/components/BaseScreen";
import React, { useState } from "react";
import ItemElement from "./components/itemElement";
import NavigationTab from "@/pages/dashboard/components/NavigationTab";
import styles from './style.module.css'
import ConsultForm from "./components/ConsultForm";
import Spacer from "@/src/components/Spacer";
import Image from "next/image";
import ProfileImage from '@/src/imgs/profile.png'
import CMSubmitButton from "@/src/components/Button/Button";
import { NavigationTabs } from "./components/NavigationTab/NavigationTabViewModel";
import AttestationForm from "./components/AttestationForm";
export default function Dashboard(): React.ReactElement {
  const [tabSelected, setTabSelected] = useState<NavigationTabs>(NavigationTabs.consultas)
  
  const objeto:{ [key in NavigationTabs]?: React.ReactNode} = {
    [NavigationTabs.consultas]: <ConsultForm />,
    [NavigationTabs.atestados]: <AttestationForm />
  }


  return(
    <CMBaseScreen>
      <div className={styles.headerContainer}>
        <div>
          <p className={styles.title}>Dr. Carlos</p>
          <p className={styles.subtitle}>Cirurgião dentista</p>
        </div>
        <Spacer  />
        <Image alt="" src={ProfileImage} style={{width: '80px', height: '80px'}} />
      </div>
      <div className={styles.tabContainer}>
        <NavigationTab setNavigationTab={setTabSelected} />
        <Spacer />
        <CMSubmitButton title="Nova Consulta" onClick={()=>null} style={{color: '#731900', backgroundColor:'#fff', border: "4px solid var(--d-9-d-9-d-9, #731900)", width: '251px',height: '56px', fontFamily:'Inter', fontSize:'18px', lineHeight: 'normal' }} />
      </div>
      <div className={styles.cardListContainer}>
        <ItemElement />
        <ItemElement />
        <ItemElement />
      </div>
    <div className={styles.customFormStyles}>
      {objeto[tabSelected]}
    </div>
    </CMBaseScreen>
  )
}