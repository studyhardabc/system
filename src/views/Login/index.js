import React, { Component } from "react";
import axios from 'axios'
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./index.css";

export default class Login extends Component {
  onFinish = (value) => {
    console.log("Received values of form: ", value);
    axios.get(`http://localhost:3002/users?username=${value.username}&password=${value.password}&roleState=${true}`).then(res => {
      if (res.data.length !== 0) {
        localStorage.setItem('token', JSON.stringify(res.data[0]))
        this.props.history.push('/')
      } else {
        alert('用户名或密码不正确')
      }
    })
  };

  render() {
    return (
      <div className="login_box">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={this.onFinish}
        >
          <div className="login_stu">
            <p>学员后台系统</p>
          </div>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
