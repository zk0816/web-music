//推荐页面 通用头部
import React from 'react';
import style from "./style.module.less";

interface Props {
  left: string,   //左边标题
  center?: string[], //中间标题
}

const RecommendHeader = (props:Props) => {
  const { left,center} = props;
  const list = center ? center : [];
  return (
    <div className={style.top}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className={style.img}></div>
        <div className={style.title}>{left}</div>
        <div className={style.list}>
          {list.map((item: string) => (
            <div key={item} className={style.content}>
              <a>{item}</a>
              <span>|</span>
            </div>
          ))}
        </div>
      </div>
      <div className={style.more}>
        <div>更多</div>
        <div className={style.icon}></div>
      </div>
    </div>
  );
}

export default RecommendHeader;
