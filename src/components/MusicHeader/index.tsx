//首页头部
import React from 'react';
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { NavLink } from 'react-router-dom';
import * as Data from '@/common/local-data';
import style from "./style.module.less";

const MusicHeader = () => {
  const showItem = (item:Data.HeaderLinksItem, index:number) => {
    if (index < 3) {
      return (
        <NavLink to={item.link} className={style.top_item} activeClassName={style.link_active}>
          <em style={{height: 70}}>{item.title}</em>
          <div className={style.icon}></div>
        </NavLink>
      );
    } else if (index === 5){
      return (
        <div>
          <NavLink to={item.link} activeClassName={style.link_active} className={style.top_item}>
            {item.title}
            <div className={style.icon}></div>
          </NavLink>
          <div className={style.hot}></div>
        </div>
      );
    } else {
      return (
        <a href={item.link} target="_blank" rel="noopener noreferrer" className={style.top_item}>
          {item.title}
        </a>
      );
    }
  };
  return (
    <div className={style.header}>
      <div className={style.m_top}>
        <div style={{ display: "flex", marginRight: 85 }}>
          <div>
            <NavLink to="/discover" className={style.top_img}></NavLink>
          </div>
          <div className={style.top_title}>
            {Data.HeaderLinks.map((item, index) => {
              return <div key={item.title}>{showItem(item, index)}</div>;
            })}
          </div>
        </div>
        <div className={style.m_right}>
          <Input
            className={style.search}
            placeholder="音乐/视频/电台/用户"
            prefix={<SearchOutlined />}
          />
          <div className={style.center}>创作者中心</div>
          <div style={{cursor: 'pointer'}}>登录</div>
        </div>
      </div>
      {/* <div style={{ height: 5, backgroundColor: "#C20C0C" }}></div> */}
    </div>
  );
};

export default MusicHeader;
