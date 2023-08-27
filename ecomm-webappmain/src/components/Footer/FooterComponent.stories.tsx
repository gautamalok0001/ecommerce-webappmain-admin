import React from "react";
import RootLevelErrorBoundary from "../../boundary/Error/RootLevelErrorBoundary";
import FooterComponent from "./FooterComponent";

export default {
   title: "FooterComponent",
   component: FooterComponent,
};

export const FooterComponentStories = () => (
   <RootLevelErrorBoundary>
      <FooterComponent />
   </RootLevelErrorBoundary>
);
