import React from 'react';

const ConsoleButtons = ({ buttons }) => (
	<div>
		<hr/>
		<div className="btn-group" role="group" aria-label="...">
			{buttons.map(button => (
				<button
					key={button.text}
					type="button"
					className="btn btn-default"
					onClick={button.onClick}
				>
					{button.text}
				</button>
			))}
		</div>
	</div>

);

export default ConsoleButtons;
