import React, {useContext, useEffect, useRef, useState} from 'react';
import { useCallback } from 'react';
import { isEmpty } from '../../../utils/lodash';
import {DefaultPanelContext} from '../defaultPanel/context';

import css from './index.less';

const emptyAry: any[] = [];

export default function ReturnShema({
  outputKeys,
  excludeKeys: excKeys,
  onOutputKeysChange,
  onExcludeKeysChange,
  schema,
  error,
}: any) {
  const defaultPanelContext = useContext(DefaultPanelContext);
  const parentEleRef = useRef<HTMLDivElement>();
  const curKeyRef = useRef('');
  const excludeKeysRef = useRef([]);
  const [keys, setOutputKeys] = useState(outputKeys || emptyAry);
  const [excludeKeys, setExcludekeys] = useState<string[]>(excKeys || []);
  const [popMenuStyle, setStyle] = useState<any>();
  excludeKeysRef.current = excludeKeys;
  useEffect(() => {
    setOutputKeys(outputKeys || emptyAry);
  }, [outputKeys]);

  const markAsReturn = useCallback(() => {
    setOutputKeys((keys: any[]) => {
      if (excludeKeysRef.current.some((key) => key === curKeyRef.current)) {
        return keys;
      }
      const outputkeys = [
        ...keys.filter(
          (key: string) =>
            !(
              key.includes(curKeyRef.current) || curKeyRef.current.includes(key)
            )
        ),
        curKeyRef.current,
      ].filter((key) => key !== '');
      onOutputKeysChange([...outputkeys]);
      return outputkeys;
    });
    setExcludekeys((keys: string[]) => {
      const newKeys = keys.filter((key) => key !== curKeyRef.current);
      onExcludeKeysChange(newKeys);
      return newKeys;
    });
  }, []);

  function proAry(items, xpath) {
    if (!items) return null;
    return proItem({ val: items, xpath });
  }

  function proObj(properties, xpath) {
    if (!properties) return null;
    return (
      <>
        {Object.keys(properties).map((key) => {
          const nxpath =
            xpath !== void 0 ? (xpath ? `${xpath}.${key}` : key) : void 0;
          return proItem({ val: properties[key], xpath: nxpath, key });
        })}
      </>
    );
  }

  function proItem({ val, key, xpath, root }: { val; key?; xpath?; root? }) {
    let jsx;
    if (val.type === 'array') {
      jsx = proAry(val.items, xpath);
    } else {
      if (val.type === 'object') {
        jsx = proObj(val.properties, xpath);
      }
    }

    const hasReturnSchema = !isEmpty(keys);
    const markedAsReturn =
      (!hasReturnSchema && root) ||
      (key && hasReturnSchema && keys?.includes(xpath));

    const showMark =
      xpath !== void 0 &&
      !excludeKeys.some((key) => xpath.startsWith(key) && key !== xpath);

    const showCancel =
	    key !== void 0 &&
      ((markedAsReturn && !root) ||
      ((keys.some((key: string) => xpath?.startsWith(key)) || !hasReturnSchema) &&
        !excludeKeys.some((key) => xpath.startsWith(key))));

    return (
      <div
        key={key}
        className={`${css.item} ${root ? css.rootItem : ''} ${
          markedAsReturn ? css.markAsReturn : ''
        }`}
      >
        {markedAsReturn ? <div className={css.marked}></div> : null}
        {excludeKeys.includes(xpath) && key ? (
          <div className={css.exclude}></div>
        ) : null}
        <div className={css.keyName}>
          {key}
          <span className={css.typeName}>({getTypeName(val.type)})</span>
          {showMark && key ? (
            <button
              onClick={(e) => {
                popMark(e, xpath);
                e.stopPropagation();
              }}
            >
              标记
            </button>
          ) : null}
          {showCancel ? (
            <button
              onClick={(e) => {
                cancelMark(e, xpath);
                e.stopPropagation();
              }}
            >
              取消
            </button>
          ) : null}
        </div>
        {jsx}
      </div>
    );
  }

  const popMark = useCallback((e, xpath) => {
    const btnEle = e.currentTarget;
    const parentPos = parentEleRef.current.getBoundingClientRect();
    const currentPos = btnEle.getBoundingClientRect();
    curKeyRef.current = xpath;
    setStyle({
      display: 'block',
      left: currentPos.x - parentPos.x,
      top: currentPos.y - parentPos.y + btnEle.offsetHeight,
    });
    defaultPanelContext.addBlurAry('return-schema', () => setStyle(void 0));
  }, []);

  const cancelMark = useCallback((e, xpath) => {
    setOutputKeys((keys: any[]) => {
      const outputkeys = [
        ...keys.filter((key: string) => key !== xpath),
      ].filter((key) => key !== '');
      if (!keys.some((key) => key === xpath)) {
        setExcludekeys((keys: string[]) => {
          const excludeKeys = [
            ...keys.filter(
              (key) => !(key.includes(xpath) || xpath.includes(key))
            ),
            xpath,
          ];
          onExcludeKeysChange(excludeKeys);
          return excludeKeys;
        });
      }
      onOutputKeysChange(outputkeys);
      return outputkeys;
    });
  }, []);

  const resetPopMenuStyle = useCallback((event) => {
    setStyle(void 0);
    defaultPanelContext.addBlurAry('return-schema', () => {});
    event.stopPropagation();
  }, []);

  if (error) {
    return (
      <div className={css.errorInfo}>
        <span>{error}</span>
        <div>{getErrorTips(error)}</div>
      </div>
    );
  }
  return schema ? (
    <div
      className={css.returnParams}
      ref={parentEleRef}
      onClick={resetPopMenuStyle}
    >
      <div>{proItem({ val: schema, xpath: '', root: true })}</div>
      <div className={css.popMenu} style={popMenuStyle}>
        <div className={css.menuItem} onClick={() => markAsReturn()}>
          返回内容
        </div>
        {/*<div className={css.menuItem}>错误判断</div>*/}
        {/*<div className={css.menuItem}>错误信息</div>*/}
      </div>
    </div>
  ) : (
    <div className={css.empty}>类型无效</div>
  );
}

function getTypeName(v: string) {
  switch (v) {
    case 'number':
      return '数字';
    case 'string':
      return '字符';
    case 'boolean':
      return '布尔';
    case 'object':
      return '对象';
    case 'array':
      return '列表';
  }
}

function getErrorTips(message: string) {
  if (message.includes('Network Error')) {
    return '请检查网络是否正常、当前请求是否存在跨域';
  }
  if (message.includes('404')) {
    return '请检查请求地址是否拼写错误';
  }
  return '';
}
