import React, { Component } from "react";
import { withRouter } from "react-router";
import { Layout, Menu } from "antd";
import MenuArr from '../../../api/menu.js'
import {
  RightCircleOutlined,
  LeftCircleOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Sider } = Layout;

class SideMenu extends Component {
  state = {
    collapsed: false,
  };

  render() {
    const path = '/' + this.props.location.pathname.split('/')[1]

    return (
      <div>
        <Sider
          width={200}
          className="site-layout-background"
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={[this.props.location.pathname]}
            defaultOpenKeys={[path]}
            style={{ height: "100%", borderRight: 0 }}
            onClick={this.handleChangePage}
          >
          {this.renderMenu(MenuArr)}
          </Menu>
        </Sider>

        {this.state.collapsed ? (
          <RightCircleOutlined className="trigger" onClick={this.toggle} />
        ) : (
          <LeftCircleOutlined className="trigger" onClick={this.toggle} />
        )}
      </div>
    );
  }

  renderMenu = (MenuArr) => {
    let obj = JSON.parse(localStorage.getItem('token'))
    return MenuArr.map(item => {
      if (item.children && obj.roleType >= item.permission) {
        if (obj.roleType === 2 && item.permission === 1) {
          return null
        }
        return <SubMenu key={item.path} icon={<item.icon />} title={item.title}>
        {this.renderMenu(item.children)}
      </SubMenu>
      } else {
        if (item.permission > obj.roleType) {
          return null
        }
        if (item.title === '首页') {
          return <Menu.Item key={item.path} icon={<item.icon />}>{ item.title }</Menu.Item>
        }
          return <Menu.Item key={item.path}>{ item.title }</Menu.Item>
      }
    })
  }

  handleChangePage = (obj) => {
    // console.log(obj);
    this.props.history.push(obj.key)
  }
}

export default withRouter(SideMenu)
