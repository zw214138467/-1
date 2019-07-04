/// 这里面就是封装我们的常用的代码的js代码
var kits = {};
// 封装一个获取指定区间的随机整数的方法
kits.randonInt = function (n, m) {
  return Math.floor(Math.random() * (m - n + 1) + n);
}


let kits = {};
kits.formateDate = function(){
  let date = new Date();
  let y = date.getFullYear();
  let M = date.getMonth() + 1;
  let d = date.getDate();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  M = M < 10 ? '0' + M : M;
  d = d < 10 ? '0' + d : d;
  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;
  return y + '-' + M + '-' + d + ' ' + h + ':' + m + ':' + s;
}

// 随机整数
kits.randomInt = function(n,m){
  return Math.floor(Math.random() *(m-n+1) + n);
}

/**
 * 封装的是一个可以生成唯一id的方法
 */
kits.primaryKey = function(){
  // 我们通过时间戳 + 大范围的随机数来生成id
  let now = Date.now(); //得到是从1970年到现在为止的总的毫秒数
  // 为了防止在1毫秒之内生成的id有多个，再次加上一个大范围的随机数
  let r = kits.randomInt(100000,999999);
  // console.log(r);
  // 把两个得到的结果，拼接起来
  return now + '' + r;
}