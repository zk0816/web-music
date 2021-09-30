//发现音乐 -- 推荐 -- 轮播图
import useInitial from "@/hooks/useInitial";
import { Carousel } from 'antd';
import React, { useCallback, useRef, useState } from "react";
import * as API from "../../api";
import style from "./style.module.less";

const CarouselList: React.FC = () => {
  const { data:banners } = useInitial(API.GetCarouselList, [], 0, "banners");
  const [currentIndex, setCurrentIndex] = useState(0);

  const bannerRef = useRef<any>();
  const bannerChange = useCallback((from,to) => {
      setCurrentIndex(to);
  }, []);

  //高斯背景图模糊
  const bgImage = banners[currentIndex] && (banners[currentIndex].imageUrl + "?imageView&blur=40x20")
  const bkStyle = {
    background: `url(${bgImage}) center center/6000px`
  }
  return (
    <div style={bkStyle}>
      <div className={style.banner}>
        <div className={style.left_top}>
          <div
            className={style.left}
            onClick={() => bannerRef.current.prev()}
          ></div>
        </div>
        <div className={style.banner_top}>
          <Carousel
            autoplay
            beforeChange={bannerChange}
            ref={bannerRef}
            effect="fade"
          >
            {banners.map((item: any) => {
              return (
                <div className={style.banner_item} key={item.imageUrl}>
                  <a>
                    <img
                      className={style.image}
                      src={item.imageUrl}
                      alt={item.typeTitle}
                    />
                  </a>
                </div>
              );
            })}
          </Carousel>
        </div>
        <div style={{ height: 285 }}>
          <a
            href="https://music.163.com/#/download"
            className={style.download}
          ></a>
        </div>
        <div className={style.right_top}>
          <div
            className={style.right}
            onClick={() => bannerRef.current.next()}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default CarouselList;
