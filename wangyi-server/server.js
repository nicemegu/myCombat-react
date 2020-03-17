//引入koa
let Koa = require("koa");
//引入koa-router
let KoaRouter = require("koa-router");
//引入request 
let Request = require('request')
//引入主页数据
let index = require("./datas/index.json");
//引入indexCateModule.json 主页nav对应模块数据
let indexCateModule = require("./datas/indexCateModule.json");
//引入3.	cateNavDatas.json分类左侧导航数据
let cateNavDatas = require("./datas/cateNavDatas.json");
//引入4.	cateLists.json 分类右侧导航数据
let cateLists = require("./datas/cateLists.json");
let FeHelper = require("./datas/FeHelper.json")
//创建KOa的实例对象
let koa = new Koa();
//创建koaRouter的实例对象
let koarouter = new KoaRouter();
//调用方法写接口
koarouter.get("/home", ctx => {
  //ctx可以获取调用接口的时候传入的参数，还可以通过ctx.body向前台界面响应数据
  //next代表放行的意思
  const req = ctx.query.req;
  ctx.body = {
    index,
    indexCateModule
  };
});

//返回	cateNavDatas.json分类左侧导航数据
koarouter.get("/sort", ctx => {
  const req = ctx.query.req;
  ctx.body = {cateNavDatas,cateLists};
});

//返回	cateLists.json分类左侧导航数据
// koarouter.get("/sort?carygoryId", ctx => {
//   //获取传过来的参数
//   const req = ctx.query.req;
  
//   ctx.body = cateLists;
// });

// //返回	search分类左侧导航数据
// koarouter.get("/search:id", ctx => {
//   const req = ctx.query.req;
//   ctx.body = cateLists;
// });
// let data = Request.post('https://m.you.163.com/xhr/search/init.json', function (error, response, body) {
//   return response
// })





//返回	search分类左侧导航数据
koarouter.get("/search", ctx => {
  const req = ctx.query.req;
  //发送请求得到热词数据
  let data = Request.post('https://m.you.163.com/xhr/search/init.json', function (error, response, body) {
    return response
  })
  ctx.body = data;
});


let shopss = Request.post('https://m.you.163.com/xhr/search/searchAutoComplete.json', function (error, response, body) {
  return response
})
console.log(shopss)

//返回	cateLists.json分类左侧导航数据
koarouter.get("/goodvalue", ctx => {
  const req = ctx.query.req;
  ctx.body = FeHelper;
});


//koarouter中的所有路由的相关方法
koa
  .use(koarouter.allowedMethods()) //路由中所有的相关方法
  .use(koarouter.routes()); //所有的路由
//设置koa监视的端口号
koa.listen("4000", () => {
  console.log("服务器启动成功，端口号：4000");
});