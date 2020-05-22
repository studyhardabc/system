import React, { Component } from "react";
import { Select, Button } from "antd";
import { CheckOutlined, ReloadOutlined } from "@ant-design/icons";
import "./index.css";
const { Option } = Select;
export default class Modification extends Component {
  schoolData = {
    江西省: ["南昌大学", "江西科技大学", "江西财经大学", "江西师范大学"],
    湖北省: ["武汉大学", "华中科技大学", "武汉理工大学", "湖北大学"],
    广东省: ["中山大学", "深圳大学", "华南师范大学", "华南理工"],
    浙江省: ["浙江大学", "杭州电子科技大学", "宁波大学", "浙江理工大学"],
    河南省: ["河南大学", "郑州大学", "河南工业大学", "河南农业大学"],
    安徽省: ["安徽大学", "安徽师范大学", "安徽工业大学", "安徽财经大学"],
    北京: [
      "北京大学",
      "清华大学",
      "中国传媒大学",
      "中央戏剧学院",
      "北京电影学院",
    ],
    广西壮族自治区: ["广西大学", "桂林电子科技大学", "广西师范大学"],
  };
  cityData = {
    江西省: [
      "南昌市",
      "九江市",
      "上饶市",
      "抚州市",
      "宜春市",
      "吉安市",
      "赣州市",
      "景德镇市",
      "萍乡市",
      "新余市",
      "鹰潭市",
    ],
    湖北省: [
      "武汉市",
      "黄石市",
      "襄阳市",
      "荆州市",
      "宜昌市",
      "十堰市",
      "孝感市",
      "荆门市",
      "鄂州市",
      "黄冈市",
      "咸宁市",
      "随州市",
    ],
    广东省: [
      "广州市",
      "深圳市",
      "珠海市",
      "汕头市",
      "佛山市",
      "韶关市",
      "湛江市",
      "肇庆市",
      "江门市",
    ],
    浙江省: [
      "杭州市",
      "建德市",
      "富阳市",
      "临安市",
      "宁波市",
      "余姚市",
      "慈溪市",
      "奉化袭市",
      "温州市",
      "瑞安市",
      "乐清市",
      "嘉兴市",
      "海宁市",
      "平湖市百",
      "桐乡市",
      "度湖州市",
    ],
  };
  provinceData = [
    "江西省",
    "湖北省",
    "广东省",
    "浙江省",
    "河南省",
    "安徽省",
    "北京",
    "广西壮族自治区",
  ];
  state = {
    cities: this.schoolData[this.provinceData[0]],
    secondCity: this.schoolData[this.provinceData[0]][0],
  };
  cityState = {
    city: this.cityData[this.provinceData[0]],
    secondCities: this.cityData[this.provinceData[0][0]],
  };
  handleCityChange = (value) => {
    this.setState({
      city: this.cityData[value],
      secondCities: this.cityData[value][0],
    });
  };
  handleProvinceChange = (value) => {
    this.setState({
      cities: this.schoolData[value],
      secondCity: this.schoolData[value][0],
    });
  };
  onSecondCityChange = (value) => {
    this.setState({
      secondCity: value,
    });
  };
  onSecondCitiesChange = (value) => {
    this.setState({
      secondCities: value,
    });
  };
  render() {
    const { cities } = this.state;
    const { city } = this.cityState;
    return (
      <div className="Mod_box">
        <div className="Mod_top">
          <h3>编辑个人资料</h3>
          <p>一下资料请确保真实有效，请勿删除或随意填写</p>
        </div>
        <div className="Mod_con">
          <div className="Con_top">
            <div className="Con_first">
              <span className="stu">学生姓名：</span>
              <input placeholder="XXX" disabled />
              <span className="sex">性别：</span>
              <Select showSearch placeholder="性别" className="sel_1">
                <Option value={2}>男</Option>
                <Option value={1}>女</Option>
              </Select>
            </div>
            <div className="Con_tel">
              <span>手机号码：</span>
              <input placeholder="111111111111" />
            </div>
            <div className="Con_qq">
              <span>QQ：</span>
              <input placeholder="22222222" disabled />
            </div>
            <div className="Con_card">
              <span>身份证号码：</span>
              <input placeholder="4444444444444444444" disabled />
            </div>
          </div>
          <div>
            <div className="Con_sch">
              <span>学校省份：</span>
              <Select
                defaultValue={this.provinceData[0]}
                style={{ width: 120 }}
                onChange={this.handleProvinceChange}
              >
                {this.provinceData.map((province) => (
                  <Option key={province}>{province}</Option>
                ))}
              </Select>
              <span className="sch_name">大学名称：</span>
              <Select
                style={{ width: 120 }}
                value={this.state.secondCity}
                onChange={this.onSecondCityChange}
              >
                {cities.map((city) => (
                  <Option key={city}>{city}</Option>
                ))}
              </Select>
              <span className="sch_major">学院专业：</span>
              <input />
            </div>
            <div className="sch_state">
              <span>在校状态：</span>
              <Select showSearch placeholder="请选择状态">
                <Option value={9}>非应届</Option>
                <Option value={8}>在读</Option>
                <Option value={7}>大一</Option>
                <Option value={6}>大二</Option>
                <Option value={5}>大三</Option>
                <Option value={4}>大四</Option>
                <Option value={3}>应届</Option>
                <Option value={2}>在职</Option>
                <Option value={1}>待业</Option>
              </Select>
              <span className="sch_edu">学历：</span>
              <Select showSearch placeholder="请选择学历">
                <Option value={6}>高中</Option>
                <Option value={5}>高中以下</Option>
                <Option value={4}>博士</Option>
                <Option value={3}>硕士+</Option>
                <Option value={2}>本科</Option>
                <Option value={1}>专科</Option>
              </Select>
            </div>
            <div className="sch_2">
              <span>专业类型：</span>
              <Select showSearch placeholder="请选择专业">
                <Option value={2}>非计算机专业</Option>
                <Option value={1}>计算机专业</Option>
              </Select>
              <span className="sch_exp">开发经验：</span>
              <Select showSearch>
                <Option value={2}>无</Option>
                <Option value={1}>有</Option>
              </Select>
              <span className="sch_com">使用电脑：</span>
              <Select showSearch>
                <Option value={2}>个人携带</Option>
                <Option value={1}>学校配发</Option>
              </Select>
            </div>
            <div className="sch_city">
              <span>学员所在省份：</span>
              <Select
                defaultValue={this.provinceData[0]}
                style={{ width: 120 }}
                onChange={this.handleCityChange}
              >
                {this.provinceData.map((province) => (
                  <Option key={province}>{province}</Option>
                ))}
              </Select>
              <span className="city">所在城市：</span>
              <Select
                style={{ width: 120 }}
                value={this.cityState.secondCities}
                onChange={this.onSecondCitiesChange}
              >
                {city.map((cities) => (
                  <Option key={cities}>{cities}</Option>
                ))}
              </Select>
            </div>
            <div className="sch_tac">
              <span>紧急联系人：</span>
              <input />
              <span className="rel">关系：</span>
              <input />
              <span className="tel">联系电话：</span>
              <input />
            </div>
            <div className="adress">
              <span>住宿详细地址：</span>
              <input />
            </div>
          </div>
          <div className="Mod_bottom">
            <Button
              className="Mod_btn1"
              type="primary"
              icon={<CheckOutlined />}
            >
              确定
            </Button>
            <Button
              className="Mod_btn2"
              type="primary"
              icon={<ReloadOutlined />}
            >
              返回
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
