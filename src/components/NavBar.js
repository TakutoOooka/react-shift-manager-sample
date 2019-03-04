import React from "react";
import UIkit from "uikit";

import Favicon from "../images/icon.png"

import { Link } from 'react-router-dom'

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.navbarRef = React.createRef();
  }

  componentDidMount() {
    UIkit.nav(this.navbarRef);
  }

  render () {
    return (
      <div ref={e => this.navbarRef = e}
        uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky;">
        <nav className="uk-navbar-container" uk-navbar="dropbar: true;" style={{position: "relative", zIndex: 10,
          backgroundColor: "#fff", borderBottom: "inset 1px #ddd", height: 50}} >

          <div className="uk-navbar-left">

            <ul className="uk-iconnav uk-hidden@s">
              <li>
                <a style={{marginRight: 10, minHeight: 0}} href="#offcanvas-usage" uk-icon="icon: menu; ratio: 1.3"
                   uk-toggle="target: #offcanvas-nav"></a>
              </li>
            </ul>

            <div id="offcanvas-nav" uk-offcanvas="overlay: true">
              <div className="uk-offcanvas-bar">

                <ul className="uk-nav uk-nav-default">
                  <li className="uk-nav-header">Menu</li>
                  <li><Link to="/"><span className="uk-margin-small-right" uk-icon="icon: home"></span>Home</Link></li>
                  <li><Link to="/"><span className="uk-margin-small-right" uk-icon="icon: calendar"></span>シフト表</Link></li>
                  <li><Link to="/"><span className="uk-margin-small-right" uk-icon="icon: file-edit"></span>シフト記入</Link></li>
                </ul>

              </div>
            </div>

            <ul className="uk-navbar-nav uk-visible@s">
              <li>
                <a style={{minHeight: 0}} href="#"><img src={Favicon} width={25}/></a>
              </li>
            </ul>

          </div>

          <div className="uk-navbar-center">

            <ul className="uk-hidden@s uk-navbar-nav">
              <li>
                <a style={{minHeight: 0}} href="#"><img src={Favicon} width={25}/></a>
              </li>
            </ul>

            <ul className="uk-navbar-nav uk-visible@s">
              <li>
                <Link className='uk-text-emphasis' style={{minHeight: 0}} to='/'>
                  <span style={{paddingRight: 4}} uk-icon="icon: home; ratio: 1"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link className='uk-text-emphasis' style={{minHeight: 0}} to=''>
                  <span style={{paddingRight: 4}} uk-icon="icon: calendar; ratio: 1"></span>
                  シフト表
                </Link>
              </li>
              <li>
                <Link className='uk-text-emphasis' style={{minHeight: 0}} to=''>
                  <span style={{paddingRight: 4}} uk-icon="icon: file-edit; ratio: 1"></span>
                  シフト記入
                </Link>
              </li>
            </ul>
          </div>

          <div className="uk-navbar-right">
            <ul className="uk-visible@s uk-navbar-nav">
              <li>
                <a className='uk-button' style={{marginRight: 10, minHeight: 0, border: 'solid 1px #aaa', borderRadius: 3}} href="#">
                  シフト送信
                  <span uk-icon="icon: push; ratio: 1" style={{paddingLeft: 5}}></span>
                </a>
              </li>
            </ul>

            <ul className="uk-iconnav uk-hidden@s">
              <li><a style={{marginRight: 10, minHeight: 0}} href="#" uk-icon="icon: push; ratio: 1.3"></a></li>
            </ul>
          </div>

        </nav>
      </div>
    )
  }
}
