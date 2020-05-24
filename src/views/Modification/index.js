import React, { Component } from "react";
import axios from "axios";
import { Select, Button, Form, Input } from "antd";
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
    cityState: {
      city: this.cityData[this.provinceData[0]],
      secondCities: this.cityData[this.provinceData[0][0]],
    },
  };
  render() {
    const { username } = JSON.parse(localStorage.getItem("token"));
    const { cities, cityState } = this.state;
    return (
      <Form onFinish={this.fn1} ref="Form">
        <div className="Mod_box">
          <div className="Mod_top">
            <h3>编辑个人资料</h3>
            <p>以下资料请确保真实有效，请勿删除或随意填写</p>
          </div>
          <div className="Mod_con">
            <div className="Con_top">
              <div className="Con_first">
                <Form.Item
                  name="username"
                  label='学生姓名'
                >
                  <Input placeholder={username} disabled style={{ color: "#999" }} />
                </Form.Item>
                <span className="sex">性别：</span>
                <Form.Item
                  name="sex"
                  rules={[
                    {
                      required: true,
                      message: "性别不能为空",
                    },
                  ]}
                >
                  <Select showSearch placeholder="性别" className="sel_1">
                    <Option value={"男"}>男</Option>
                    <Option value={"女"}>女</Option>
                  </Select>
                </Form.Item>
              </div>
              <div className="Con_tel">
                <span>手机号码：</span>
                <Form.Item
                  name="CellPhoneNumber"
                  rules={[
                    {
                      required: true,
                      message: "手机号码不能为空",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </div>
              <div className="Con_qq">
                <span>QQ：</span>
                <Form.Item
                  name="QQ"
                  rules={[
                    {
                      required: true,
                      message: "QQ不能为空",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </div>
              <div className="Con_card">
                <span>身份证号码：</span>
                <Form.Item
                  name="IdentityCard"
                  rules={[
                    {
                      required: true,
                      message: "身份证号码不能为空",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </div>
            </div>
            <div>
              <div className="Con_sch">
                <span>学校省份：</span>
                <Form.Item
                  name="provinces"
                  rules={[
                    {
                      required: true,
                      message: "学校省份不能为空",
                    },
                  ]}
                >
                  <Select
                    showSearch
                    // defaultValue={this.provinceData[0]}
                    style={{ width: 200 }}
                  >
                    {this.provinceData.map((province) => (
                      <Option key={province}>{province}</Option>
                    ))}
                  </Select>
                </Form.Item>
                <span className="sch_name">大学名称：</span>
                <Form.Item
                  name="schoolname"
                  rules={[
                    {
                      required: true,
                      message: "学校名称不能为空",
                    },
                  ]}
                >
                  <Select
                    showSearch
                    style={{ width: 200 }}
                    value={this.state.secondCity}
                  >
                    {cities.map((city) => (
                      <Option key={city}>{city}</Option>
                    ))}
                  </Select>
                </Form.Item>
                <span className="sch_major">学院专业：</span>
                <Form.Item
                  name="specialty"
                  rules={[
                    {
                      required: true,
                      message: "学院专业不能为空",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </div>
              <div className="sch_state">
                <span>在校状态：</span>
                <Form.Item
                  name="status"
                  rules={[
                    {
                      required: true,
                      message: "在校状态不能为空",
                    },
                  ]}
                >
                  <Select
                    showSearch
                    placeholder="请选择状态"
                    style={{ width: 200 }}
                  >
                    <Option value={"非应届"}>非应届</Option>
                    <Option value={"在读"}>在读</Option>
                    <Option value={"大一"}>大一</Option>
                    <Option value={"大二"}>大二</Option>
                    <Option value={"大三"}>大三</Option>
                    <Option value={"大四"}>大四</Option>
                    <Option value={"应届"}>应届</Option>
                    <Option value={"在职"}>在职</Option>
                    <Option value={"待业"}>待业</Option>
                  </Select>
                </Form.Item>
                <span className="sch_edu">学历：</span>
                <Form.Item
                  name="education"
                  rules={[
                    {
                      required: true,
                      message: "学历不能为空",
                    },
                  ]}
                >
                  <Select
                    showSearch
                    placeholder="请选择学历"
                    style={{ width: 200 }}
                  >
                    <Option value={"高中"}>高中</Option>
                    <Option value={"高中以下"}>高中以下</Option>
                    <Option value={"博士"}>博士</Option>
                    <Option value={"硕士"}>硕士+</Option>
                    <Option value={"本科"}>本科</Option>
                    <Option value={"专科"}>专科</Option>
                  </Select>
                </Form.Item>
              </div>
              <div className="sch_2">
                <span>专业类型：</span>
                <Form.Item
                  name="major"
                  rules={[
                    {
                      required: true,
                      message: "专业类型不能为空",
                    },
                  ]}
                >
                  <Select
                    showSearch
                    placeholder="请选择专业"
                    style={{ width: 200 }}
                  >
                    <Option value={"非计算机专业"}>非计算机专业</Option>
                    <Option value={"计算机专业"}>计算机专业</Option>
                  </Select>
                </Form.Item>
                <span className="sch_exp">开发经验：</span>
                <Form.Item
                  name="experience"
                  rules={[
                    {
                      required: true,
                      message: "开发经验不能为空",
                    },
                  ]}
                >
                  <Select showSearch style={{ width: 200 }}>
                    <Option value={"无"}>无</Option>
                    <Option value={"有"}>有</Option>
                  </Select>
                </Form.Item>
                <span className="sch_com">使用电脑：</span>
                <Form.Item
                  name="computer"
                  rules={[
                    {
                      required: true,
                      message: "使用电脑不能为空",
                    },
                  ]}
                >
                  <Select showSearch style={{ width: 200 }}>
                    <Option value={"个人携带"}>个人携带</Option>
                    <Option value={"学校配发"}>学校配发</Option>
                  </Select>
                </Form.Item>
              </div>
              <div className="sch_city">
                <span>学员所在省份：</span>
                <Form.Item
                  name="StudentsProvinces"
                  rules={[
                    {
                      required: true,
                      message: "学员所在省份不能为空",
                    },
                  ]}
                >
                  <Select showSearch style={{ width: 200 }}>
                    {this.provinceData &&
                      this.provinceData.map((province) => (
                        <Option key={province}>{province}</Option>
                      ))}
                  </Select>
                </Form.Item>
                <span className="city">所在城市：</span>
                <Form.Item
                  name="city"
                  rules={[
                    {
                      required: true,
                      message: "所在城市不能为空",
                    },
                  ]}
                >
                  <Select showSearch style={{ width: 200 }}>
                    {cityState.city.map((cities) => (
                      <Option key={cities}>{cities}</Option>
                    ))}
                  </Select>
                </Form.Item>
              </div>
              <div className="sch_tac">
                <span>紧急联系人：</span>
                <Form.Item
                  name="contacts"
                  rules={[
                    {
                      required: true,
                      message: "紧急联系人不能为空",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <span className="rel">关系：</span>
                <Form.Item
                  name="relation"
                  rules={[
                    {
                      required: true,
                      message: "关系不能为空",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <span className="tel">联系电话：</span>
                <Form.Item
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: "联系电话不能为空",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </div>
              <div className="adress">
                <span>住宿详细地址：</span>
                <Form.Item
                  name="site"
                  rules={[
                    {
                      required: true,
                      message: "住宿详细地址不能为空",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </div>
            </div>
            <div className="Mod_bottom">
              <Button
                className="Mod_btn1"
                type="primary"
                icon={<CheckOutlined />}
                onClick={this.ButtonClick}
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
      </Form>
    );
  }

  componentDidMount() {
      const { username } = JSON.parse(localStorage.getItem("token"));
      axios.get(`http://localhost:3002/modification?username=${username}`).then(res => {
        let obj = res.data[0]
        if (res.data.length > 0) {
          this.refs.Form.setFieldsValue({
            username,
            sex: obj.sex,
            CellPhoneNumber: obj.CellPhoneNumber,
            QQ: obj.QQ,
            IdentityCard: obj.IdentityCard,
            provinces: obj.provinces,
            schoolname: obj.schoolname,
            specialty: obj.specialty,
            status: obj.status,
            education: obj.education,
            major: obj.major,
            experience: obj.experience,
            computer: obj.computer,
            StudentsProvinces: obj.StudentsProvinces,
            city: obj.city,
            contacts: obj.contacts,
            relation: obj.relation,
            phone: obj.phone,
            site: obj.site
          })
        } else {
          this.refs.Form.setFieldsValue({
            username
          })
        }
      })
  }


  ButtonClick = () => {
    const { username } = JSON.parse(localStorage.getItem("token"));

    this.refs.Form.validateFields() // 表单验证
      .then((values) => {
        console.log(values);
        axios.get(`http://localhost:3002/modification?username=${username}`).then(res => {
          if (res.data.length > 0 && values.username === res.data[0].username) {
            axios.put(`http://localhost:3002/modification/${res.data[0].id}`, {
              ...values
            })
          } else {
            axios.post("http://localhost:3002/modification", {
              ...values,
            })
          }
        })
        this.props.history.push("/student/data");
      });
  };

  SelectClick = (obj) => {
    console.log(obj);
  };
}
