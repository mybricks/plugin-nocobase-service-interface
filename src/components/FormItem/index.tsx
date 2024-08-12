import React from 'react';
import css from './index.less';

export default function Input({
  label: title,
  require,
	contentStyle,
  children
}: any) {
  return (
    <div className={css.item}>
      <label>
        {require ? <i>*</i> : null}
        {title}
      </label>
      <div className={css.content} style={contentStyle}>
        {children}
      </div>
    </div>
  );
}
