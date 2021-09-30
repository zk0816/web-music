//全局播放组件 -- 歌曲图片
import React from "react";
import style from "./style.module.less";

interface Props {
  imgUrl: string
}

const SongImg = (props:Props) => {
  const {imgUrl} = props
  return <div className={style.head}>
    <img src={imgUrl}/>
    <a></a>
  </div>;
};

export default SongImg;
