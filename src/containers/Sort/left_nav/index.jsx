import React, { Component } from "react";
//引入pubsub
import PubSub from "pubsub-js";
import { withRouter } from "react-router-dom";
//引入接口
import { reqSorts } from "../../../api/index";

import "./css/index.less";

class Demo extends Component {
  //定义一个状态用来存储返回的数据
  state = {
    //用来存储左边列表数据的
    leftsortList: [],
    //用来存储右边数据
    rightsortList:[],
    //用来存储id的(默认为11)
    id: 11
  };

  componentDidMount() {
    //发送请求 得到数据
    const sorts = reqSorts();
    sorts.then(res => {
      const datas = res.data;
      const data= datas.cateNavDatas
      this.setState({
        leftsortList: data.categoryL1List,
        rightsortList:datas.cateLists
      });
    });
  }

  //li的点击事件
  changId = id => {
    //修改当前的id
    this.setState({
      id
    });
    //查找这个id对应的数据
    const {rightsortList} = this.state
    const rightnav =rightsortList.filter((item)=>{
      if(item.id === id){
        return true
      }
    })
    //发布事件,这里使用  publishSync 表示为同步发送数据！！！使用异步发送会出异常
    PubSub.publishSync("carygoryid", rightnav[0]);
    //查找对应的数据数据（id）
    this.props.history.push(`/sort?carygoryId=${id}`);
  };
  render() {
    const { leftsortList, id ,rightsortList} = this.state;
    console.log(rightsortList)
    return (
      <div className="left_nav">
        <ul className="left_nav_list">
          {leftsortList.map(sort => {
            return (
              <li key={sort.id} onClick={() => this.changId(sort.id)}>
                <span className={sort.id === id ? "on" : ""}>{sort.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default withRouter(Demo);
