import React from "react"
import RootLevelErrorBoundary from "../../boundary/Error/RootLevelErrorBoundary"
import Header  from "./Header"

export default {
    title: "Header",
    component: Header
}

export const HeaderStories = () => <RootLevelErrorBoundary> <Header/> </RootLevelErrorBoundary>