import React from "react";

export interface CodeProps extends React.HTMLAttributes<HTMLPreElement> {
	code: string;
}

export const Code: React.FC<CodeProps> = ({ className, code }) => {
	return (
		<pre className={className}>
			<code>{code}</code>
		</pre>
	);
};
