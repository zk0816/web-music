//发现音乐 -- 推荐 -- 轮播图下面组件 -- 左边内容组件 -- 新碟上架
import React, {useRef} from "react";
import RecommendHeader from "@/components/common/RecommendHeader";
import useInitial from '@/hooks/useInitial';
import * as API from '@/pages/Discover/subpages/Recommend/api';
import MV from '@/components/common/MV';
import style from "./style.module.less";
import { Carousel } from 'antd';

const New: React.FC = () => {
  const { data } = useInitial(API.GetNewest, [], "", "albums");

  const newRef = useRef<any>();
  return (
    <div>
      <RecommendHeader left="新碟上架" />
      <div className={style.top}>
        <div className={style.left}>
          <a onClick={() => newRef.current.prev()}></a>
        </div>
        <Carousel
          className={style.carou}
          dots={false}
          style={{ width: 645 }}
          autoplay
          ref={newRef}
          effect="scrollx"
        >
          <div>
            <div className={style.imglist}>
              {data.slice(0, 5).map((item: any) => (
                <MV
                  name={item.name}
                  artist={item.artist}
                  key={item.id}
                  blurPicUrl={item.blurPicUrl}
                />
              ))}
            </div>
          </div>
          <div>
            <div className={style.imglist}>
              {data.slice(5, 10).map((item: any) => (
                <MV
                  name={item.name}
                  artist={item.artist}
                  key={item.id}
                  blurPicUrl={item.blurPicUrl}
                />
              ))}
            </div>
          </div>
        </Carousel>
        <div className={style.right}>
          <a onClick={() => newRef.current.next()}></a>
        </div>
      </div>
    </div>
  );
};

export default New;
