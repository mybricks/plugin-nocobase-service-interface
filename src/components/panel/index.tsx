import React, { FC, useEffect } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

let container = document.querySelector('[data-id=http-plugin-panel-root]');
if (!container) {
	container = document.createElement('div');
	container.setAttribute('data-id', 'http-plugin-panel-root');
	document.body.appendChild(container);
}
const PanelWrap: FC = props => {
	useEffect(() => {
		render(<>{props.children}</>, container);
		
		return () => {
			unmountComponentAtNode(container);
		};
	}, []);
	
	return null;
};

export default PanelWrap;
