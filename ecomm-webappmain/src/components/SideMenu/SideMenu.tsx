import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";

const { Sider } = Layout;

const SideMenu = () => {
   const [collapsed, setCollapsed] = useState(false);
   const location = useLocation(); // Get the current location

   return (
      <Sider
         collapsible
         collapsed={collapsed}
         onCollapse={(value) => setCollapsed(value)}
      >
         <div className="demo-logo-vertical" />
         <Menu theme="dark" mode="inline" selectedKeys={[location.pathname]}>
            <Menu.Item key="/" icon={<HomeOutlined />}>
               <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="/product" icon={<HomeOutlined />}>
               <Link to="/product">Product</Link>
            </Menu.Item>
            {/* <Menu.SubMenu key="sub1" icon={<UserOutlined />} title="User">
               <Menu.Item key="/user">
                  <Link to="/user">Tom</Link>
               </Menu.Item>
            </Menu.SubMenu> */}
         </Menu>
      </Sider>
   );
};

export default SideMenu;
