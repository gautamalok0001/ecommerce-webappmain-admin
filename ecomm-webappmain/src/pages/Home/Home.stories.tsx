import React from "react";
import RootLevelErrorBoundary from "../../boundary/Error/RootLevelErrorBoundary";
import Home from "./Home";

export default {
   title: "Home",
   component: Home,
};

export const HomeStories = () => (
   <RootLevelErrorBoundary>
      <Home />
   </RootLevelErrorBoundary>
);
