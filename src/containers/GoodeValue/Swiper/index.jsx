import React, { Component } from "react";
//引入此路径，才不会打包失败
import Swiper from "swiper/js/swiper.js";
//引入样式，还可以加上自己的样式

import "./css/index.less";
import "./css/swiper.min.css";
export default class index extends Component {
  componentDidMount() {
    new Swiper(".swiper-container", {
      direction: "horizontal",//设置为横向
      slidesPerView: 4,
      slidesPerGroup: 1, //每次滑动的距离
      slidesPerColumn: 2, //显示2行
      observeParents: true, //在加载时初始化 父级元素，解决渲染完成后轮播图展示右边的问题
      observer: true,
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: true
      }
    });
  }

  render() {
    return (
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img src="../imgs/1.png" alt="" />
            <span className="list_text1">好物推荐</span>
            <span className="list_text2">一点点</span>
          </div>
          <div className="swiper-slide">
            <img src="../imgs/1.png" alt="" />
            <span className="list_text1">好物推荐</span>
            <span className="list_text2">一点点</span>
          </div>
          <div className="swiper-slide">
            <img src="../imgs/1.png" alt="" />
            <span className="list_text1">好物推荐</span>
            <span className="list_text2">一点点</span>
          </div>
          <div className="swiper-slide">
            <img src="../imgs/1.png" alt="" />
            <span className="list_text1">好物推荐</span>
            <span className="list_text2">一点点</span>
          </div>
          <div className="swiper-slide">
            <img src="../imgs/1.png" alt="" />
            <span className="list_text1">好物推荐</span>
            <span className="list_text2">一点点</span>
          </div>
          <div className="swiper-slide">
            <img src="../imgs/1.png" alt="" />
            <span className="list_text1">好物推荐</span>
            <span className="list_text2">一点点</span>
          </div>
          <div className="swiper-slide">
            <img src="../imgs/1.png" alt="" />
            <span className="list_text1">好物推荐</span>
            <span className="list_text2">一点点</span>
          </div>
          <div className="swiper-slide">
            <img src="../imgs/1.png" alt="" />
            <span className="list_text1">好物推荐</span>
            <span className="list_text2">一点点</span>
          </div>
          <div className="swiper-slide">
            <img src="../imgs/1.png" alt="" />
            <span className="list_text1">好物推荐</span>
            <span className="list_text2">一点点</span>
          </div>
          <div className="swiper-slide">
            <img src="../imgs/1.png" alt="" />
            <span className="list_text1">好物推荐</span>
            <span className="list_text2">一点点</span>
          </div>
          <div className="swiper-slide">
            <img src="../imgs/1.png" alt="" />
            <span className="list_text1">好物推荐</span>
            <span className="list_text2">一点点</span>
          </div>
          <div className="swiper-slide">
            <img src="../imgs/1.png" alt="" />
            <span className="list_text1">好物推荐</span>
            <span className="list_text2">一点点</span>
          </div>
          <div className="swiper-slide">
            <img src="../imgs/1.png" alt="" />
            <span className="list_text1">好物推荐</span>
            <span className="list_text2">一点点</span>
          </div>
          <div className="swiper-slide">
            <img src="../imgs/1.png" alt="" />
            <span className="list_text1">好物推荐</span>
            <span className="list_text2">一点点</span>
          </div>
          <div className="swiper-slide">
            <img src="../imgs/1.png" alt="" />
            <span className="list_text1">好物推荐</span>
            <span className="list_text2">一点点</span>
          </div>
          <div className="swiper-slide">
            <img src="../imgs/1.png" alt="" />
            <span className="list_text1">好物推荐</span>
            <span className="list_text2">一点点</span>
          </div>
        </div>
        {/* <!-- Add Scrollbar --> */}
        <div className="swiper-scrollbar"></div>
      </div>
    );
  }
}
