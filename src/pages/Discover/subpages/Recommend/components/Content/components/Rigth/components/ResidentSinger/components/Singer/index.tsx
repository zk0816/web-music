import React from "react";
import style from "./style.module.less";

interface Props {
  url: string,
  name: string,
}

const Singer = (props:Props) => {
  const {url,name} = props
  return (
    <a className={style.top}>
      <img src={url}></img>
      <div className={style.title}>
        <span>{name}</span>
        <span>音乐人</span>
      </div>
    </a>
  )
};
export default Singer;
