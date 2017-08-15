import React from 'react';

const HamburgerIcon = ({ toggleSidebar }) => (
	<img
		style={{ cursor: 'pointer' }}
		src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAqElEQVRYR+2W3Q2DMAyEP3agha2qskN3gm5RsVR/lqiMiJRETd+c8HB+TCTf+Wyf3NE4usb4iIAUiBW4AjNwdh7MD3ADHoYTE3hVAA+1vYEhJ/AMj84KWHordswJXPYWbB+OYeDWgjUn4IhZTq01PJQC8gEzh1OlVSj6wL2CG8oHki4fag0rzV8KEyswAQvQOzMp3gP24Q3+9x6QDzi3/nd6raEUaK7AF4DTHiGLgCMZAAAAAElFTkSuQmCC"
		alt="Hamburger Icon"
		onClick={() => toggleSidebar()}
	/>
);

export default HamburgerIcon
