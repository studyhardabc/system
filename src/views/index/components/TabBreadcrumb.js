import React, { Component } from "react";
import { Breadcrumb } from "antd";

export default class TabBreadcrumb extends Component {
  render() {
    return (
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>学员后台</Breadcrumb.Item>
        <Breadcrumb.Item>学员评价</Breadcrumb.Item>
      </Breadcrumb>
    );
  }
}
