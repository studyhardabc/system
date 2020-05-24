import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from '../../Home'
import UserName from '../../UserName'
import Complaint from '../../Complaint'
import Problem from '../../Problem'
import Itemupload from '../../Itemupload'
import Stuvip from '../../Stuvip'
import Weekly from '../../Weekly'
import Data from '../../Data'
import Modification from '../../Modification'
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
          minHeight: 'auto',
        }}
      >
        <Switch>
        <Route path="/home" component={Home}></Route>
        <Route path="/user/usersList" component={UserName}></Route>
        <Route path="/student/complaint" component={Complaint}></Route>
        <Route path="/student/problem" component={Problem}></Route>
        <Route path="/student/itemupload" component={Itemupload}></Route>
        <Route path="/student/stuvip" component={Stuvip}></Route>
        <Route path="/student/weekly" component={Weekly}></Route>
        <Route path="/student/data" component={Data}></Route>
        <Route path="/student/modification/:id" component={Modification}></Route>
        <Route path="/student/moneyDetail" component={MoneyDetail}></Route>
        <Route path="/student/examination" component={Examination}></Route>
        <Route path="/student/evaluate" component={Evaluate}></Route>
        <Route path="/student/inquiry" component={Inquiry}></Route>
        <Route path="/check/leave" component={Leave}></Route>
        <Route path="/check/discipline" component={Discipline}></Route>
        <Route path="/manage/roles" component={Roles}></Route>
        <Route path="/manage/rights" component={Rights}></Route>
        <Route path="/system/examinationPaper" component={ExaminationPaper}></Route>
        <Route path="/system/grade" component={Grade}></Route>

        <Redirect from="/" to="/home" exact />
        <Route path="*" component={NotFound} />
        </Switch>
      </Content>
    );
  }
}
