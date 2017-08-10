import React from 'react';

const PageContainer = (props) => (
	<div id="page-content-wrapper">
		<div className="container-fluid">
			<div className="row">
				<div className="col-lg-12">
					<h1>
						{props.match.url !== '/' ? props.match.url : '/intro'}
					</h1>
				</div>
			</div>
			{props.children}
		</div>
	</div>
);

export default PageContainer;
