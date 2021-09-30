//发现音乐 -- 推荐 -- 轮播图下面组件 -- 左边内容组件 -- 榜单
import React from "react";
import RecommendHeader from "@/components/common/RecommendHeader";
import style from "./style.module.less";
import ListItem from '@/components/common/ListItem';
import {Img} from '@/common/local-data';
import useInitial from '@/hooks/useInitial';
import * as API from '@/pages/Discover/subpages/Recommend/api';
import * as TYPE from './type';

const List: React.FC = () => {
  const { data: soarlist } = useInitial<TYPE.Result,any>(API.GetList,{},19723756,"playlist");
  const { data: newlist } = useInitial<TYPE.Result,any>(API.GetList,{},3779629,"playlist");
  const { data: originallist } = useInitial<TYPE.Result,any>(API.GetList,{},2884035,"playlist");

  const soarMsg = soarlist.tracks===undefined ? [] : soarlist.tracks.slice(0,10);
  const newMsg = newlist.tracks===undefined ? [] :newlist.tracks.slice(0,10);
  const originallistMsg = originallist .tracks===undefined ? [] :originallist .tracks.slice(0,10);
  return (
    <div>
      <RecommendHeader left="榜单" />
      <div className={style.list}>
        <ListItem title={"飙升榜"} list={soarMsg} img={Img[0]} />
        <ListItem title={"新歌榜"} list={newMsg} img={Img[1]} />
        <ListItem title={"原创榜"} list={originallistMsg} img={Img[2]} />
      </div>
    </div>
  );
};

export default List;
