import React, { Component } from 'react'
import axios from "axios";
import { Table, Tag } from "antd";

export default class Rights extends Component {
  state = {
    data: []
  }

  columns = [
    {
      title: "#",
      dataIndex: "id",
      key: "id",
      render: (id) => <b>{id}</b>,
    },
    {
      title: "权限名称",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "权限等级",
      dataIndex: "grade",
      key: "grade",
      render: (grade) => {
        const gradeArr = ["green", "orange", "red"];
        return <Tag color={gradeArr[grade - 1]}>{grade}</Tag>;
      },
    },
  ];

  componentDidMount() {
    axios.get('http://localhost:3002/rights').then(res => {
      this.setState({
        data: res.data
      })
    })
  }


  render() {
    return (
      <div>
        <Table columns={this.columns} dataSource={this.state.data} pagination={{ pageSize: 10 }} rowKey={(item) => item.id}/>
      </div>
    )
  }
}
