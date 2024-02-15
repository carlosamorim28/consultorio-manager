import CMFormTextField from "@/src/components/FormTextField";
import Spacer from "@/src/components/Spacer";
import CMTextField from "@/src/components/TextField/TextField";
import React, { useState } from "react";
import styles from './styles.module.css'
import CMSubmitButton from "@/src/components/Button/Button";

interface IAttestationForm {
  name: string
  attest: string
  professionalCategory: string,
  series: string,
  CID: string,
  needOf: string,
  date: string
}

export default function AttestationForm(): React.ReactElement {
  const [form, setForm] = useState<IAttestationForm>({
    attest: '',
    CID: '',
    date: '',
    name: '',
    needOf: '',
    professionalCategory: '',
    series: ''
  })

  const buttonBaseStyle: React.CSSProperties = {
    height: '30px',
    width: '150px'
  }

  function changeName(value: string): void{
    setForm({...form, name: value})
  }
  return( 
  <div  className={styles.containerForm}>
    <p className={styles.title}>Atestado médico</p>
    <CMFormTextField  label="Nome do paciente*" onChange={ changeName } value={form.name}  />
    <CMFormTextField  label="Atesto*" onChange={ changeName } value={form.name}  />
    <div style={{display:'flex'}}>
      <CMFormTextField style={{width: '360px'}} label="Cateria Profissional" onChange={ changeName } value={form.name}  />
      <Spacer />
      <CMFormTextField style={{width: '360px'}} label="Série" onChange={ changeName } value={form.name}  />
      <Spacer />
      <CMFormTextField style={{width: '360px'}} label="CID" onChange={ changeName } value={form.name}  />
    </div>
    <CMFormTextField  label="Necessita de" onChange={ changeName } value={form.name}  />
    <CMFormTextField  label="Data" onChange={ changeName } value={form.name}  />
    <div className={styles.actionContainer}>
      <Spacer />
      <CMSubmitButton onClick={()=>null}  title="Imprimir" style={{...buttonBaseStyle}} />
      <CMSubmitButton onClick={()=>null}  title="Limpar" style={{...buttonBaseStyle, backgroundColor:'#CCCCCC'}}  />
    </div>
  </div>
  )
}

