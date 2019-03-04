import React from "react";
import UIkit from "uikit";
import Icons from 'uikit/dist/js/uikit-icons';

import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import UserSchedule from "./UserSchedule";
import StaffSchedule from "./StaffSchedule";

UIkit.use(Icons);

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={StaffSchedule} />
          <Route path='/home' component={UserSchedule} />
        </Switch>
      </BrowserRouter>
    )
  }
}

