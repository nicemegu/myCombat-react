import React, { Component } from "react";
//引入样式
import "./css/index.less";
export default class Sort extends Component {
  render() {
    return (
      <div className="persionalout">
        <div className="title">
          <span>
            <van-icon name="wap-home-o" size="28" />
          </span>
          <img
            src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png"
            alt=""
          />
          <div className="title_right">
            <span>
              <van-icon name="search" size="28" />
            </span>
            <span>
              <van-icon name="shopping-cart-o" size="28" />
            </span>
          </div>
        </div>
        <div className="personalcontent">
          <img src="./imgs/login.png" alt="" />
          <div className="logintype">
            <div className="phone type">
              <span className="phonelogo"></span>
              <span>手机号快捷登录</span>
            </div>
            <div className="mail type">
              <span className="maillogo"></span>
              <span>邮箱账号登录</span>
            </div>
          </div>
          <ul className="list">
            <li>
              <span className="weixin"></span>
              <span>微信</span>
            </li>
            <li className="qqtype">
              <span className="qq"></span>
              <span>QQ</span>
            </li>
            <li>
              <span className="weibo"></span>
              <span>微博</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
