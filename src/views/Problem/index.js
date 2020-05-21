import React, { Component } from "react";
import { Button, Table } from "antd";
import { CheckOutlined, ReloadOutlined } from "@ant-design/icons";
import style from "./index.css";
export default class Problem extends Component {
  state = {
    columns: [
      {
        title: "姓名",
        dataIndex: "name",
      },
      {
        title: "问题理由",
        dataIndex: "question",
      },
      {
        title: "创建时间",
        dataIndex: "time",
      },
      {
        title: "回复",
        dataIndex: "reply"
      }
    ],
    data:[
      {
        key:'1',
        name:'John Brown',
        question:'呵呵',
        time:'2020-5-21',
        reply:'呵呵哒'
      },
      {
        key:'2',
        name:'John Brown',
        question:'呵呵',
        time:'2020-5-21',
        reply:'呵呵哒'
      },
      {
        key:'3',
        name:'John Brown',
        question:'呵呵',
        time:'2020-5-21',
        reply:'呵呵哒'
      },
      {
        key:'4',
        name:'John Brown',
        question:'呵呵',
        time:'2020-5-21',
        reply:'呵呵哒'
      },
    ]
  };
  render() {
    let {columns,data} = this.state
    return (
      <div className='Pro'>
        <div className="Pro_box">
          <div className="Pro_top">
            <p>学生姓名：</p>
            <input placeholder="XXX" disabled />
          </div>
          <div className="Pro_con">
            <p>内容问题：</p>
            <textarea placeholder="请输入技术内容"></textarea>
          </div>
          <Button className="Pro_btn1" type="primary" icon={<CheckOutlined />}>
            确定
          </Button>
          <Button className="Pro_btn2" type="primary" icon={<ReloadOutlined />}>
            返回
          </Button>
        </div>
        <Table columns={columns} dataSource={data}  size="middle" />
      </div>
    );
  }
}
