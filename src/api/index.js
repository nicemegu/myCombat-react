//引入
import axiosInstance from './ajax'
//分类左侧的数据
export const reqSorts= ()=>{
  return axiosInstance({
    url:'/sort',
    method:'GET'
  })
}
//分类右侧的数据
export const reqRightNav=()=>{
  return axiosInstance({
    url:'/sort?carygoryId=:id',
    method:'GET'
  })
}