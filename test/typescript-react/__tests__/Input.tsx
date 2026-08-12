// Integration test: Real-world React component
import React from 'react';

interface InputProps {
	label: string;
	value?: string;
	name: string;
	disabled?: boolean;
	onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export function Input({ label, value = '', name, disabled, onChange }: InputProps) {
	return (
		<label>
			{label}
			<br />
			<input disabled={disabled} value={value} name={name} onChange={onChange} />
		</label>
	);
}

interface ButtonProps {
	children: React.ReactNode;
	onClick: () => void;
	type?: 'button' | 'submit' | 'reset';
}

export function Button({ children, onClick, type = 'button' }: ButtonProps) {
	return (
		<button type={type} onClick={onClick}>
			{children}
		</button>
	);
}
