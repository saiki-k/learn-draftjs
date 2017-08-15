import React from 'react';
import HamburgerIcon from './HamburgerIcon';

const PageContainer = (props) => (
	<div id="page-content-wrapper">
		<div className="container-fluid">
			<div className="row">
				<div className="col-lg-12">
					<HamburgerIcon toggleSidebar={props.toggleSidebar}/>
					<h1>
						{props.match.url !== '/' ? props.match.url : '/hello'}
					</h1>
				</div>
			</div>
			{props.children}
		</div>
	</div>
);

export default PageContainer;
