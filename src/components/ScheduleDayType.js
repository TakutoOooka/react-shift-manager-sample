import React from "react";

export default class ScheduleDayType extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <tr>
      <th className="uk-text-center uk-text-danger">日</th>
      <th className="uk-text-center uk-text-emphasis">月</th>
      <th className="uk-text-center uk-text-emphasis">火</th>
      <th className="uk-text-center uk-text-emphasis">水</th>
      <th className="uk-text-center uk-text-emphasis">木</th>
      <th className="uk-text-center uk-text-emphasis">金</th>
      <th className="uk-text-center uk-text-primary">土</th>
    </tr>
    );
  }
}
