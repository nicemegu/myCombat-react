import React, { Component } from "react";

import { Tabs } from "antd-mobile";
import "./css/index.less";
export default class Demo extends Component {
  render() {
    const tabs = [
      { title: "推荐" },
      { title: "居家生活" },
      { title: "服饰鞋包" },
      { title: "美食酒水" },
      { title: "个护清洁" },
      { title: "母婴亲子" },
      { title: "运动旅行" },
      { title: "数码家电" },
      { title: "全球特色" }
    ];

    return (
      <div className="Tabsout">
        <Tabs
          tabs={tabs}
          renderTabBar={props => (
            <Tabs.DefaultTabBar
              {...props}
              page={4}
              tabBarActiveTextColor="#dd1a21"
            />
          )}
        ></Tabs>
      </div>
    );
  }
}
