import React, { Component } from "react";
//引入底部导航栏组件
import TabBarExample from "./containers/Tabbar";
//引入路由组件功能
import { BrowserRouter as Router, Route } from "react-router-dom";
//引入路由组件
import router from "./router/index";
export default class App extends Component {
  render() {
    return (
      <div className="outer" style={{ height: "100%" }}>
        <Router>
          {router.map(route => {
            return <Route {...route} key={route.path} />;
          })}
          <TabBarExample />
        </Router>
        
      </div>
    );
  }
}
