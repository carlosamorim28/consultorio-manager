import React, { ReactElement, ReactNode, useContext, useEffect, useState } from "react";
import { NavigationTabViewModelContext, NavigationTabViewModelProvider, NavigationTabs } from "./NavigationTabViewModel";
import styles from './styles.module.css'

interface Props {
  setNavigationTab: (value: NavigationTabs) => void
}

export default function NavigationTab(props: Props): React.ReactElement {
  return(
    <NavigationTabViewModelProvider>
      <TabNavigationBody setNavigationTab={props.setNavigationTab}/>
    </NavigationTabViewModelProvider>
  )
}


function TabNavigationBody(props: Props): ReactElement{
  const {getBorderStyle, navigation} = useContext(NavigationTabViewModelContext)
  return(
     <div className={styles.navigationTabContainer}>
        <div style={getBorderStyle(NavigationTabs.consultas)} onClick={()=>{ 
          navigation(NavigationTabs.consultas, props.setNavigationTab)
        }} >
          <p>{NavigationTabs.consultas}</p>
        </div>

        <div style={getBorderStyle(NavigationTabs.pacientes)}onClick={()=>{ 
          navigation(NavigationTabs.pacientes, props.setNavigationTab)
        }}>
        <p>{NavigationTabs.pacientes}</p>

        </div>
        <div style={getBorderStyle(NavigationTabs.atestados)} onClick={()=>{ 
          navigation(NavigationTabs.atestados, props.setNavigationTab)
        }}>
        <p>{NavigationTabs.atestados}</p>

        </div>
        <div style={getBorderStyle(NavigationTabs.receitas)} onClick={()=>{ 
          navigation(NavigationTabs.receitas, props.setNavigationTab)
        }}>
        <p>{NavigationTabs.receitas}</p>

        </div>
      </div>
  )
}