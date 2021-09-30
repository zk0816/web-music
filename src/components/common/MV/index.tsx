//首页的推荐页面的新碟上架通用歌曲组件
import React from 'react';
import * as TYPE from './type';
import style from "./style.module.less";

interface Props {
  name: string;
  artist: TYPE.artist;
  blurPicUrl: string;
}

const MV = (props:Props) => {
  const { name, artist, blurPicUrl } = props;
  return (
    <div className={style.top}>
      <div className={style.img}>
        <img
          src={blurPicUrl}
          style={{ widows: 100, height: 100, display: "block" }}
        />
        <a></a>
      </div>
      <a className={style.name}>{name}</a>
      <a className={style.singer}>{artist.name}</a>
    </div>
  );
}

export default MV;
