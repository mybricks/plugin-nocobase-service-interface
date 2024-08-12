import React, { useState, useCallback } from 'react';
import css from './index.less';

export default function Switch({
  defaultChecked = false,
  onChange,
}: any) {
  const [checked, setChecked] = useState<boolean>(defaultChecked);

  const onClick = useCallback(() => {
    setChecked((checked) => {
      onChange && onChange(!checked);
      return !checked;
    });
  }, []);

  return (
    <div className={css.ct}>
      <button
        onClick={onClick}
        className={`${css.switch} ${checked ? css.checked : ''}`}
      >
        <div className={css.handle}></div>
      </button>
    </div>
  );
}
