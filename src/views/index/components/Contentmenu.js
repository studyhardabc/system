import React, { Component } from "react";
import { Layout } from "antd";
const { Content } = Layout;

export default class Contentmenu extends Component {
  render() {
    return (
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        Content
      </Content>
    );
  }
}