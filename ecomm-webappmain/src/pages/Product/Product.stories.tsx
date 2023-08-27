import React from "react";
import RootLevelErrorBoundary from "../../boundary/Error/RootLevelErrorBoundary";
import Product from "./Product";

export default {
   title: "Product",
   component: Product,
};

export const ProductStories = () => (
   <RootLevelErrorBoundary>
      <Product />
   </RootLevelErrorBoundary>
);
