//全局播放组件
import Start from './components/Start'
import React, { useEffect, useState } from 'react'
import style from "./style.module.less";
//import SongImg from './components/SongImg'
//import Progress from '@/components/AppPlay/components/Progress'
// import * as API from '@/common/api';
// import useInitial from '@/hooks/useInitial'
// import { message } from 'antd'
import { observer } from "mobx-react";
import useStores from "@/store/store";

const AppPlay = () => {
  const { playStore } = useStores();
  console.log("11", playStore.id);
  //const { data, setParams } = useInitial(API.Music, [], 0, "songs");
  const [lock, setLock] = useState(true);

  useEffect(() => {
    // API.MusicTrue(167876).then((res) => {
    //   if (res.success) {
    //     setParams(0, true);
    //   } else {
    //     message.error(res.message);
    //   }
    // });
    playStore.ChangId(16888)
    console.log("11", playStore.id);
  }, []);

  const onChange = () => {
    setLock(!lock);
  };
  return (
    <div className={style.fill}>
      <div style={{ position: "relative" }}>
        <div className={lock ? style.lock : style.lock_lock}>
          <button onClick={onChange} className={style.icon}>
            <a></a>
          </button>
        </div>
      </div>
      <div className={lock ? style.top : style.top_lock}>
        <div className={style.play}>
          <Start />
          {/* <SongImg imgUrl={data.length > 0 ? data[0].al.picUrl : []} />
          <Progress data={data} /> */}
        </div>
      </div>
    </div>
  );
};

export default observer(AppPlay);
