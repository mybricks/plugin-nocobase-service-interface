import React, { FC } from 'react';

import styles from './index.less';

const Loading: FC = () => {
	return (
		<div className={styles.loadingContainer}>
			<div className={styles.loadingText}>
				加载中，请稍后...
			</div>
		</div>
	);
};

export default Loading;