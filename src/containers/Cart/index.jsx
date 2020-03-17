import React, { Component } from "react";
//引入样式
import './css/index.less'
export default class Sort extends Component {
  render() {
    return (
      <div className="cartout">
        <div className="head">
          <span className="home">购物车</span>
          <span className="quan">领券</span>
        </div>
        <div className="extends">
          <ul className="list">
            <li>
              <span className="circle"></span>
              <span>30天无忧退货</span>
            </li>
            <li>
              <span className="circle"></span>
              <span>48小时快速退款</span>
            </li>
            <li>
              <span className="circle"></span>
              <span>满88元免费包邮</span>
            </li>
          </ul>
        </div>
        <div className="login">
          <img src="./imgs/cart.png" alt="" />
          <span>去添加点什么吧</span>
          <div className="btn">登录</div>
        </div>
      </div>
    );
  }
}
