import React, { Component } from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  RightCircleOutlined,
  LeftCircleOutlined,
  HomeOutlined
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Sider } = Layout;
// import MenuArr from '../../../api/menu.js'

export default class SideMenu extends Component {
  state = {
    collapsed: false,
  };

  render() {
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
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <Menu.Item key="sub5" icon={<HomeOutlined />}>首页</Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="学员后台">
              <Menu.Item key="1">匿名投诉</Menu.Item>
              <Menu.Item key="2">技术问题</Menu.Item>
              <Menu.Item key="3">项目上传</Menu.Item>
              <Menu.Item key="4">VIP</Menu.Item>
              <Menu.Item key="4">学员周报</Menu.Item>
              <Menu.Item key="4">我的资料</Menu.Item>
              <Menu.Item key="4">交费明细</Menu.Item>
              <Menu.Item key="4">参加考试</Menu.Item>
              <Menu.Item key="4">学员评价</Menu.Item>
              <Menu.Item key="4">教学测评</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="学员考勤">
              <Menu.Item key="5">学员请假</Menu.Item>
              <Menu.Item key="6">学员违纪</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              icon={<NotificationOutlined />}
              title="权限管理"
            >
              <Menu.Item key="9">角色列表</Menu.Item>
              <Menu.Item key="10">权限列表</Menu.Item>
            </SubMenu>
            <SubMenu key="sub4" icon={<LaptopOutlined />} title="考试系统">
              <Menu.Item key="5">试卷列表</Menu.Item>
              <Menu.Item key="6">学员成绩</Menu.Item>
            </SubMenu>
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
}
