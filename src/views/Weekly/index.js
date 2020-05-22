import React, { Component } from "react";
import axios from 'axios'
import { Button, Table, Modal } from "antd";
import { CheckOutlined, ReloadOutlined } from "@ant-design/icons";
import "./index.css";
export default class Weekly extends Component {
  state = {
    visible: false,
    TableData: [],
    replydata: '',
    data:[],
    columns: [
      {
        title: "姓名",
        dataIndex: "name",
      },
      {
        title: "周报标题",
        dataIndex: "title",
      },
      {
        title: "周报内容",
        dataIndex: "content",
      },
      {
        title: "周报状态",
        dataIndex: "weeklystatus",
        render: (weeklystatus, obj) => {
        return <div style={{cursor: "pointer"}} onClick={() => {
          this.contentData(obj)
        }}>{weeklystatus}</div>
        }
      },
      {
        title: "创建时间",
        dataIndex: "time"
      },
      {
        title: "操作",
        dataIndex: "id",
        render: (id) => {
          let { roleType } = JSON.parse(localStorage.getItem('token'))
          if (roleType > 1) {
            return <Button type="danger" onClick={() => {
              this.replydataClick(id)
            }}>删除</Button>
          } else {
            return <Button type="danger" disabled onClick={() => {
              this.replydataClick(id)
            }}>删除</Button>
          }
        }
      }
    ],
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
          <div className="Pro_top">
            <p>周报标题：</p>
            <input placeholder="请题写周报标题"  ref="inputValue" />
          </div>
          <div className="Pro_con">
            <p>周报内容：</p>
            <textarea placeholder="请输入周报理由" ref="textareaValue1"></textarea>
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
          title="查看内容"
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
    axios.get('http://localhost:3002/weekly').then(res => {
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
      title: this.refs.inputValue.value,
      content: this.refs.textareaValue1.value,
      weeklystatus: '未查看',
      time: new Date().getTime()
    }
    axios.post('http://localhost:3002/weekly', {
      ...obj
    }).then(res => {
      this.setState({
        data: [...this.state.data, obj]
      })
    })
    this.refs.textareaValue1.value = ''
    this.refs.inputValue.value = ''
  }

  replydataClick = (id) => {
    // console.log(id);
    axios.delete(`http://localhost:3002/weekly/${id}`).then(res => {
      this.setState({
        data: this.state.data.filter(item => item.id !== id)
      })
    })
  }

  contentData = (obj) => {
    setTimeout(() => {
      this.refs.textareaValue.value = obj.content
    }, 1000)
    axios.put(`http://localhost:3002/weekly/${obj.id}`, {
      ...obj,
      weeklystatus: '以查看'
    }).then(res => {
      let data = [...this.state.data]
      data.forEach(item => {
        if (item.id === res.data.id) {
          item.weeklystatus = res.data.weeklystatus
        }
      })
      this.setState({
        visible: true,
        data
      })
    })
  }

  handleOk = () => {

  }

  handleCancel = () => {
    this.setState({
      visible: false
    })
  }
}
