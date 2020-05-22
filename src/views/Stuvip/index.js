import React, { Component } from "react";
import { Button } from "antd";
import { CheckOutlined, ReloadOutlined } from "@ant-design/icons";

export default class Stuvip extends Component {
  render() {
    let { username } = JSON.parse(localStorage.getItem('token'))
    return (
      <div>
        <div className="Pro_box">
          <div className="Pro_top">
            <p>学员姓名：</p>
            <input value={username} disabled />
          </div>
          <div className="Pro_con">
            <p>申请理由：</p>
            <textarea
              placeholder="请输入申请理由"
              ref="textareaValue1"
            ></textarea>
          </div>
          <Button className="Pro_btn1" type="primary" icon={<CheckOutlined />} onClick={this.ButtonClick}>
            确定
          </Button>
          <Button className="Pro_btn2" type="primary" icon={<ReloadOutlined />}>
            返回
          </Button>
        </div>
      </div>
    );
  }
}
