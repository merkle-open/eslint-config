import React from 'react';

interface IInputProps {
	label: string;
	value?: string;
	name: string;
	disabled?: boolean;
	onChange: React.HTMLProps<HTMLInputElement>['onChange'];
}

export function Input({ label, value = '', name, disabled, onChange }: IInputProps) {
	return (
		<label>
			{label}
			<br />
			<input
				disabled={disabled}
				value={value}
				name={name}
				onChange={onChange}
			/>
		</label>
	);
}
