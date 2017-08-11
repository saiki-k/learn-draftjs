import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Import styles
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import Sidebar from '../Sidebar';

import Introduction from '../DraftTuts/Introduction';
import Dependencies from '../DraftTuts/Dependencies';
import SimplestEditor from '../DraftTuts/SimplestEditor';

import DataModel from '../DraftTuts/DataModel';
import EditorState from '../DraftTuts/EditorState';
import SelectionState from '../DraftTuts/SelectionState';
import ContentState from '../DraftTuts/ContentState';
import Entities from '../DraftTuts/Entities';
import Decorators from '../DraftTuts/Decorators';

import Utils from '../DraftTuts/Utils';

const App = () => (
	<Router>
		<div
			id="wrapper"
			className="sidebar-open"
		>
			<Route path="/" component={Sidebar}/>

			<Route exact path="/" component={Introduction}/>
			<Route path="/dependencies" component={Dependencies}/>
			<Route path="/simplest-editor" component={SimplestEditor}/>
			<Route path="/data-model" component={DataModel}/>
			<Route path="/editor-state" component={EditorState}/>
			<Route path="/selection-state" component={SelectionState}/>
			<Route path="/content-state" component={ContentState}/>
			<Route path="/entities" component={Entities}/>
			<Route path="/decorators" component={Decorators}/>
			<Route path="/utils" component={Utils}/>
		</div>
	</Router>
);

export default App
