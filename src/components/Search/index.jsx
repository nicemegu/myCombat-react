import React,{Component} from 'react'


import './css/index.less'
export default class Search extends Component {

  render() {
    return (
     
     <div className="search_out">
       <input type="text"  disabled placeholder="请输入内容" />
     </div>
  
    );
  }
}
