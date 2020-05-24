import React, { Component } from "react";
import axios from "axios";
import "./index.css";

export default class Examination extends Component {
  state = {
    data: [],
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
                return (
                  <div className="exa_box" key={item.id}>
                                <span>{item.id}.</span>
                                <span>产生当前日期的方法是</span>
                                
                    <div className="exa_radio">
                                    
                      <input type="radio" name="1" />
                                    A&nbsp;&nbsp;Now();               
                      <br />
                                    
                      <input type="radio" name="1" />
                                    B&nbsp;&nbsp;new Data();               
                      <br />
                                    
                      <input type="radio" name="1" />
                                    C&nbsp;&nbsp;new Date();               
                      <br />
                                    
                      <input type="radio" name="1" />
                                    D&nbsp;&nbsp;new Now();               
                      <br />
                                  
                    </div>
                              
                  </div>
                );
              })
            : null}
                    
          <p className="exa_much">
            二、多选题（不定项选择）（共10题，每题2分）
          </p>
                    
          <div className="exa_box1">
                        <span>1.</span>
                        <span>下面哪些属于数组的方法</span>
                        
            <div className="exa_checkout">
                            
              <input type="checkbox" />
                            A&nbsp;&nbsp;var obj=();               
              <br />
                            
              <input type="checkbox" />
                            B&nbsp;&nbsp;var obj=[];               
              <br />
                            
              <input type="checkbox" />
                            C&nbsp;&nbsp;var obj={};<br />
                            
              <input type="checkbox" />
                            D&nbsp;&nbsp;var obj="";               
              <br />
                          
            </div>
                      
          </div>
                    <p className="exa_bla">三、填空题（共5题，每题2分）</p>
                    
          <div className="exa_box2">
                        <span>1.</span>
                        <span>已知id为box，使用jquery如何获取到该元素</span>
                        
            <input />
                      
          </div>
                  
        </div>
              
      </div>
    );
  }

  componentDidMount() {
    axios.get("http://localhost:3002/examination").then((res) => {
      this.setState({
        data: res.data[0],
      });
    });
  }
}
