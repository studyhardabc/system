import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from '../../Home'
import Complaint from '../../Complaint'
import Problem from '../../Problem'
import Itemupload from '../../Itemupload'
import Stuvip from '../../Stuvip'
import Weekly from '../../Weekly'
import Data from '../../Data'
import MoneyDetail from '../../MoneyDetail'
import Examination from '../../Examination'
import Evaluate from '../../Evaluate'
import Inquiry from '../../Inquiry'
import Leave from '../../Leave'
import Discipline from '../../Discipline'
import Roles from '../../Roles'
import Rights from '../../Rights'
import ExaminationPaper from '../../ExaminationPaper'
import Grade from '../../Grade'
import NotFound from "../../NotFound";

import { Layout } from "antd";
const { Content } = Layout;

export default class Contentmenu extends Component {
  render() {
    return (
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        <Switch>
        <Route path="/home" component={Home}></Route>
        <Route path="/complaint" component={Complaint}></Route>
        <Route path="/problem" component={Problem}></Route>
        <Route path="/itemupload" component={Itemupload}></Route>
        <Route path="/stuvip" component={Stuvip}></Route>
        <Route path="/weekly" component={Weekly}></Route>
        <Route path="/data" component={Data}></Route>
        <Route path="/moneyDetail" component={MoneyDetail}></Route>
        <Route path="/examination" component={Examination}></Route>
        <Route path="/evaluate" component={Evaluate}></Route>
        <Route path="/inquiry" component={Inquiry}></Route>
        <Route path="/leave" component={Leave}></Route>
        <Route path="/discipline" component={Discipline}></Route>
        <Route path="/roles" component={Roles}></Route>
        <Route path="/rights" component={Rights}></Route>
        <Route path="/examinationPaper" component={ExaminationPaper}></Route>
        <Route path="/grade" component={Grade}></Route>

        <Redirect from="/" to="/home" exact />
        <Route path="*" component={NotFound} />
        </Switch>
      </Content>
    );
  }
}
