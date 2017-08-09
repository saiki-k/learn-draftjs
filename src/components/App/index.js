import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import './index.css';
import Sidebar from '../Sidebar';

class App extends Component {
	render() {
		return (
			<div
				id="wrapper"
				className="sidebar-open"
				ref={c => { this.wrapper = c; }}
			>
				<Sidebar />
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
