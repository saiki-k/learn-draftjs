import React, { Component } from 'react';

export default class Sidebar extends Component {
	render() {
		return (
			<div id="sidebar-wrapper">
				<ul className="sidebar-nav">
					<li className="sidebar-main-item">
						<a href="#">
							Introduction
						</a>
					</li>

					<li className="sidebar-main-item">
						<a href="#">
							The Data Model
						</a>
					</li>
					<li>
						<a href="#">Editor State</a>
					</li>
					<li>
						<a href="#">Selection State</a>
					</li>
					<li>
						<a href="#">Content State</a>
					</li>
					<li>
						<a href="#">Entities</a>
					</li>
					<li>
						<a href="#">Decorators</a>
					</li>

					<li className="sidebar-main-item">
						<a href="#">
							More DraftJS
						</a>
					</li>
					<li>
						<a href="#">Rich Utils</a>
					</li>
					<li>
						<a href="#">Inline Styles</a>
					</li>
					<li>
						<a href="#">Block Styling</a>
					</li>
				</ul>
			</div>
		);
	}
}
