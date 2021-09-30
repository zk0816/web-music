//首页的推荐页面的热门推荐的单个歌曲组件
import React from 'react';
import style from "./style.module.less";
import {getCount} from '@/utils/format_utils';

interface Props {
  picUrl: string,
  playCount: number,
  name: string,
}

const Song = (props:Props) => {
  const {picUrl,playCount,name} = props
  return (
    <div className={style.top}>
      <div className={style.img}>
        <img src={picUrl} style={{ width: 140, height: 140 }} />
        <a></a>
        <div className={style.bottom}>
          <span className={style.count}></span>
          <span className={style.play}>{getCount(playCount)}</span>
          <a></a>
        </div>
      </div>
      <a className={style.name}>{name}</a>
    </div>
  );
}

export default Song;
