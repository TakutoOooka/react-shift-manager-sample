import React from "react";

export default class ScheduleNavBar extends React.Component {
  constructor(props) {
    super(props);

    this.previousAction = props.previousAction;
    this.nextAction     = props.nextAction;
  }

  render () {
    let target_day = this.props.target_day;
    let is_loading = this.props.is_loading;

    let year = target_day.getFullYear();
    let month = target_day.getMonth() + 1;

    return (
    <nav className="uk-navbar uk-navbar-container" style={{backgroundColor: "#fff"}}>

      <div className="uk-hidden@s" style={{height: 50}}>
      </div>

      <div className="uk-navbar-left">
        <ul className="uk-navbar-nav uk-hidden@s">
          <li>
            <button uk-icon="icon: chevron-left; ratio: 1.6"
            onClick={e => this.previousAction()}></button>
          </li>
        </ul>

        <ul className="uk-navbar-nav uk-visible@s">
          <li>
            <button uk-icon="icon: chevron-left; ratio: 2"
                    onClick={e => this.previousAction()}></button>
          </li>
        </ul>
      </div>

      <div className="uk-navbar-center" style={{zIndex: 1}}>

        <ul className="uk-iconnav uk-hidden@s">
          <li><span className='uk-text-emphasis'>{year}年 {month}月</span></li>
        </ul>

        <ul className="uk-navbar-nav uk-visible@s">
          <li><span className="uk-text-lead uk-text-justify">{year}年 {month}月</span></li>
        </ul>

      </div>

      <div className="uk-navbar-right">
        <ul className="uk-navbar-nav uk-hidden@s">
          <li>
            { is_loading && <div uk-spinner="ratio: 0.6"></div> }

            <button uk-icon="icon: chevron-right; ratio: 1.6"
            onClick={e => this.nextAction()}></button>
          </li>
        </ul>

        <ul className="uk-navbar-nav uk-visible@s">
          <li>
            { is_loading && <div uk-spinner="ratio: 1.2"></div> }

            <button uk-icon="icon: chevron-right; ratio: 2"
                    onClick={e => this.nextAction()}></button>
          </li>
        </ul>

      </div>

    </nav>
    )
  }
}
