import React from "react";
import { Layout } from "antd";
import "./headerComponent.scss";

const { Header } = Layout;
function HeaderComponent() {
   return (
      <>
         <Header className="header">Header</Header>
      </>
   );
}

export default HeaderComponent;
