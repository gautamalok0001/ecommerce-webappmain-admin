import React from "react"
import RootLevelErrorBoundary from "../../boundary/Error/RootLevelErrorBoundary"
import Login  from "./Login"

export default {
    title: "Login",
    component: Login
}

export const LoginStories = () => <RootLevelErrorBoundary> <Login/> </RootLevelErrorBoundary>