import React, { Component } from "react";
import axios from 'axios'
import { Button, Table, Modal } from "antd";
import { CheckOutlined, ReloadOutlined } from "@ant-design/icons";
import "./index.css";
export default class Problem extends Component {
  state = {
    visible: false,
    TableData: [],
    replydata: '',
    id: null,
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
      },
      {
        title: "操作",
        dataIndex: "id",
        render: (id,obj) => {
          let { roleType } = JSON.parse(localStorage.getItem('token'))
          if (roleType > 1) {
            return <Button type="primary" onClick={() => {
              this.replydataClick(obj)
            }}>回复</Button>
          } else {
            return <Button type="primary" disabled onClick={() => {
              this.replydataClick(obj)
            }}>回复</Button>
          }
        }
      }
    ],
    data:[]
  };
  render() {
    let { username } = JSON.parse(localStorage.getItem('token'))
    let {columns,data} = this.state
    return (
      <div className='Pro'>
        <div className="Pro_box">
          <div className="Pro_top">
            <p>学员姓名：</p>
            <input value={username} disabled />
          </div>
          <div className="Pro_con">
            <p>内容问题：</p>
            <textarea placeholder="请输入技术内容" ref="textareaValue1"></textarea>
          </div>
          <Button className="Pro_btn1" type="primary" icon={<CheckOutlined />} onClick={this.ButtonClick}>
            确定
          </Button>
          <Button className="Pro_btn2" type="primary" icon={<ReloadOutlined />}>
            返回
          </Button>
        </div>
        <Table columns={columns} dataSource={data}  size="middle" pagination={{ pageSize: 5 }} />

        <Modal
          title="回复"
          visible={this.state.visible}
          okText="确认"
          cancelText="取消"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <textarea style={{width: '100%', height: '100px'}} ref="textareaValue"></textarea>
        </Modal>
      </div>
    );
  }

  componentDidMount() {
    axios.get('http://localhost:3002/problem').then(res => {
      this.setState({
        data: res.data
      })
    })
  }


  ButtonClick = () => {
    if (this.refs.textareaValue1.value === '') return
    let { username } = JSON.parse(localStorage.getItem('token'))
    let obj = {
      key: new Date().getTime(),
      name: username,
      question: this.refs.textareaValue1.value,
      time: new Date().getTime(),
      reply: this.state.replydata
    }
    axios.post('http://localhost:3002/problem', {
      ...obj
    }).then(res => {
      this.setState({
        data: [...this.state.data, obj]
      })
    })
    this.refs.textareaValue1.value = ''
  }

  handleOk = () => {
    axios.put(`http://localhost:3002/problem/${this.state.id.id}`, {
      ...this.state.id,
      reply: this.refs.textareaValue.value
    }).then(res => {
      let data = [...this.state.data]
      data.forEach(item => {
        if (item.id === res.data.id) {
          item.reply = res.data.reply
        }
      })
      this.setState({
        visible: false,
        data
      })
      console.log(this.objPut);
    })
    this.refs.textareaValue.value = ''
  }

  handleCancel = () => {
    this.setState({
      visible: false
    })
  }

  replydataClick = (obj) => {
    console.log(obj);

    this.setState({
      visible: true,
      id: obj
    })
  }
}
