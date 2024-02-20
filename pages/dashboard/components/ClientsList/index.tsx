import React from "react";
import styles from './styles.module.css'
import ItemElement from "../itemElement";

export interface IConsult {
  doctorName: string
  clientName: string
  date: string
  time: string
}

export interface IConsultList {
  consultList: IConsult[]
}

export default function ConsultList(props: IConsultList): React.ReactElement{
  return (
    <div className={styles.listContainer} >
      {props.consultList.map((element)=>{
        return <ItemElement />
      })}
      
    </div>
  )
}