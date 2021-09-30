import React from 'react';
import PlayStore from './playstore';

const storeContext = React.createContext({
  playStore: new PlayStore()
})
const useStores = () => React.useContext(storeContext);  // 利用 context hook
export default useStores;