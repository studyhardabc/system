import React, { Component } from "react";
import { Button } from "antd";
import style from "./index.module.css";

export default class Data extends Component {
  render() {
    return (
      <div>
        <div className={style.box6}>
          <Button type="primary" style={{background: '#428bca'}} onClick={this.ButtonClick}>修改</Button>
        </div>
        <div>
          <div className={style.box2}>
            <div className={style.box}>
              <img src="/logo192.png" />
            </div>
            <div className={style.box1}>
              <span>杨浩</span>
              <span>(男)</span>
            </div>
          </div>
            <div className={style.box3}>
            <div className={style.box5}><span>身份证号码</span><i>****************</i></div>
            <div className={style.box5}><span>手机号</span><i>****************</i></div>
            <div className={style.box5}><span>QQ</span><i>****************</i></div>
            <div className={style.box5}><span>学号</span><i>1231231231231231231</i></div>
            <div className={style.box5}><span>毕业学院</span><i>1231231231231231231</i></div>
            <div className={style.box5}><span>在校状态</span><i>1231231231231231231</i></div>
            <div className={style.box5}><span>学历</span><i>1231231231231231231</i></div>
            <div className={style.box5}><span>千锋班级</span><i>1231231231231231231</i></div>
            <div className={style.box5}><span>招生老师</span><i>1231231231231231231</i></div>
            <div className={style.box5}><span>报名日期</span><i>1231231231231231231</i></div>
          </div>
        </div>
      </div>
    );
  }

  ButtonClick = () => {
    this.props.history.push('/student/modification/1')
  }
}
