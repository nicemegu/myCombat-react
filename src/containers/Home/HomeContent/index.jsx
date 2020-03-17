import React, { Component } from "react";
import Swiper from '../../../components/Swiper/index'
//引入样式文件
import "./css/index.less";
export default class HomeContent extends Component {
  render() {
    return (
      // 最外层的div
      <div className="homecontent">
        <Swiper />
        {/* 小图标，轮播图下面的 */}
        <div className="homeicon">
          <ul className="homeicon_list">
            <li>
              <img
                src="https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png"
                alt=""
              />
              <span>网易直营品牌</span>
            </li>
            <li>
              <img
                src="https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png"
                alt=""
              />
              <span>网易直营品牌</span>
            </li>
            <li>
              <img
                src="https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png"
                alt=""
              />
              <span>网易直营品牌</span>
            </li>
          </ul>
        </div>
        {/* 商品导航  */}
        <div className="homeNav">
          <ul className="homeNav_list">
            <li>
              <img
                src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png"
                alt=""
              />
              <span>新品首发</span>
            </li>
            <li>
              <img
                src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png"
                alt=""
              />
              <span>新品首发</span>
            </li>
            <li>
              <img
                src="https://yanxuan.nosdn.127.net/37520d1204a0c55474021b43dac2a69e.png"
                alt=""
              />
              <span>新品首发</span>
            </li>
            <li>
              <img
                src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png"
                alt=""
              />
              <span>新品首发</span>
            </li>
            <li>
              <img
                src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png"
                alt=""
              />
              <span>新品首发</span>
            </li>
            <li>
              <img
                src="https://yanxuan.nosdn.127.net/37520d1204a0c55474021b43dac2a69e.png"
                alt=""
              />
              <span>新品首发</span>
            </li>
            <li>
              <img
                src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png"
                alt=""
              />
              <span>新品首发</span>
            </li>
            <li>
              <img
                src="https://yanxuan.nosdn.127.net/37520d1204a0c55474021b43dac2a69e.png"
                alt=""
              />
              <span>新品首发</span>
            </li>
            <li>
              <img
                src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png"
                alt=""
              />
              <span>新品首发</span>
            </li>
            <li>
              <img
                src="https://yanxuan.nosdn.127.net/37520d1204a0c55474021b43dac2a69e.png"
                alt=""
              />
              <span>新品首发</span>
            </li>
          </ul>
        </div>

        <div className="homeview">
          <ul className="homeview_list">
            <li>
              <a href="###">
                <img
                  src="https://yanxuan.nosdn.127.net/35279ed5b692854f2f30c4bd338baad1.png"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a href="###">
                <img
                  src="https://yanxuan.nosdn.127.net/35279ed5b692854f2f30c4bd338baad1.png"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a href="###">
                <img
                  src="https://yanxuan.nosdn.127.net/35279ed5b692854f2f30c4bd338baad1.png"
                  alt=""
                />
              </a>
            </li>
          </ul>
        </div>
        {/* 新人礼包 */}
        <div className="home_newgift">
          <div className="newperson_title">
            <span></span>
            <p>新人专享礼</p>
            <span></span>
          </div>
          <div className="newPerson_content">
            <div className="content_left">
              <p>新人专享礼包</p>
              <img src="./imgs/xinren.png" alt="图片加载失败" />
            </div>
            <div className="content_right">
              <div className="right_top">
                <div className="text">
                  <span>福利社</span>
                  <span className="subtitle">今日特价</span>
                </div>
                <img src="./imgs/tehui.png" alt="图片加载失败" />
              </div>
              <div className="right_bottom">
                <span>新人拼团</span>
                <span className="subtitle">一元起包邮</span>
              </div>
            </div>
          </div>
        </div>
        {/* 类目热销榜 */}
        <div className="hotsale">
          <h3>类目热销榜</h3>
          <div className="hot_top">
            <div className="hot_top_left">
              <div className="left_text">
                <span>热销榜</span>
                <span className="hot-line"></span>
              </div>
              <img src="./imgs/zhijin.webp" alt="" />
            </div>
            <div className="hot_top_right">
              <div className="right_text">
                <span>热销榜</span>
                <span className="hot-line"></span>
              </div>
              <img src="./imgs/zhijin.webp" alt="" />
            </div>
          </div>
          <div className="host_list">
            <ul>
              <li>
                <span>美食酒水榜</span>
                <img src="./imgs/meishi.png" alt="" />
              </li>
              <li>
                <span>美食酒水榜</span>
                <img src="./imgs/meishi.png" alt="" />
              </li>
              <li>
                <span>美食酒水榜</span>
                <img src="./imgs/meishi.png" alt="" />
              </li>
              <li>
                <span>美食酒水榜</span>
                <img src="./imgs/meishi.png" alt="" />
              </li>
              <li>
                <span>美食酒水榜</span>
                <img src="./imgs/meishi.png" alt="" />
              </li>
              <li>
                <span>美食酒水榜</span>
                <img src="./imgs/meishi.png" alt="" />
              </li>
              <li>
                <span>美食酒水榜</span>
                <img src="./imgs/meishi.png" alt="" />
              </li>
              <li>
                <span>美食酒水榜</span>
                <img src="./imgs/meishi.png" alt="" />
              </li>
            </ul>
          </div>
        </div>
        {/* 限时购 */}
        <div className="timetobuy">
          <div className="title">
            <div className="title_left">
              <span>限时购</span>
            </div>
            <span className="more">更多 ></span>
          </div>
          <div className="timetobuylist">
            <ul className="list">
              <li>
                <img src="./imgs/longjing.png" alt="" />
                <span>¥58元</span>
                <span className="list_discount">¥60元</span>
              </li>
              <li>
                <img src="./imgs/longjing.png" alt="" />
                <span>¥58元</span>
                <span className="list_discount">¥60元</span>
              </li>
              <li>
                <img src="./imgs/longjing.png" alt="" />
                <span>¥58元</span>
                <span className="list_discount">¥60元</span>
              </li>
              <li>
                <img src="./imgs/longjing.png" alt="" />
                <span>¥58元</span>
                <span className="list_discount">¥60元</span>
              </li>
              <li>
                <img src="./imgs/longjing.png" alt="" />
                <span>¥58元</span>
                <span className="list_discount">¥60元</span>
              </li>
              <li>
                <img src="./imgs/longjing.png" alt="" />
                <span>¥58元</span>
                <span className="list_discount">¥60元</span>
              </li>
            </ul>
          </div>
        </div>
        {/* 新品首发 */}
        <div className="newproduct">
          <div className="title">
            <span>新品首发</span>
            <span>更多 ></span>
          </div>
          <div className="newproductlist">
            <ul className="list">
              <li>
                <img src="./imgs/bang.png" alt="" />
                <p className="introduce">告别桌面沙发尘屑毛发，mini桌面吸尘器</p>
                <span className="price">¥59</span>
                <span className="btn">新品尝试</span>
              </li>
              <li>
                <img src="./imgs/bang.png" alt="" />
                <p className="introduce">告别桌面沙发尘屑毛发，mini桌面吸尘器</p>
                <span className="price">¥59</span>
                <span className="btn">新品尝试</span>
              </li>
              <li>
                <img src="./imgs/bang.png" alt="" />
                <p className="introduce">告别桌面沙发尘屑毛发，mini桌面吸尘器</p>
                <span className="price">¥59</span>
                <span className="btn">新品尝试</span>
              </li>
              <li>
                <img src="./imgs/bang.png" alt="" />
                <p className="introduce">告别桌面沙发尘屑毛发，mini桌面吸尘器</p>
                <span className="price">¥59</span>
                <span className="btn">新品尝试</span>
              </li>
              <li>
                <img src="./imgs/bang.png" alt="" />
                <p className="introduce">告别桌面沙发尘屑毛发，mini桌面吸尘器</p>
                <span className="price">¥59</span>
                <span className="btn">新品尝试</span>
              </li>
              <li>
                <img src="./imgs/bang.png" alt="" />
                <p className="introduce">告别桌面沙发尘屑毛发，mini桌面吸尘器</p>
                <span className="price">¥59</span>
                <span className="btn">新品尝试</span>
              </li>
            </ul>
          </div>
        </div>
        {/* 底部导航 */}
        <div className="bottomnav">
          <ul className="list">
            <li>
              <span className="list_top1">断货补单王</span>
              <span className="list_top2">补仓疯抢中</span>
              <div className="list_img">
                <img src="./imgs/beizi.png" alt="" />
                <img src="./imgs/gongju.png" alt="" />
              </div>
            </li>
            <li>
              <span className="list_top1">断货补单王</span>
              <span className="list_top2">补仓疯抢中</span>
              <div className="list_img">
                <img src="./imgs/beizi.png" alt="" />
                <img src="./imgs/gongju.png" alt="" />
              </div>
            </li>
            <li>
              <span className="list_top1">断货补单王</span>
              <span className="list_top2">补仓疯抢中</span>
              <div className="list_img">
                <img src="./imgs/beizi.png" alt="" />
                <img src="./imgs/gongju.png" alt="" />
              </div>
            </li>
            <li>
              <span className="list_top1">断货补单王</span>
              <span className="list_top2">补仓疯抢中</span>
              <div className="list_img">
                <img src="./imgs/beizi.png" alt="" />
                <img src="./imgs/gongju.png" alt="" />
              </div>
            </li>
          </ul>
        </div>
        <div className="bottom">
          <div className="btn">
            <span className="down">下载App</span>
            <span>电脑版</span>
          </div>
          <div className="text">
            <p>网易公司版权所有 © 1997-2020</p>
            <p>食品经营许可证：JY13301080111719</p>
          </div>
        </div>

        <div className="test"></div>
      </div>
    );
  }
}
