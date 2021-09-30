//首页尾部
import React, { Fragment, memo } from "react";
import { footerLinks, footerImages } from "@/common/local-data";
import style from "./style.module.less";


const MusicFooter = () => {
  return (
    <div className={style.footer}>
      <div className={style.content}>
        <div className={style.footer_left}>
          <div className={style.link}>
            {footerLinks.map((item) => {
              return (
                <Fragment key={item.title}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.title}
                  </a>
                  <span className={style.line}>|</span>
                </Fragment>
              );
            })}
          </div>
          <div className={style.copyright}>
            <span>网易公司版权所有©1997-2020</span>
            <span>
              杭州乐读科技有限公司运营：
              <a
                href="https://p1.music.126.net/Mos9LTpl6kYt6YTutA6gjg==/109951164248627501.png"
                rel="noopener noreferrer"
                target="_blank"
              >
                浙网文[2018]3506-263号
              </a>
            </span>
          </div>
          <div className={style.copyright}>
            <span>违法和不良信息举报电话：0571-89853516</span>
            <span>
              举报邮箱：
              <a
                href="mailto:ncm5990@163.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                ncm5990@163.com
              </a>
            </span>
          </div>
          <div className={style.copyright}>
            <span>粤B2-20090191-18</span>
            <a
              href="http://www.beian.miit.gov.cn/publish/query/indexFirst.action"
              rel="noopener noreferrer"
              target="_blank"
            >
              工业和信息化部备案管理系统网站
            </a>
          </div>
        </div>
        <div className={style.footer_right}>
          {footerImages.map((item, index) => {
            return (
              <div className={style.item} key={index}>
                <a
                  className={style.link}
                  href={item.link}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                </a>
                <span className={style.title}></span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default memo(MusicFooter);
