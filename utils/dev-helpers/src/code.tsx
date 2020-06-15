import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/cjs/styles/hljs";
export interface CodeProps extends Pick<React.HTMLAttributes<HTMLDivElement>, "className"> {
	code: string;
}
export const Code: React.FC<CodeProps> = ({ className, code }) => {
	return (
		<SyntaxHighlighter className={className} language="javascript" style={docco}>
			{code}
		</SyntaxHighlighter>
	);
};
