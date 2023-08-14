import React from "react"
import RootLevelErrorBoundary from "../../boundary/Error/RootLevelErrorBoundary"
import Test from "./Test"

export default {
    title: "Testing Data",
    component: Test
}

export const Testing = () => <RootLevelErrorBoundary> <Test/> </RootLevelErrorBoundary>