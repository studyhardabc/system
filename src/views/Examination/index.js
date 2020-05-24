import React, { Component } from "react";
import axios from "axios";
import "./index.css";

export default class Examination extends Component {
  state = {
    data: [],
    dataList: [],
    num: 0
  };

  render() {
    return (
      <div>
                
        <div className="exa_head">
                    <strong>查看试卷</strong>
                  
        </div>
                
        <div className="exa_title">
                    <h3>逆战1904二阶段第八周月考 </h3>
                    <p>HTML5</p>
                  
        </div>
                
        <div className="exa_time">
                    
          <p className="time">
                        答题时限：120分钟&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;满分：100分&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;合格分数：60分数
                      
          </p>
                    <p>一、单选题（共20题，每题2分）</p>
          {Object.keys(this.state.data).length > 0
            ? this.state.data.examinationsin.map((item) => {
                let arr = Object.values(item.content);
                // console.log(arr);
                return (
                  <div className="exa_box" key={item.id}>
                                <span>{item.id}.</span>
                                <span>{item.title}</span>
                                
                    <div className="exa_radio">
                      {arr.map((arrItem) => {
                        return (
                          <span key={arrItem.list[0]}>
                            <input type="radio" name={item.id} value={arrItem.list[0]} ref="input" onClick={(e) => {
                              this.fn1(e, item.id)
                            }} />
                                          {arrItem.list[0]}&nbsp;&nbsp;{arrItem.list[1]};
                                          
                            <br />
                          </span>
                        );
                      })}
                    </div>
                              
                  </div>
                );
              })
            : null}
                    
          <p className="exa_much">
            二、多选题（不定项选择）（共10题，每题2分）
          </p>
          {Object.keys(this.state.data).length > 0
            ? this.state.data.examinationmul.map((item) => {
                let arr2 = Object.values(item.content);
                return (
                  <div className="exa_box1" key={item.id}>
                                <span>{item.id}.</span>
                                <span>{item.title}</span>
                                
                    <div className="exa_checkout">
                      {arr2.map((arr2Item) => {
                        return (
                          <span key={arr2Item.list[0]}>
                            <input type="checkbox" />
                                          {arr2Item.list[0]}
                            &nbsp;&nbsp;{arr2Item.list[1]};               
                            <br />
                          </span>
                        );
                      })}
                    </div>
                  </div>
                );
              })
            : null}
                         <p className="exa_bla">三、填空题（共5题，每题2分）</p>
          {Object.keys(this.state.data).length > 0
            ? this.state.data.examinationbla.map((item) => {
                return (
                  <div className="exa_box2" key={item.id}>
                                <span>{item.id}.</span>
                                <span>{item.title}</span>
                    <input type="text" />
                  </div>
                );
              })
            : null}
        </div>
      </div>
    );
  }

  componentDidMount() {
    axios.get("http://localhost:3002/examination").then((res) => {
      console.log(res.data[0]);

      this.setState({
        data: res.data[0],
      });
    });
  }

  fn1 = (e, id) => {
    // console.log(e.target.value);
  //     if (id && this.state.dataList[id-1] !== e.target.valu) {
  //       this.state.dataList[id-1] = e.target.value
  //       console.log(this.state.dataList);
  //       return
  //     }
  //   this.state.dataList.splice(id-1, 0,e.target.value)
  //   console.log(this.state.dataList);
  // }

    axios.get(`http://localhost:3002/examination/${id}`).then(res => {
      let data = res.data[0]
      if (data.rightkey === e.target.value) {
        this.setState({
          num: this.state.num+=data.fraction
        })
      }
    })
  }
}
