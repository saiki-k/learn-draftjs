import React from 'react';

const PageContainer = (props) => (
	<div id="page-content-wrapper">
		<div className="container-fluid">
			{ props.children }
		</div>
	</div>
);

export default PageContainer;
