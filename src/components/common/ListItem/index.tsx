//首页的推荐页面的榜单通用组件 飙升榜组件
import React from 'react';
import style from "./style.module.less";

interface Props {
  title: string,
  list: string[],
  img: string,
}

const ListItem = (props:Props) => {
  const {title,list,img} = props;
  return (
    <div className={style.top}>
      <div className={style.header}>
        <div className={style.img}>
          <img src={img} />
          <a></a>
        </div>
        <div className={style.title}>
          <a className={style.title_list}>{title}</a>
          <div className={style.title_img}>
            <a></a>
            <a></a>
          </div>
        </div>
      </div>
      <div className={style.list}>
        {list.map((item: any,index:number) => (
          <div key={index} className={style.list_item}>
            <div>
            <span>{index+1}</span>
            </div>
            <div>
              <a className={style.name}>{item.name}</a>
            </div>
            <div className={style.icon}>
              <a className={style.icon_one}></a>
              <a className={style.icon_two}></a>
              <a className={style.icon_three}></a>
            </div>
          </div>
        ))}
      </div>
      <div className={style.footer}>
        <div>查看更多{">"}</div>
      </div>
    </div>
  );
}
export default ListItem;
