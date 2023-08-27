import React from "react";
import SideMenu from "./SideMenu";
import RootLevelErrorBoundary from "../../boundary/Error/RootLevelErrorBoundary";

export default {
   title: "SideMenu",
   component: SideMenu,
};

export const SideMenuStories = () => (
   <RootLevelErrorBoundary>
      <SideMenu />
   </RootLevelErrorBoundary>
);
