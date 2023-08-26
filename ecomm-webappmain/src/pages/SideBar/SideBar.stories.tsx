import React from "react"
import RootLevelErrorBoundary from "../../boundary/Error/RootLevelErrorBoundary"
import SideBar  from "./SideBar"

export default {
    title: "SideBar",
    component: SideBar
}

export const SideBarStories = () => <RootLevelErrorBoundary> <SideBar/> </RootLevelErrorBoundary>