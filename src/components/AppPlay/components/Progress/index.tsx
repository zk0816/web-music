//全局播放组件 -- 进度条
import { Slider } from 'antd';
import React from 'react'
import style from "./style.module.less";
import moment from "moment";

interface Props {
  data: any;
}

const Progress = (props:Props) =>{
  const {data} = props
  return (
    <div className={style.top}>
      <div>
        <div className={style.song_info}>
          <a>{data.length > 0 && data[0].name}</a>
          <a>{data.length > 0 && data[0].ar[0].name}</a>
        </div>
        <Slider
          defaultValue={10}
          range={false}
          //value={progress}
          //onChange={sliderChange}
          //onAfterChange={slideAfterChange}
        />
      </div>
      <div className={style.song_time}>
        <span className={style.now_time}>{moment(0).format("mm:ss")} / </span>
        <span className={style.total_time}>{moment(data.length > 0 && data[0].dt).format("mm:ss")}</span>
      </div>
    </div>
  );
}

export default Progress;
