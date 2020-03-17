import React, { Component } from "react";

import { Carousel} from "antd-mobile";

export default class Swiper extends Component {
  state = {
    data: [
      "be01331fb46a63943357fcb2f2c54e3a",
      "291f05d639363a80382fb4e21cb8f123",
      "d46d2fd850b9a660eca68028fe974bb0",
      "576a305539b868edb0ed05b632b572d7"
    ],
    imgHeight: 176
  };
  
  render() {
    return (
      
        <Carousel autoplay={true} infinite={true}>
          {this.state.data.map(val => (
            <img
              src={`https://yanxuan.nosdn.127.net/${val}.jpg`}
              key={val}
          
              style={{ width: "100%", verticalAlign: "top" }}
              onLoad={() => {
                // fire window resize event to change height
                window.dispatchEvent(new Event("resize"));
                this.setState({ imgHeight: "auto" });
              }}
            />
          ))}
        </Carousel>
     
    );
  }
}
