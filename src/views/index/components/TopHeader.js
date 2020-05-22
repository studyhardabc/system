import React, { Component } from "react";
import { Layout, Menu, Dropdown } from "antd";
import { DownOutlined, PoweroffOutlined } from "@ant-design/icons";
import {withRouter} from 'react-router'
const { Header } = Layout;


class TopHeader extends Component {
  signOut=()=>{
    localStorage.removeItem("token")
    this.props.history.push("/login")
    console.log(this.props)
  }
  render() {
    const user = JSON.parse(localStorage.getItem('token'))
    const menu = (
      <Menu>
        <Menu.Item onClick={this.signOut}>
          <PoweroffOutlined /> 退出
        </Menu.Item>
      </Menu>
    );

    return (
      <Header className="header">
        <div className="logo" />
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            {user.username} <DownOutlined />
          </a>
        </Dropdown>
      </Header>
    );
  }
}
export default withRouter(TopHeader)
