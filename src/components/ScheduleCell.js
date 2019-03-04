import React from "react";

// day_info: {
//   day: day number,
//   date: previous_month_days - i,
//   isValid: boolean,
//   month: target_day.getMonth() + 1,
//   terms: default_terms
// }

const badge_area_style = {
  padding: "0.1rem 0.6rem",
  height: '2rem',

};

const badge_style = {
  padding: "0.1rem 0.4rem",
  fontSize: "0.5rem",
  backgroundColor: "#66b7ec",
  color: "#ffffff",
  borderRadius: "50%",
};


export default class ScheduleCell extends React.Component {
  constructor(props) {
    super(props);

    this.modal = props.modal;
  }

  render() {
    let modal = this.modal;

    let day_info = this.props.day_info;
    let terms    = day_info.terms;


    function ValidCell() {
      return <td className="uk-animation-toggle uk-padding-remove">
        <div
          className="uk-card uk-card-hover uk-card-body uk-animation-fade uk-border-rounded uk-padding-remove"
          onClick={e => modal.current.open_modal(day_info) }
        >

          <div className="uk-hidden@s">
            <h5 className="uk-text-center uk-margin-remove" style={{padding: "0 0"}}>{day_info.date}</h5>

            <div style={badge_area_style}>
              <span style={badge_style}>1</span>
            </div>

          </div>

          <div className="uk-visible@s uk-padding-small">
            <p className="uk-h4 uk-text-center uk-margin-remove">{day_info.date}</p>

            {
              terms.map(term =>
                <div
                  className="uk-tile uk-tile-muted uk-padding-remove uk-margin-small uk-border-pill"
                  key={term.name}
                >
                  <p className="uk-text-meta">{term.period}</p>
                </div>
              )
            }
          </div>

        </div>
      </td>
    }

    function InvalidCell() {
      return <td className="uk-padding-remove">
        <div
          className="uk-card uk-card-body uk-border-rounded uk-padding-remove"
        >

          <div className="uk-hidden@s">
            <h5 className="uk-text-center uk-margin-remove uk-text-muted" style={{padding: "0 0"}}>{day_info.date}</h5>
          </div>

          <div className="uk-visible@s uk-padding-small">
            <p className="uk-h4 uk-text-center uk-margin-remove uk-text-muted">{day_info.date}</p>
          </div>

        </div>
      </td>
    }

    if (this.props.day_info.isValid) return <ValidCell />;
    else return <InvalidCell />;

  }

}

