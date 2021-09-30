import React from "react";
import style from "./style.module.less";
import Left from './components/Left';
import Right from './components/Rigth';

const Content: React.FC = () => {
  return (
    <div className={style.center}>
      <Left />
      <Right />
    </div>
  );
};

export default Content;
