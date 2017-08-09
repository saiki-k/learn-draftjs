import React from 'react';

const PageContent = (props) => (
	<div id="page-content-wrapper">
		<div className="container-fluid">
			<div className="row">
				<div className="col-lg-12">
					<h1>{props.match.url}</h1>
					{ props.children }
				</div>
			</div>
		</div>
	</div>
);

export default PageContent;
