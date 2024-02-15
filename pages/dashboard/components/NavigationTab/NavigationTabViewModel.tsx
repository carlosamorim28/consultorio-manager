import React, { ReactNode, useState } from "react";


export enum NavigationTabs {
  consultas = "consultas",
  pacientes = "pacientes",
  atestados = "atestados",
  receitas = "receitas"
}

type NavigationTabsViewModelType = {
  getBorderStyle:(actualTab: NavigationTabs) => React.CSSProperties,
  navigation: (newTabSeleceted: NavigationTabs, exportSetTab: (value: NavigationTabs) => void) => void
}

export const NavigationTabViewModelContext = React.createContext<NavigationTabsViewModelType>({
  getBorderStyle(actualTab) {
      return {}
  },
  navigation(newTabSeleceted, exportSetTab) {
      
  },
})

export function NavigationTabViewModelProvider({ children }: {children:ReactNode}) {
  const [tabSelected, setTabSelected] = useState<NavigationTabs>(NavigationTabs.consultas)

  function getBorderStyle(actualTab: NavigationTabs): React.CSSProperties{
    return actualTab === tabSelected ? { borderBottomWidth: '3px', borderBottomColor: '#FFF', borderBottomStyle: 'solid' } : {}
  }

  function navigation(newTabSelected: NavigationTabs, exportSetTab: (value: NavigationTabs) => void): void{
    setTabSelected(newTabSelected)
    exportSetTab(newTabSelected)
  }
  return (
    <NavigationTabViewModelContext.Provider
      value={{
        getBorderStyle,
        navigation
      }}
    >
      {children}
    </NavigationTabViewModelContext.Provider>
  );
}