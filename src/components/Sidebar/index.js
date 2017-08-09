import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar= ({ match }) => (
	<div id="sidebar-wrapper">
		<ul className="sidebar-nav">
			<li className="sidebar-main-item">
				<Link to={`${match.url}`}>
					Introduction
				</Link>
			</li>

			<li className="sidebar-main-item">
				<Link to={`${match.url}data-model`}>
					The Data Model
				</Link>
			</li>
			<li>
				<Link to={`${match.url}editor-state`}>Editor State</Link>
			</li>
			<li>
				<Link to={`${match.url}selection-state`}>Selection State</Link>
			</li>
			<li>
				<Link to={`${match.url}content-state`}>Content State</Link>
			</li>
			<li>
				<Link to={`${match.url}entities`}>Entities</Link>
			</li>
			<li>
				<Link to={`${match.url}decorators`}>Decorators</Link>
			</li>

			<li className="sidebar-main-item">
				<Link to={`${match.url}more-draftjs`}>
					More DraftJS
				</Link>
			</li>
			<li>
				<Link to={`${match.url}rich-utils`}>Rich Utils</Link>
			</li>
			<li>
				<Link to={`${match.url}inline-styles`}>Inline Styles</Link>
			</li>
			<li>
				<Link to={`${match.url}block-styling`}>Block Styling</Link>
			</li>
		</ul>
	</div>
);

export default Sidebar;
