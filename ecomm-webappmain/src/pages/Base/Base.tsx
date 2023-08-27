import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
const { Content } = Layout;
import HeaderComponent from "../../components/Header/HeaderComponent";
import SideMenu from "../../components/SideMenu/SideMenu";
import FooterComponent from "../../components/Footer/FooterComponent";

const Base = () => {
   return (
      <div className="main">
         <Layout style={{ minHeight: "100vh" }}>
            <SideMenu />
            <Layout>
               <HeaderComponent />
               <Content style={{ margin: "0 16px" }}>
                  <Outlet />
               </Content>
               <FooterComponent />
            </Layout>
         </Layout>
      </div>
   );
};

export default Base;
