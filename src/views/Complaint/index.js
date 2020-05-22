import React, { Component } from 'react'
import { Button } from 'antd';
import { CheckOutlined,ReloadOutlined } from '@ant-design/icons';
import  "./index.css";

export default class Complaint extends Component {
  render() {
    return (
      <div className='Com_box'>
        <div className='Com_infor'>
        <p>投诉内容：</p>
        <textarea placeholder="本投诉是匿名投诉，不会暴露信息" className='Com_text'>
        </textarea>
        </div>
        <Button className='Com_btn1' type="primary" icon={<CheckOutlined />}>
          确定
        </Button>
        <Button className='Com_btn2' type="primary" icon={<ReloadOutlined />}>
          返回
        </Button>
      </div>
    )
  }
}
