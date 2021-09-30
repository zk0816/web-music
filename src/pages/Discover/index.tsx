import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { dicoverMenu } from "@/common/local-data";
import style from "./style.module.less";

const Discover: React.FC = (props: any) => {
  const { route } = props;
  return (
    <div style={{ height: "100%" }}>
      <div className={style.header}>
        <div className={style.color}>
          <div className={style.title}>
            {dicoverMenu.map((item) => {
              return (
                <div className={style.item} key={item.title}>
                  <NavLink to={item.link} activeClassName={style.menu_active}>
                    {item.title}
                  </NavLink>
                </div>
              );
            })}
          </div>
        </div>
        {renderRoutes(route.routes)}
      </div>
    </div>
  );
};

export default memo(Discover);
