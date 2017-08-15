import React from 'react';
const AddEntityInputs = (props) => (
	<div>
		<hr />
		<div className="row">
			<div className="col-lg-12">
				<h4>New Entity Inputs</h4>
			</div>
			<div className="col-lg-4">
				<input
					ref={ c => { this.mutabilityInput = c; }}
					type="text"
					className="form-control"
					placeholder="Mutability"
					value={props.addEntityInputs.mutability}
					onChange={() => props.setAddEntityInputs(
						Object.assign(
							{},
							props.addEntityInputs,
							{ mutability: this.mutabilityInput.value }
						)
					)}
				/>
			</div>
			<div className="col-lg-4">
				<input
					ref={ c => { this.typeInput = c; }}
					type="text"
					className="form-control"
					placeholder="Type"
					value={props.addEntityInputs.type}
					onChange={() => props.setAddEntityInputs(
						Object.assign(
							{},
							props.addEntityInputs,
							{ type: this.typeInput.value }
						)
					)}
				/>
			</div>
			<div className="col-lg-4">
				<input
					ref={ c => { this.dataInput = c; }}
					type="text"
					className="form-control"
					placeholder="Data"
					value={props.addEntityInputs.data}
					onChange={() => props.setAddEntityInputs(
						Object.assign(
							{},
							props.addEntityInputs,
							{ data: this.dataInput.value }
						)
					)}
				/>
			</div>
		</div>
	</div>
);

export default AddEntityInputs;
