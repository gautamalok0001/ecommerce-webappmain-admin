import React from "react"
import RootLevelErrorBoundary from "../../boundary/Error/RootLevelErrorBoundary"
import Footer  from "./Footer"

export default {
    title: "Footer",
    component: Footer
}

export const FooterStories = () => <RootLevelErrorBoundary> <Footer/> </RootLevelErrorBoundary>