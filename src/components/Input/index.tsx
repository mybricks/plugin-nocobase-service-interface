import React from 'react';
import css from './index.less';

export default function Input({
  defaultValue,
  onChange,
  onBlur,
  validateError = '',
  placeholder,
  type = 'input',
}: any) {

  return (
    <div className={css.input}>
      <div
        className={`${css.editor} ${css.textEdt} ${
          validateError ? css.error : ''
        }`}
        data-err={validateError}
      >
        {type === 'input' ? (
          <input
            key={defaultValue}
            defaultValue={defaultValue}
            placeholder={placeholder}
            onBlur={onBlur}
            onChange={onChange}
          />
        ) : (
          <textarea
            key={defaultValue}
            defaultValue={defaultValue}
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur}
          />
        )}
      </div>
    </div>
  );
}

export function TextArea(props: any) {
  return Input({ ...props, type: 'textarea' });
}
