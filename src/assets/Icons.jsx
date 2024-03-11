export function Mail({ className, ...rest }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 48 48"
			{...rest}
			className={`w-full h-auto ${className}`}>
			<g
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={4}>
				<path d="M44 24V9H4v30h20m20-5H30m9-5l5 5l-5 5"></path>
				<path d="m4 9l20 15L44 9"></path>
			</g>
		</svg>
	);
}

export function Security({ className, ...rest }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			{...rest}
			className={`w-full h-auto ${className}`}>
			<g
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={1.5}>
				<path d="M12 11.543A2.17 2.17 0 1 0 12 7.2a2.17 2.17 0 0 0 0 4.342m0 .001v3.256"></path>
				<path d="M20.672 11.89V6.61a1.928 1.928 0 0 0-1.32-1.831L14.438 3.14a7.805 7.805 0 0 0-4.876 0L4.648 4.778a1.927 1.927 0 0 0-1.32 1.83v5.28a7.709 7.709 0 0 0 3.603 6.524l4.048 2.544a1.927 1.927 0 0 0 2.042 0l4.047-2.544a7.708 7.708 0 0 0 3.604-6.523"></path>
			</g>
		</svg>
	);
}

export function Google({ className, ...rest }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={20}
			height={20}
			viewBox="0 0 48 48"
			{...rest}
			className={`w-full h-auto ${className}`}>
			<path
				fill="#ffc107"
				d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917"></path>
			<path
				fill="#ff3d00"
				d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691"></path>
			<path
				fill="#4caf50"
				d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44"></path>
			<path
				fill="#1976d2"
				d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917"></path>
		</svg>
	);
}
