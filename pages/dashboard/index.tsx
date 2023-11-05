import CMBaseScreen from "@/src/components/BaseScreen";
import React from "react";
import ItemElement from "./components/itemElement";
export default function Dashboard(): React.ReactElement {
  return(
    <CMBaseScreen>
      <ItemElement />
    </CMBaseScreen>
  )
}