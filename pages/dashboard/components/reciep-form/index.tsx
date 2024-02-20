import React, { useState } from "react";
import styles from './styles.module.css'
import CMFormTextField from "@/src/components/FormTextField";
export default function ReciepForm(): React.ReactElement {
  return (
    <div>
      <NormalReciepForm />
    </div>
  )
}


function NormalReciepForm(): React.ReactElement {
  const [state, setState] = useState({
    name: '',
    crm:'',
    ufDoc: '',
    ufNow:'',
    addressAndPhone: '',
    city: ''
  })


  return (
    <div className={styles.formCntainer}>
      <p className={styles.formTitle}>RECEITA COMUM</p>
      <CMFormTextField label="Nome" onChange={(value) => setState((prevState)=>({...prevState, name: value})) } value={state.name} />
      <CMFormTextField label="Prescrição" onChange={(value) => setState((prevState)=>({...prevState, prescription: value})) } value={state.prescription} />
    </div>
  )
}

function EspecialReciepForm(): React.ReactElement {
  const [state, setState] = useState({
    name: '',
    prescription: ''
  })

  return (
    <div className={styles.formCntainer}>
      <p className={styles.formTitle}>RECEITA COMUM</p>
      <CMFormTextField label="Nome" onChange={(value) => setState((prevState)=>({...prevState, name: value})) } value={state.name} />
      <CMFormTextField label="Prescrição" onChange={(value) => setState((prevState)=>({...prevState, prescription: value})) } value={state.prescription} />
    </div>
  )
}