import React from 'react';
const SelectionStateInputs = (props) => (
	<div>
		<hr />
		<div className="row">
			<div className="col-lg-12">
				<h4>SelectionState Inputs</h4>
			</div>
			<div className="col-lg-3">
				<div className="input-group">
					<input
						ref={ c => { this.anchorOffsetInput = c; }}
						type="number"
						className="form-control"
						placeholder="Anchor Offset"
						value={props.selectionStateInputs.anchorOffset}
						onChange={() => props.setSelectionStateInputs(
							Object.assign(
								{},
								props.selectionStateInputs,
								{ anchorOffset: this.anchorOffsetInput.value }
							)
						)}
					/>
				</div>
			</div>
			<div className="col-lg-3">
				<div className="input-group">
					<input
						ref={ c => { this.focusOffsetInput = c; }}
						type="number"
						className="form-control"
						placeholder="Focus Offset"
						value={props.selectionStateInputs.focusOffset}
						onChange={() => props.setSelectionStateInputs(
							Object.assign(
								{},
								props.selectionStateInputs,
								{ focusOffset: this.focusOffsetInput.value }
							)
						)}
					/>
				</div>
			</div>
			<div className="col-lg-3">
				<div className="input-group">
					<input
						ref={ c => { this.anchorKeyInput = c; }}
						type="text"
						className="form-control"
						placeholder="Anchor Key"
						value={props.selectionStateInputs.anchorKey}
						onChange={() => props.setSelectionStateInputs(
							Object.assign(
								{},
								props.selectionStateInputs,
								{ anchorKey: this.anchorKeyInput.value }
							)
						)}
					/>
				</div>
			</div>
			<div className="col-lg-3">
				<div className="input-group">
					<input
						ref={ c => { this.focusKeyInput = c; }}
						type="text"
						className="form-control"
						placeholder="Focus Key"
						value={props.selectionStateInputs.focusKey}
						onChange={() => props.setSelectionStateInputs(
							Object.assign(
								{},
								props.selectionStateInputs,
								{ focusKey: this.focusKeyInput.value }
							)
						)}
					/>
				</div>
			</div>
		</div>
	</div>
);

export default SelectionStateInputs;
