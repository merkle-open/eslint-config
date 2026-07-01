// Integration test: ES2025 React code (JSX)
import React from 'react';

function Input({ label, value, name, disabled, onChange }) {
	return (
		<label>
			{label}
			<br />
			<input disabled={disabled} value={value} name={name} onChange={onChange} />
		</label>
	);
}

function Button({ children, onClick, type = 'button' }) {
	return (
		<button type={type} onClick={onClick}>
			{children}
		</button>
	);
}

export { Input, Button };
