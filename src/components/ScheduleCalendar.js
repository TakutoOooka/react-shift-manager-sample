import React from "react";
import UIkit from 'uikit';

import ScheduleModal from "../components/ScheduleModal";
import ScheduleNavBar from "../components/ScheduleNavBar";

import ScheduleCell from "../components/ScheduleCell";
import ScheduleDayType from "../components/ScheduleDayType";

const default_terms = [
  {name: "1", period: "13:00 ~ 15:00", color: "#b55"},
  {name: "2", period: "15:00 ~ 17:00", color: "#b55"},
  {name: "A", period: "17:00 ~ 19:00", color: "#b55"},
  {name: "B", period: "19:00 ~ 21:00", color: "#b55"},
];


export default class ScheduleCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.modal_ref    = React.createRef();
    this.calendar_ref = React.createRef();


    this.previousAction = this.previousAction.bind(this);
    this.nextAction = this.nextAction.bind(this);
    this.make_calendar_arr = this.make_calendar_arr.bind(this);

    this.state = {
      target_day: props.target_day,
      calendar_arr: this.make_calendar_arr(props.target_day),
      is_loading: true,
    };

    // デバッグ用
    setTimeout(e => {
      this.setState({is_loading: false})
    }, 1000)

  }

  componentDidMount() {
  }

  make_calendar_arr(target_day) {
    let previous_arr = this.constructor.previous_month_day_arr(target_day);
    let now_arr      = this.constructor.now_month_day_arr(target_day);
    let next_arr     = this.constructor.next_month_day_arr(7*6 - previous_arr.length - now_arr.length);

    // カレンダーに表示する日付の配列
    let calendar_day_arr = previous_arr.concat(now_arr).concat(next_arr);

    // 1 direct array => 5 * 7 array
    let calendar_arr = Array(6).fill(1).map((elem, row, arr) => {
      return Array(7).fill(1).map((val, week_col, arr) => {
        return Object.assign(
          calendar_day_arr[row * 7 + week_col],
          {
            day: week_col,
            month: target_day.getMonth() + 1,
            terms: default_terms
          }
        )
      })
    });

    return calendar_arr;
  }

  static previous_month_day_arr(target_day) {
    let now = new Date(target_day.getTime());
    // x 月 1 日 の曜日を取得
    now.setDate(1);
    let day = now.getDay();
    // 先月の日数を取得
    now.setDate(0);
    let previous_month_days = now.getDate();

   return [...Array(day).keys()].reverse().map(i => {
     return {
       date: previous_month_days - i,
       isValid: false
     }
   })
  }

  static now_month_day_arr(target_day) {
    let now_month_days = this.get_days(target_day);

    return [...Array(now_month_days).keys()].map(i => {
      return {
        date: i + 1,
        isValid: true,
      }
    })
  }

  static next_month_day_arr(len) {
    return [...Array(len).keys()].map(i => {
      return {
        date: i + 1,
        isValid: false,
      }
    })
  }

  static get_days(_date) {
    let date = new Date(_date.getTime());
    date.setDate(1);
    date.setMonth(date.getMonth() + 1);
    date.setDate(0);

    return date.getDate();
  }

  previousAction() {
    let calendar_dom = this.calendar_ref.current;

    UIkit.toggle(calendar_dom,
      {
        animation: 'uk-animation-slide-right-small',
        mode: 'media',
      }).toggle();

    setTimeout(
      () => {
        this.setState((previousState, currentProps) => {
          let resultDate = new Date(previousState.target_day.getTime());
          resultDate.setMonth(resultDate.getMonth() - 1);

          return {
            target_day: resultDate,
            calendar_arr: this.make_calendar_arr(resultDate),
            is_loading: true,
          }
        });

        UIkit.toggle(calendar_dom,
          {
            animation: 'uk-animation-slide-left-small',
            mode: 'media',
          }).toggle()
      }
      , 300);

    // for debug
    setTimeout(e => {
      this.setState(
      {is_loading: false}
      )
    }, 1000)

  }

  nextAction() {
    let calendar_dom = this.calendar_ref.current;

    UIkit.toggle(calendar_dom,
      {
        animation: 'uk-animation-slide-left-small',
        mode: 'media',
      }).toggle();

    setTimeout(
    () => {
      this.setState((previousState, currentProps) => {
        let resultDate = new Date(previousState.target_day.getTime());
        resultDate.setMonth(resultDate.getMonth() + 1);

        return {
          target_day: resultDate,
          calendar_arr: this.make_calendar_arr(resultDate),
          is_loading: true,
        }
      });

      UIkit.toggle(calendar_dom,
        {
          animation: 'uk-animation-slide-right-small',
          mode: 'media',
        }).toggle()
    },300);



    // for debug
    setTimeout(e => {
      this.setState({is_loading: false})
    }, 1000)

  }

  render() {
    return (
      <div>

        <ScheduleModal ref={this.modal_ref} />

        <div ref={this.calendar_ref}>

          <ScheduleNavBar target_day={this.state.target_day}
                          previousAction={this.previousAction} nextAction={this.nextAction}
                          is_loading={this.state.is_loading} />

          <table className="uk-table uk-margin-remove">
            <thead>
              <ScheduleDayType />
            </thead>
            <tbody className="uk-text-center">
            {
              this.state.calendar_arr.map((val, idx) =>
              <tr key={idx}>
              {
                val.map((day_info, idx) =>
                  <ScheduleCell day_info={day_info} modal={this.modal_ref} key={100 + idx} />
              )}
              </tr>
            )}
            </tbody>
          </table>

        </div>

      </div>
    );
  }
}
