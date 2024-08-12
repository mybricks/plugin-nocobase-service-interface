import { useState, useMemo } from 'react';

export function useObservable(ctx ={}) {
  const [render, setRender] =  useState([]);
  const obj = useMemo(() => new Proxy(ctx, {
    get(key) {
      return data[key];
    },
    set(key, value) {
      obj[key] = value;
      setRender([]);
      return true;
    },
  }), [])
  return obj;
}