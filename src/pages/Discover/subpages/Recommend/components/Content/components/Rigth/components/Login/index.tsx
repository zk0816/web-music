//发现音乐 -- 推荐 -- 轮播图下面 -- 右边内容 -- 登录
import React from 'react';
import style from "./style.module.less";

const Login = () => {
  return (
    <div className={style.top}>
      <div className={style.title}>
        <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
      </div>
      <div className={style.login}>
        <a>用户登录</a>
      </div>
    </div>
  );
}

export default Login;
