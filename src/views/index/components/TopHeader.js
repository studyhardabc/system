import React, { Component } from "react";
import { Layout, Menu, Dropdown } from "antd";
import { DownOutlined, PoweroffOutlined } from "@ant-design/icons";
const { Header } = Layout;

export default class TopHeader extends Component {
  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
          <PoweroffOutlined /> 退出
          </a>
        </Menu.Item>
      </Menu>
    );

    return (
      <Header className="header">
        <div className="logo" />

        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            Hover me <DownOutlined />
          </a>
        </Dropdown>
      </Header>
    );
  }
}
