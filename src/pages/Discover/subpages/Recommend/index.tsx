//发现音乐之推荐
import React from 'react';
import Carousel from './components/Carousel';
import Content from "./components/Content";

const Recommend: React.FC = () => {
  return (
    <div>
      <Carousel />
      <Content />
    </div>
  );
};

export default Recommend;
