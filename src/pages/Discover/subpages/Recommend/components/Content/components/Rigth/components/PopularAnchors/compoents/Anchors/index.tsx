import React from "react";
import style from "./style.module.less";

interface Props {
  url: string,
  name: string,
}

const Anchors = (props: Props) => {
  const { url, name } = props;
  return (
    <a className={style.top}>
      <img src={url}></img>
      <div className={style.title}>
        <span>{name}</span>
      </div>
    </a>
  );
};
export default Anchors;
