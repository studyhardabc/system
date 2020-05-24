import React, { Component } from "react";
import axios from 'axios'
import { Button } from "antd";
import style from "./index.module.css";

export default class Data extends Component {
  state = {
    data: [],
    dataList: {}
  }

  render() {
    return (
      <div>
        <div className={style.box6}>
          <Button type="primary" style={{background: '#428bca'}} onClick={this.ButtonClick}>修改</Button>
        </div>
        {
          this.state.data?
          <div>
          <div className={style.box2}>
            <div className={style.box}>
              <img src={this.state.data.HeadPortrait} />
            </div>
            <div className={style.box1}>
              <span>{this.state.data.username}</span>
              <span>({this.state.data.sex})</span>
            </div>
          </div>
            <div className={style.box3}>
            <div className={style.box5}><span>身份证号码</span><i>****************</i></div>
            <div className={style.box5}><span>手机号</span><i>****************</i></div>
            <div className={style.box5}><span>QQ</span><i>****************</i></div>
            <div className={style.box5}><span>学号</span><i>{this.state.dataList.StudentNumber}</i></div>
            <div className={style.box5}><span>毕业学院</span><i>{this.state.data.schoolname}</i></div>
            <div className={style.box5}><span>在校状态</span><i>{this.state.data.status}</i></div>
            <div className={style.box5}><span>学历</span><i>{this.state.data.education}</i></div>
            <div className={style.box5}><span>千锋班级</span><i>{this.state.dataList.class1}</i></div>
            <div className={style.box5}><span>招生老师</span><i>{this.state.dataList.recruiter}</i></div>
            <div className={style.box5}><span>报名日期</span><i>{this.state.dataList.time}</i></div>
          </div>
        </div>:
        null
        }
      </div>
    );
  }

  componentDidMount() {
    this.fn1()
  }

  fn1 = () => {
    const { username } = JSON.parse(localStorage.getItem("token"));
    axios.get(`http://localhost:3002/modification?username=${username}`).then(res => {
      console.log(res.data[0]);
      this.setState({
        data: res.data[0]
      })
    })

    axios.get(`http://localhost:3002/users?username=${username}`).then(res => {
      this.setState({
        dataList: res.data[0]
      })
    })
  }


  ButtonClick = () => {
    this.props.history.push('/student/modification/1')
  }
}
