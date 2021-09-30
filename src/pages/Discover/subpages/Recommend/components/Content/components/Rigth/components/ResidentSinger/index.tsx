//发现音乐 -- 推荐 -- 轮播图下面 -- 右边内容 -- 入驻歌手
import React from 'react';
import style from "./style.module.less";
import Singer from'./components/Singer';
import useInitial from '@/hooks/useInitial';
import * as API from '@/pages/Discover/subpages/Recommend/api';

const ResidentSinger = () => {
  const {data} = useInitial(API.GetHotSinger,[],{limit:5},'artists')
  return (
    <div className={style.top}>
      <div className={style.header}>
        <span>入驻歌手</span>
        <a>查看更多{">"}</a>
      </div>
      <div>
        {data.map((item: any) => (
          <Singer name={item.name} url={item.picUrl} key={item.id} />
        ))}
      </div>
      <div className={style.singer}>
        <a>
          <i>申请成为网易音乐人</i>
        </a>
      </div>
    </div>
  );
}

export default ResidentSinger;
