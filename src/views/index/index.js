import React, { Component } from "react";
import TopHeader from './components/TopHeader'
import SideMenu from './components/SideMenu'
import TabBreadcrumb from './components/TabBreadcrumb'
import Contentmenu from './components/Contentmenu'
import { Layout } from "antd";

import "./index.css";

export default class Index extends Component {
  render() {
    return (
        <Layout>
          <TopHeader></TopHeader>
          <Layout>
            <SideMenu></SideMenu>
            <Layout style={{ padding: "0 24px 24px" }}>
              <TabBreadcrumb></TabBreadcrumb>
              <Contentmenu></Contentmenu>
            </Layout>
          </Layout>
        </Layout>
    );
  }
}
