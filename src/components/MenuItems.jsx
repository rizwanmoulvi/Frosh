/* eslint-disable prettier/prettier */
import { useLocation } from "react-router";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";

function MenuItems() {
  const { pathname } = useLocation();

  return (
    <Menu
      theme="light"
      mode="horizontal"
      style={{
        display: "flex",
        fontSize: "17px",
        fontWeight: "500",
        width: "100%",
        justifyContent: "center",
      }}
      defaultSelectedKeys={[pathname]}
    >
      <Menu.Item key="/quickstart">
        <NavLink to="/quickstart">HOME</NavLink>
      </Menu.Item>
      <Menu.Item key="/learn">
        <NavLink to="/learn">LEARN</NavLink>
      </Menu.Item>
      <Menu.Item key="onramp">
        <NavLink to="/onramp">GROUPS</NavLink>
      </Menu.Item>
      <Menu.Item key="/erc20balance">
        <NavLink to="/erc20balance">FOLLOW</NavLink>
      </Menu.Item>
      <Menu.Item key="/nftBalance">
        <NavLink to="/nftBalance">MY WORKS</NavLink>
      </Menu.Item>
      <Menu.Item key="/contract">
        <NavLink to="/contract">ACCOUNT</NavLink>
      </Menu.Item>
    </Menu>
  );
}

export default MenuItems;
