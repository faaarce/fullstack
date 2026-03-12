import type React from "react";

interface ButtonProps {
	children: React.ReactNode;
}

export const Button = (props: ButtonProps) => {
	return (
		<button type="button" className="bg-indigo-600 text-white p-2 rounded-lg">
			{props.children}
		</button>
	);
};
