import React from "react";

import ScheduleCalendar from "../components/ScheduleCalendar";

import NavBar from "../components/NavBar";


let terms = [
  {name: "1", period: "13:00 ~ 15:00", color: "#b55"},
  {name: "2", period: "15:00 ~ 17:00", color: "#b55"},
  {name: "A", period: "17:00 ~ 19:00", color: "#b55"},
  {name: "B", period: "19:00 ~ 21:00", color: "#b55"},
];

export default class StaffSchedule extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      target_day: new Date()
    };
  }
  
  componentDidMount() {
  }

  render () {
    return (
    <div>

      <NavBar/>

      <div className="uk-visible@s uk-padding-small">
        <ScheduleCalendar target_day={this.state.target_day}/>
      </div>

      <div className="uk-hidden@s">
        <ScheduleCalendar target_day={this.state.target_day}/>
      </div>

    </div>
    )
  }
}

