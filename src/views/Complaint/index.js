import React, { Component } from 'react'
import axios from 'axios'
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
import { Button } from 'antd';
<<<<<<< HEAD
import { CheckOutlined, ReloadOutlined, BellOutlined } from '@ant-design/icons';
import './index.css'
=======
import { CheckOutlined,ReloadOutlined } from '@ant-design/icons';
import  "./index.css";
>>>>>>> 89df8c43affa5ed2fa60884b8c653b123cc17df9

export default class Complaint extends Component {
  state = {
    data: []
  }

  render() {
    return (
      <div className='Com_box'>
        <div className='Com_infor'>
        <p>投诉内容：</p>
        <textarea placeholder="本投诉是匿名投诉，不会暴露信息" className='Com_text' ref="textareaValue">
        </textarea>
        <div className="Con_frame">
          {
            this.state.data?
            <div className="swiper-container" ref="Swiper">
            <div className="swiper-wrapper">
              {
                this.state.data.map(item => {
                  return <div className="swiper-slide" key={item + Math.random()}>投诉<BellOutlined />：{item}</div>
                })
              }
            </div>
          </div>:
          null
          }
        </div>
        </div>
        <Button className='Com_btn1' type="primary" icon={<CheckOutlined />} onClick={this.ButtonClick}>
          确定
        </Button>
        <Button className='Com_btn2' type="primary" icon={<ReloadOutlined />}>
          返回
        </Button>
      </div>
    )
  }

  componentDidMount() {
    axios.get('http://localhost:3002/complaint').then(res => {
      console.log(res.data);
      this.setState({
        data: res.data.map(item => item.value)
      }, () => {
        this.mySwiper = new Swiper(this.refs.Swiper, {
          direction: 'vertical',
          loop: true,
          autoplay: true
        })
      })
    })
  }


  ButtonClick = () => {
    let value = this.refs.textareaValue.value
    axios.post('http://localhost:3002/complaint', {
      value
    }).then(res => {
      this.setState({
        data: [...this.state.data, value]
      }, () => {
        new Swiper(this.refs.Swiper, {
          direction: 'vertical',
          loop: true,
          autoplay: true
        })
      })
    })
    this.refs.textareaValue.value = ''
  }
}
