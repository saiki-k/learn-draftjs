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
			<li>
				<Link to={`${match.url}dependencies`}>Dependencies</Link>
			</li>
			<li>
				<Link to={`${match.url}simplest-editor`}>Simplest Editor</Link>
			</li>

			<li className="sidebar-main-item">
				<Link to={`${match.url}data-model`}>
					The Data Model
				</Link>
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
				<Link to={`${match.url}utils`}>
					Utils
				</Link>
			</li>
		</ul>
	</div>
);

export default Sidebar;
