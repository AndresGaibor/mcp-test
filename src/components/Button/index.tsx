import React from 'react';

interface ButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
	variant?: 'primary' | 'secondary' | 'outline';
	size?: 'small' | 'medium' | 'large';
	disabled?: boolean;
	type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
	children,
	onClick,
	variant = 'primary',
	size = 'medium',
	disabled = false,
	type = 'button'
}) => {
	const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
	
	const variantClasses = {
		primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
		secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
		outline: 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-blue-500'
	};

	const sizeClasses = {
		small: 'px-3 py-2 text-sm',
		medium: 'px-4 py-2 text-base',
		large: 'px-6 py-3 text-lg'
	};

	const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';

	const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses}`;

	return (
		<button
			type={type}
			onClick={onClick}
			disabled={disabled}
			className={classes}
		>
			{children}
		</button>
	);
};

export default Button;