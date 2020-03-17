function rem(){
  //获取屏幕的宽
  const fontSize  = document.documentElement.clientWidth/10
  //设置根目录字体的大小
  document.documentElement.style.fontSize = fontSize +'px'
}
rem()