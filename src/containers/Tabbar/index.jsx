import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { TabBar } from "antd-mobile";
import "./css/index.less";
class TabBarExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "blueTab",
      hidden: false
    };
  }

  render() {
    return (
      <div
        style={{
          width: "100%",
          height: "50px",
          position: "fixed",
          bottom: "0"
        }}
      >
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="首页"
            key="Life"
            icon={<div className="homeico commonality" />}
            selectedIcon={<div className="homeicos commonality" />}
            selected={this.state.selectedTab === "blueTab"}
            onPress={() => {
              this.setState({
                selectedTab: "blueTab"
              });
              this.props.history.push("/home");
            }}
            data-seed="logId"
          ></TabBar.Item>
          <TabBar.Item
            icon={<div className="fenlei commonality" />}
            selectedIcon={<div className="fenleis commonality" />}
            title="分类"
            key="fenlei"
            selected={this.state.selectedTab === "yellowTabss"}
            onPress={() => {
              this.setState({
                selectedTab: "yellowTabss"
              });
              this.props.history.push("/sort");
            }}
          ></TabBar.Item>
        
          <TabBar.Item
            icon={
              <div
                className="goodvalue commonality"
                style={{ width: "20px", height: "20px" }}
              />
            }
            selectedIcon={<div className="goodvalues commonality" />}
            title="值得买"
            key="Koubei"
            selected={this.state.selectedTab === "redTab"}
            onPress={() => {
              this.setState({
                selectedTab: "redTab"
              });
              this.props.history.push("/goodvalue");
            }}
            data-seed="logId1"
          ></TabBar.Item>
          <TabBar.Item
            icon={<div className="cart commonality" />}
            selectedIcon={<div className="carts commonality" />}
            title="购物车"
            key="Friend"
            dot
            selected={this.state.selectedTab === "greenTab"}
            onPress={() => {
              this.setState({
                selectedTab: "greenTab"
              });
              this.props.history.push("/cart");
            }}
          ></TabBar.Item>
          <TabBar.Item
            icon={<div className="presonal commonality" />}
            selectedIcon={<div className="personals commonality" />}
            title="个人"
            key="my"
            selected={this.state.selectedTab === "yellowTab"}
            onPress={() => {
              this.setState({
                selectedTab: "yellowTab"
              });
              this.props.history.push("/personal");
            }}
          ></TabBar.Item>
        </TabBar>
      </div>
    );
  }
}
export default withRouter(TabBarExample);
