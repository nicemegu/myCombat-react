import React, { Component } from "react";
//引入api
import { reqSorts } from "../../api/index";
//引入组件
import Rightnav from "./right_show/index";
import Leftnav from "./left_nav/index";
//引入样式
import'./css/index.css'
export default class Sort extends Component {
  componentDidMount() {
    const result = reqSorts();
  }
  render() {
    return (
      <div className="sortout">
        <Leftnav />
        <Rightnav />
      </div>
    );
  }
}
