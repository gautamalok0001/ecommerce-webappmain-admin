import React from "react";
import RootLevelErrorBoundary from "../../boundary/Error/RootLevelErrorBoundary";
import Base from "./Base";

export default {
   title: "Base",
   component: Base,
};

export const BaseStories = () => (
   <RootLevelErrorBoundary>
      <Base />
   </RootLevelErrorBoundary>
);
