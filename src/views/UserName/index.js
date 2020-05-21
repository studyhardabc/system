import React, { Component } from "react";
import axios from "axios";
import {
  Button,
  Table,
  Switch,
  Modal,
  Form,
  Input,
  Select,
} from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
const { Option } = Select;

export default class Users extends Component {
  state = {
    data: [],
    isShow: false,
    isUpdata: false,
    UpdataId: null,
  };

  columns = [
    {
      title: "角色名称",
      dataIndex: "roleName",
      key: "roleName",
    },
    {
      title: "用户名",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "用户状态",
      dataIndex: "roleState",
      key: "roleState",
      render: (roleState, item) => (
        <Switch
          defaultChecked={item.roleState}
          disabled={item.default}
          onChange={() => {
            this.handleSwitch(item);
          }}
        ></Switch>
      ),
    },
    {
      title: "操作",
      key: "action",
      render: (item) => (
        <div>
          <Button
            type="primary"
            shape="circle"
            icon={<EditOutlined />}
            disabled={item.default}
            onClick={() => {
              this.UpdataClick(item);
            }}
          />
          <Button
            type="primary"
            shape="circle"
            icon={<DeleteOutlined />}
            disabled={item.default}
            onClick={() => {
              this.handledelClick(item);
            }}
          />
        </div>
      ),
    },
  ];

  // 点击确认按钮
  handleAddOk = () => {
    this.refs.form
      .validateFields() // 表单验证
      .then((values) => {
        console.log(values);
        this.renderTable(values);
        this.refs.form.resetFields(); // 重置表单
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  // 验证成功后存进数据库
  renderTable = (values) => {
    const { username, password, roleType } = values;
    const roleArr = ["学员", "讲师", "校长"];
    axios
      .post("http://localhost:3002/users", {
        username,
        password,
        roleType,
        roleName: roleArr[roleType - 1],
        roleState: false,
      })
      .then((res) => {
        console.log(res.data);
        this.setState({
          isShow: false,
          data: [...this.state.data, res.data],
        });
      });
  };

  // 点击删除按钮
  handledelClick = (obj) => {
    console.log(obj);
    axios.delete(`http://localhost:3002/users/${obj.id}`).then((res) => {
      this.setState({
        data: this.state.data.filter((item) => item.id !== obj.id),
      });
    });
  };

  // 点击更新按钮
  UpdataClick = (obj) => {
    console.log(obj);
    setTimeout(() => {
      this.setState({
        isUpdata: true,
        UpdataId: obj.id,
      });
      // console.log(this.refs.formUpdata);
      this.refs.formUpdata.setFieldsValue(
        {
          username: obj.username,
          password: obj.password,
          roleType: obj.roleType,
        },
        0
      );
    });
  };

  // 确认更新按钮
  handleUpdata = () => {
    this.refs.formUpdata
      .validateFields() // 表单验证
      .then((values) => {
        this.updateTable(values);
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  // 更新的方法
  updateTable = (values) => {
    // console.log(values);
    const oldItems = this.state.data.filter(
      (item) => item.id === this.state.UpdataId
    );
    console.log(oldItems);

    const roleArr = ["学员", "讲师", "校长"];
    axios
      .put(`http://localhost:3002/users/${this.state.UpdataId}`, {
        ...oldItems[0],
        ...values,
        roleName: roleArr[values.roleType - 1],
      })
      .then((res) => {
        // console.log(res.data);
        let newlist = this.state.data.map((item) => {
          if (item.id === res.data.id) {
            return res.data;
          } else {
            return item;
          }
        });
        this.setState({
          isUpdata: false,
          data: newlist,
        });
      });
  };

  // 点击Switch开关
  handleSwitch = (obj) => {
    this.state.data.forEach((item) => {
      if (item.id === obj.id) {
        item.roleState = !item.roleState;
        axios
          .put(`http://localhost:3002/users/${obj.id}`, {
            ...item,
          })
          .then((res) => {
            console.log(res.data);
          });
      }
    });
  };

  componentDidMount() {
    axios.get("http://localhost:3002/users").then((res) => {
      console.log(res.data);
      this.setState({
        data: res.data,
      });
    });
  }

  render() {
    return (
      <div>
        <Button
          type="primary"
          onClick={() => {
            this.setState({
              isShow: true,
            });
          }}
        >
          添加用户
        </Button>
        <Table
          columns={this.columns}
          dataSource={this.state.data}
          rowKey={(item) => item.id}
          pagination={{ pageSize: 5 }}
        />

        {/* 添加用户 */}
        <Modal
          visible={this.state.isShow}
          title="添加用户"
          okText="确认"
          cancelText="取消"
          onCancel={() => {
            this.setState({
              isShow: false,
            });
          }}
          onOk={this.handleAddOk}
        >
          <Form
            ref="form"
            layout="vertical"
            name="form_in_modal"
            initialValues={{ modifier: "public" }}
          >
            <Form.Item
              name="username"
              label="用户名"
              rules={[
                {
                  required: true,
                  message: "Please input the username of collection!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="password"
              label="密码"
              rules={[
                {
                  required: true,
                  message: "Please input the password of collection!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="roleType"
              label="角色"
              rules={[
                {
                  required: true,
                  message: "Please input the roleType of collection!",
                },
              ]}
            >
              <Select showSearch placeholder="选择一个角色">
                <Option value={3}>校长</Option>
                <Option value={2}>讲师</Option>
                <Option value={1}>学员</Option>
              </Select>
            </Form.Item>
          </Form>
        </Modal>

        {/* 更新用户 */}
        <Modal
          visible={this.state.isUpdata}
          title="更新"
          okText="确认"
          cancelText="取消"
          onCancel={() => {
            this.setState({
              isUpdata: false,
            });
          }}
          onOk={this.handleUpdata}
        >
          <Form
            ref="formUpdata"
            layout="vertical"
            name="form_in_modal"
            initialValues={{ modifier: "public" }}
          >
            <Form.Item
              name="username"
              label="用户名"
              rules={[
                {
                  required: true,
                  message: "Please input the username of collection!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="password"
              label="密码"
              rules={[
                {
                  required: true,
                  message: "Please input the password of collection!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="roleType"
              label="角色"
              rules={[
                {
                  required: true,
                  message: "Please input the roleType of collection!",
                },
              ]}
            >
              <Select showSearch placeholder="选择一个角色">
                <Option value={3}>校长</Option>
                <Option value={2}>讲师</Option>
                <Option value={1}>学员</Option>
              </Select>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }
}
