import React, { useState, useCallback, useEffect, FC } from 'react';

import css from './index.less';

const Dropdown: FC<any> = ({ dropDownStyle, children, overlay, onBlur }) => {
  const [visible, setVisible] = useState(false);
  const onClick = useCallback(event => {
	  event.stopPropagation();
    setVisible(visible => !visible);
  }, [])
	
	useEffect(() => {
		onBlur?.(() => setVisible(false));
	}, []);
	
  return (
    <div className={css.dropdown}>
      <div onClick={onClick}>{children}</div>
      <div style={dropDownStyle} className={css.content}>
        {visible ? overlay : null}
      </div>
    </div>
  );
};
export default Dropdown;