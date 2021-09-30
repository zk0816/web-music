import { useState, useEffect } from "react";
import { message } from "antd";

type APIFunc<T, P> = (params: P) => Promise<T>;

/**
 * @param {api} —api.ts件中封装的接口请求方法
 * @param {defaultData} 页面初始化时接口数据的默认值
 * @param {params} 接口所需要的参数  注意，这里请传入接口需要的完整的参数
 * @param {delay} 当该值为true时，接口不请求
 * @param {apiName} 返回接口的对象类型标识 由于网易云api返回基本为对象 没有特定的标识 因此需要加上标识 来直接获取数组
 */

interface InitialStatus<P, T> {
  param: P;
  errMsg: string;
  loading: boolean;
  data: T;
  refreshing: boolean;
}

//备注 由于网易云api文档没有返回数据类型 因此在使用useInitial可以不用限制类型 此hooks只是一个规范
function useInitial<T, P>(
  api: APIFunc<T, P>,
  defaultData: T,
  params: P,
  apiName?: string,
  delay?: boolean
) {
  //初始化参数并设置默认
  const [state, setState] = useState<InitialStatus<P, T>>({
    param: params, // param 请求参数
    errMsg: "", // errMsg 请求异常
    loading: true, // loding 控制接口主动刷新 为true时强制刷新
    data: defaultData, // data 返回数据
    refreshing: !delay, // refreshing 初始接口是否刷新
  });

  //判断接口是否请求 及刷新
  useEffect(() => {
    //请求接口
    const getData = (params: P) => {
      api(params)
        .then((res: any) => {
          const data = apiName ? res[apiName] : res.result;
          setState({
            ...state,
            data: data,
            errMsg: "",
            loading: false,
            refreshing: false,
          });
        })
        .catch((e: any) => {
          message.error(e);
          setState({
            ...state,
            errMsg: e.message,
            loading: false,
            refreshing: false,
          });
        });
    };
    if (delay) return;
    if (state.refreshing) getData(state.param);
  }, [api, apiName, defaultData, delay, state, state.refreshing]);

  //参数变化时请求
  const setParams = (_params: P, _refreshing?: boolean) => {
    const param = typeof _params === "object" ? { ..._params } : _params;
    setState({
      ...state,
      param,
      loading: _refreshing || false,
      refreshing: _refreshing || false,
    });
  };

  return {
    errMsg: state.errMsg,
    data: state.data as T,
    loading: state.loading,
    setLoading: (loading: boolean) =>
      setState({ ...state, loading, refreshing: loading }),
    params: state.param || params,
    setParams,
  };
}

export default useInitial;
