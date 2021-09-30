//发现音乐 -- 推荐 -- 轮播图下面 -- 右边内容
import React from "react";
import Login from './components/Login';
import ResidentSinger from './components/ResidentSinger';
import PopularAnchors from './components/PopularAnchors';
import style from "./style.module.less";

const Right: React.FC = () => {
  return (
    <div className={style.header}>
      <Login />
      <ResidentSinger />
      <PopularAnchors />
    </div>
  )
};

export default Right;
