import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
	render() {
		return (
			<div
				id="wrapper"
				className="sidebar-open"
				ref={c => { this.wrapper = c; }}
			>
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

				<div id="page-content-wrapper">
					<div className="container-fluid">
						<div className="row">
							<div className="col-lg-12">
								<h1>Learn DraftJS</h1>
								<p>This is the starter template!</p>
								<p>Let's create some kick-ass <code>draft-js</code> tutorials.</p>
								<a
									className="btn btn-default"
									id="sidebar-toggle"
									onClick={(e) => {
										e.preventDefault();
										this.wrapper.classList.toggle('sidebar-open');
									}}
								>
									Toggle Sidebar
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
