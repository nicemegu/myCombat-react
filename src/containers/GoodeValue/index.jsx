import React, { Component } from "react";
//引入swiper
import './css/index.less'
import Swiper from './Swiper/index'
export default class Sort extends Component {
  render() {
    return (
      <div className="goodvalue">
        <div className="goodvalueheader">
          <span className="home">主页</span>
          <span className="title">值得买</span>
          <div>
            <span>搜索</span>
            <span>购物车</span>
          </div>
        </div>
        <div className="content">
          <div className="content_top">
            <div className="content_top_title">
              <img src="./imgs/titile.png" alt="" />
              <span>严选好物 用心生活</span>
            </div>
            {/* 圆形轮播 */}
            <Swiper />
          </div>
        </div>
      </div>
    );
  }
}
