import React from "react";
import RootLevelErrorBoundary from "../../boundary/Error/RootLevelErrorBoundary";
import HeaderComponent from "./HeaderComponent";

export default {
   title: "HeaderComponent",
   component: HeaderComponent,
};

export const HeaderComponentStories = () => (
   <RootLevelErrorBoundary>
      <HeaderComponent />
   </RootLevelErrorBoundary>
);
