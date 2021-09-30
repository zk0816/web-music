//发现音乐 -- 推荐 -- 轮播图下面组件 -- 左边内容组件
import React from "react";
import style from "./style.module.less";
import Hot from './components/Hot';
import New from './components/New';
import List from './components/List';

const Left: React.FC = () => {
  return (
    <div className={style.left}>
      <Hot/>
      <New/>
      <List/>
    </div>
  );
};

export default Left;
