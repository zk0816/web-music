// src/router->index.js  (配置路由映射)
// import React from 'react'
// const RMDiscover = React.lazy(() => import('@/pages/Discover'))
// const RMRecommend = React.lazy(() => import('@/pages/Discover/subpages/Recommend'));
// const RMRanking = React.lazy(() => import('@/pages/Discover/subpages/Ranking'));
// const RMSongs = React.lazy(() => import('@/pages/Discover/subpages/Songs'));
// const RMDjradio = React.lazy(() => import('@/pages/Discover/subpages/Djradio'));
// const RMArtist = React.lazy(() => import('@/pages/Discover/subpages/Artist'));
// const RMAlbum = React.lazy(() => import('@/pages/Discover/subpages/Album'));
// const RMPlayer = React.lazy(() => import('@/pages/Discover/subpages/Player'));
import {Redirect} from 'react-router-dom';
import React from 'react';
import Discover from '@/pages/Discover'
import Recommend from '@/pages/Discover/subpages/Recommend'
import Ranking from '@/pages/Discover/subpages/Ranking'
import Album from '@/pages/Discover/subpages/Album'
import Djradio from '@/pages/Discover/subpages/Djradio'
import Artist from '@/pages/Discover/subpages/Artist'
import Songs from '@/pages/Discover/subpages/Songs'
import Player from '@/pages/Discover/subpages/Player'

import Mine from "@/pages/Mine";
import Friend from "@/pages/Friend";


const routes = [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to="/discover" />,
  },
  {
    path: "/discover",
    component: Discover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => <Redirect to="/discover/recommend" />,
      },
      { path: "/discover/recommend", component: Recommend },
      { path: "/discover/ranking", component: Ranking },
      { path: "/discover/album", component: Album },
      { path: "/discover/djradio", component: Djradio },
      { path: "/discover/artist", component: Artist },
      { path: "/discover/songs", component: Songs },
      { path: "/discover/song", component: Player },
    ],
  },
  {
    path: "/mine",
    component: Mine,
  },
  {
    path: "/friend",
    component: Friend,
  },
];

export default routes;