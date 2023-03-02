import ReactMarkdown from "react-markdown";
import remarkDirective from "remark-directive";
import remarkDirectiveRehype from "remark-directive-rehype";
import { MermaidClient } from "~/components/mermaid";

declare global {
	namespace JSX {
		interface IntrinsicElements {
			mermaid: { children: string };
		}
	}
}

interface Props {
	content: string;
}

export function MarkDown({ content }: Props) {
	return (
		<div className="markdown-prose">
			<p>Mermaid hardcoded 1</p>
			<MermaidClient
				children={`
				graph TD;
					A-->B;
					A-->C;
					B-->D;
					C-->D;
			`}
			/>
			<p>Mermaid hardcoded 2</p>
			<MermaidClient
				children={`
				sequenceDiagram
				  Alice->>John: Hello John, how are you?
				  John-->>Alice: Great!
				  Alice-)John: See you later!		
			`}
			/>
			<p>Mermaid hardcoded 3</p>
			<MermaidClient
				children={`
				sequenceDiagram
				  Alice->>John: Hello John, how are you?
				  John-->>Alice: Great!
				  Alice-)John: See you later!		
			`}
			/>
			<p>Mermaid hardcoded 4</p>
			<MermaidClient
				children={`
				sequenceDiagram
				  Alice->>John: Hello John, how are you?
				  John-->>Alice: Great!
				  Alice-)John: See you later!		
			`}
			/>
			<ReactMarkdown
				components={{
					mermaid: MermaidClient,
				}}
				children={content}
				remarkPlugins={[
					remarkDirective,
					remarkDirectiveRehype,
				]}
      />
		</div>
	);
}