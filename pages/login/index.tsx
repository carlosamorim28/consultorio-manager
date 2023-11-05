import ConsultorioManegerButton from "@/src/components/Button/Button";
import ConsultorioManegerTextField from "@/src/components/TextField/TextField";
import { Box } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import CoverImagem from '@/src/imgs/imagemLogin.png'
import Image from "next/image";
import CMBaseScreen from "@/src/components/BaseScreen";

export default function LoginScreen(): React.ReactElement {
  
  const [login, setLogin] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  
  return(
    <CMBaseScreen style={{justifyContent: 'center', alignItems: 'center'}}  >
      
      <Box width={'520px'} display={'flex'} flexDirection={'column'}  alignItems={'center'} >

        <Image src={CoverImagem} alt="" style={{width:'100%', height: 'auto', marginBottom: '80px'}}/>
        
        <ConsultorioManegerTextField value={login} onChange={setLogin} label="Login" style={{marginBottom: '20px'}}  />

        <ConsultorioManegerTextField isPassword value={password} onChange={setPassword} label="Senha"  style={{marginBottom: '64px'}} />
        
        <ConsultorioManegerButton onClick={()=>null} title="Entrar" style={{width: '48px'}} />
      </Box>
      
    </CMBaseScreen>
  )
}
