import React from "react";

import UIkit from "uikit";

const day_types= ['日', '月', '火', '水', '木', '金', '土'];

const text_colors = [
  "uk-text-danger",
  "uk-text-emphasis",
  "uk-text-emphasis",
  "uk-text-emphasis",
  "uk-text-emphasis",
  "uk-text-emphasis",
  "uk-text-primary"
];

// let

export default class ScheduleModal extends React.Component {
  constructor(props) {
    super(props);
    this.modal_ref = React.createRef();

    this.state = {
      month: 0,
      date: 0,
      day: 0,
    };

    this.open_modal = this.open_modal.bind(this);
  }

  componentDidMount() {
  }

  open_modal(day_info) {
    this.setState(
      {
        month: day_info.month,
        date: day_info.date,
        day: day_info.day,
      }
    );

    UIkit.modal(this.modal_ref).show();
  }

  render() {
    return (
    <div>
      <div className="uk-modal" ref={ e => { this.modal_ref = e } }>
        <div className="uk-modal-dialog uk-modal-body">

          <div className="uk-modal-header">
            <h2 className="uk-modal-title">
              {this.state.month} / {this.state.date}
              （<span className={text_colors[this.state.day]}>{day_types[this.state.day]}</span>）
            </h2>
          </div>

          <div className="uk-modal-body uk-overflow-auto" style={{height: '60vh'}}>

            <div className="uk-visible@s">
              <h3 className="uk-text-primary">Term A(17:00 ~ 19:00)</h3>

              <p>
                <span className="uk-text-lead">
                  <a className="uk-link-heading" href="">大岡 拓斗</a>
                </span>

                <span className="uk-padding-small uk-padding-remove-right">
                  <a className="uk-link-heading" href="">山田拓尾</a>
                </span>
                <span className="uk-padding-small uk-padding-remove-right">
                  <a className="uk-link-heading" href="">山本タクオ</a>
                </span>
              </p>
              <p>
                <span className="uk-text-lead">
                  <a className="uk-link-heading" href="">山本 拓磨</a>
                </span>

                <span className="uk-padding-small uk-padding-remove-right">
                  <a className="uk-link-heading" href="">山田拓尾</a>
                </span>
                <span className="uk-padding-small uk-padding-remove-right">
                  <a className="uk-link-heading" href="">山本タクオ</a>
                </span>
              </p>

              <h3 className="uk-text-primary">Term B(19:00 ~ 21:00)</h3>
              <p>
                <span className="uk-text-lead">
                  <a className="uk-link-heading" href="">山本 拓磨</a>
                </span>

                <span className="uk-padding-small uk-padding-remove-right">
                  <a className="uk-link-heading" href="">山田拓尾</a>
                </span>
                <span className="uk-padding-small uk-padding-remove-right">
                  <a className="uk-link-heading" href="">山本タクオ</a>
                </span>
              </p>
              <p>
                <span className="uk-text-lead">
                  <a className="uk-link-heading" href="">山本 拓磨</a>
                </span>

                <span className="uk-padding-small uk-padding-remove-right">
                  <a className="uk-link-heading" href="">山田拓尾</a>
                </span>
                <span className="uk-padding-small uk-padding-remove-right">
                  <a className="uk-link-heading" href="">山本タクオ</a>
                </span>
              </p>
            </div>

            <div className="uk-hidden@s">
              <h3><a className="uk-link-heading" href="">大岡 拓斗</a></h3>
              <p>
                <span className="uk-text-success">17:00 ~ 19:00</span>
                <span className="uk-padding-small uk-padding-remove-right">山田拓尾</span>
                <span className="uk-padding-small uk-padding-remove-right">山本タクオ</span>
              </p>
              <p>
                <span className="uk-text-success">17:00 ~ 19:00</span>
                <span className="uk-padding-small uk-padding-remove-right">山田拓尾</span>
                <span className="uk-padding-small uk-padding-remove-right">山本タクオ</span>
              </p>

              <h3><a className="uk-link-heading" href="">山本 拓磨</a></h3>
              <p>
                <span className="uk-text-success">19:00 ~ 21:00</span>
                <span className="uk-padding-small uk-padding-remove-right">山田拓尾</span>
                <span className="uk-padding-small uk-padding-remove-right">山本タクオ</span>
              </p>
              <p>
                <span className="uk-text-success">17:00 ~ 19:00</span>
                <span className="uk-padding-small uk-padding-remove-right">山田拓尾</span>
                <span className="uk-padding-small uk-padding-remove-right">山本タクオ</span>
              </p>
            </div>


          </div>



        </div>
      </div>
    </div>
    )
  }
}

