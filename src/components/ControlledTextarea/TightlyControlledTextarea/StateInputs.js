import React from 'react';
const StateInputs = (props) => (
	<div>
		<hr />
		<div className="row">
			<div className="col-lg-12">
				<h4>State Inputs</h4>
			</div>
			<div className="col-lg-3">
				<input
					ref={ c => { this.contentInput = c; }}
					type="text"
					className="form-control"
					placeholder="Content"
				/>
			</div>
			<div className="col-lg-3">
				<input
					ref={ c => { this.startOffsetInput = c; }}
					type="number"
					className="form-control"
					placeholder="Start Offset"
				/>
			</div>
			<div className="col-lg-3">
				<input
					ref={ c => { this.endOffsetInput = c; }}
					type="number"
					className="form-control"
					placeholder="End Offset"
				/>
			</div>
			<div className="col-lg-3">
				<button
					className="btn btn-default"
					onClick={() => props.setStateInputs({
						content: this.contentInput.value,
						selection: {
							startOffset: this.startOffsetInput.value,
							endOffset: this.endOffsetInput.value,
						}
					})}
				>
					Set State
				</button>
			</div>
		</div>
	</div>
);

export default StateInputs;
