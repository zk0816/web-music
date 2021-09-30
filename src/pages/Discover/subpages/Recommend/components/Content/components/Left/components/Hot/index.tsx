//发现音乐 -- 推荐 -- 轮播图下面组件 -- 左边内容组件 -- 热门推荐
import React from "react";
import RecommendHeader from "@/components/common/RecommendHeader";
import useInitial from '@/hooks/useInitial';
import * as API from '@/pages/Discover/subpages/Recommend/api';
import Song from '@/components/common/Song';

const Hot: React.FC = () => {
  const {data} = useInitial(API.GetPersonalized,[],8)
  return (
    <div>
      <RecommendHeader
        left="热门推荐"
        center={["华语", "流行", "摇滚", "民谣", "电子"]}
      />
      <div style={{display: 'flex', flexWrap: 'wrap',justifyContent: 'space-between',marginBottom: 82,marginTop: 10}}>
        {data.map((item: any) => (
          <Song
            picUrl={item.picUrl}
            playCount={item.playCount}
            name={item.name}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Hot;
