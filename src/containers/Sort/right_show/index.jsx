import React, { Component } from "react";
import { withRouter } from "react-router-dom";
//引入接口
import { reqRightNav } from "../../../api/index";
import PubSub from "pubsub-js";
//引入样式
import "./css/index.less";

class RightShow extends Component {
  //定义一个状态用来存储id
  state = {
    //默认为11
    rightnav: []
  };
  componentDidMount() {
    //调用接口 ，发送请求 得到数据
    const req = reqRightNav();
    console.log(req);
    this.pub = PubSub.subscribe("carygoryid", (msg, data) => {
      if(data.categoryList){
        this.setState({
        rightnav: data.categoryList
      });
      }else if(data.subCateList){
        this.setState({
          rightnav:data.subCateList
        })
      }
      
    });
  }
  //组件将要结束
  componentWillUnmount() {
    //取消订阅
    //PubSub.unsubscribe(this.pub);
  }
  render() {
    const { rightnav } = this.state;
    console.log(rightnav instanceof Array);
    return (
      <div>
        <div className="shop_list">
          <img src="./imgs/shangping.jpg" alt="###" />
          <div className="shoplist">
            <ul className="list">
              {
              rightnav.map(item => {
                return (
                  <li key={item.id}>
                    <img src={item.wapBannerUrl} alt="" />
                    <span>{item.name}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(RightShow);
