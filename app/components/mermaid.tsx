import React from "react";
import mermaid from "mermaid";
import { ClientOnly } from "remix-utils";

type MermaidProps = {
	children: string;
};

export function Mermaid({ children }: MermaidProps) {
	React.useEffect(() => {
		const renderDiagram = async () => {
			mermaid.initialize({
				startOnLoad: false,
			});
			await mermaid.run({
				querySelector: ".mermaid",
				//suppressErrors: true,
			});
		};
		renderDiagram();
	}, [children]);

	if (!children) return null;

	return <div className="mermaid">{children}</div>;
}

export function MermaidClient({ children }: MermaidProps) {
	return (
		<div>
			<ClientOnly>{() => <Mermaid children={children} />}</ClientOnly>
		</div>
	);
}