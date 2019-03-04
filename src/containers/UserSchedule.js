import React from "react";
import ReactDOM from "react-dom";
import UIkit from "uikit";
import ScheduleModal from "../components/ScheduleModal";


const content_styles = {
  small: 1,
  large: 2
}

let terms = [
  {name: "1", period: "13:00 ~ 15:00", color: "#b55"},
  {name: "2", period: "15:00 ~ 17:00", color: "#b55"},
  {name: "A", period: "17:00 ~ 19:00", color: "#b55"},
  {name: "B", period: "19:00 ~ 21:00", color: "#b55"},
]

const badge_area_style = {
  padding: "0.1rem 0.6rem",
};

const badge_style = {
  padding: "0.1rem 0.4rem",
  fontSize: "0.5rem", 
  backgroundColor: "#66b7ec",
  color: "#ffffff",
  borderRadius: "50%",
}

let td_frame = (num, style) => {
  if (style == content_styles.small) {
    return (
      <div>
        <h5 className="uk-text-center uk-margin-remove" style={{padding: "0 0"}}>{num}</h5>
        <div style={badge_area_style}>
          <span style={badge_style}>
            1
          </span>
        </div>
      </div>
    );
  }
  else if (style == content_styles.large) {
    return (
    <div>
        <p className="uk-h4 uk-text-center uk-margin-remove">{num}</p>

        {
          terms.map(term =>
          <div 
            className="uk-tile uk-tile-muted uk-padding-remove uk-margin-small uk-border-pill"
            style={{marginLeft: 2, marginRight: 2}}
            key={term.name}
          >
              <p className="uk-text-meta">{term.period}</p>
          </div>
          )
        }
    </div>
    );
  }
}

let modal_elems = Array(5).fill(Array(7));

let table_frame = style => {
  return (
  <table className="uk-table">
    <thead>
      <tr>
        <th className="uk-text-center uk-text-danger">日</th>
        <th className="uk-text-center">月</th>
        <th className="uk-text-center">火</th>
        <th className="uk-text-center">水</th>
        <th className="uk-text-center">木</th>
        <th className="uk-text-center">金</th>
        <th className="uk-text-center uk-text-primary">土</th>
      </tr>
    </thead>
    <tbody className="uk-text-center">
    {
      [...Array(5).keys()].map(i =>
        <tr key={i+1}>
        {
          [...Array(7).keys()].map(j => 
            <td className="uk-animation-toggle uk-padding-remove" key={100*j+1}>
              <ScheduleModal ref={e => modal_elems[i][j] = e} />
              <div 
                className="uk-card uk-card-hover uk-card-body uk-animation-fade uk-border-rounded uk-padding-remove" 
                onClick={e => modal_elems[i][j].open_modal() }
              >
                {td_frame(j + 1, style)}
              </div>
            </td>
          )
        }
        </tr>
      )
    }
    </tbody>
  </table>
  );
}


export default class UserSchedule extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
    <div>
      <div className="uk-visible@s uk-padding-small">
        {table_frame(content_styles.large)}
      </div>
      <div className="uk-hidden@s">
        {table_frame(content_styles.small)}
      </div>
    </div>
    )
  }
}

