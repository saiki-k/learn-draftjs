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
import SelectionState from '../DraftTuts/SelectionState';
import ContentState from '../DraftTuts/ContentState';
import Entities from '../DraftTuts/Entities';
import Decorators from '../DraftTuts/Decorators';

import Utils from '../DraftTuts/Utils';

import Examples from '../Examples';
import RichEditorExample from '../Examples/RichEditor';
import MediaEditorExample from '../Examples/MediaEditor';

import Textareas from '../Textareas';

const App = () => {
	let wrapperDivInstance;
	const toggleSidebar = () => wrapperDivInstance.classList.toggle('sidebar-open');
	const renderFn = (Component) => (props) => (<Component
		{...props}
		toggleSidebar={toggleSidebar}
	/>);
	return (
		<Router>
			<div
				id="wrapper"
				className="sidebar-open"
				ref={c => { wrapperDivInstance = c; }}
			>
				<Route path="/" component={Sidebar}/>

				<Route exact path="/" render={renderFn(Introduction)}/>
				<Route path="/dependencies" render={renderFn(Dependencies)}/>
				<Route path="/simplest-editor" render={renderFn(SimplestEditor)}/>

				<Route path="/data-model" render={renderFn(DataModel)}/>
				<Route path="/selection-state" render={renderFn(SelectionState)}/>
				<Route path="/content-state" render={renderFn(ContentState)}/>
				<Route path="/entities" render={renderFn(Entities)}/>
				<Route path="/decorators" render={renderFn(Decorators)}/>

				<Route path="/utils" render={renderFn(Utils)}/>

				<Route path="/examples" render={renderFn(Examples)}/>
				<Route path="/rich-editor-example" render={renderFn(RichEditorExample)}/>
				<Route path="/media-editor-example" render={renderFn(MediaEditorExample)}/>

				<Route path="/textareas" render={renderFn(Textareas)}/>
			</div>
		</Router>
	);
}

export default App
