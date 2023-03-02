import { MermaidClient } from "~/components/mermaid";

export default function Index() {
  return (
    <>
    <p>Mermaid hardcoded 1</p>
			<MermaidClient children={`
				graph TD;
					A-->B;
					A-->C;
					B-->D;
					C-->D;
			`} />
			<p>Mermaid hardcoded 2</p>
			<MermaidClient children={`
				sequenceDiagram
				  Alice->>John: Hello John, how are you?
				  John-->>Alice: Great!
				  Alice-)John: See you later!		
			`} />
			<p>Mermaid hardcoded 3</p>
			<MermaidClient children={`
				sequenceDiagram
				  Alice->>John: Hello John, how are you?
				  John-->>Alice: Great!
				  Alice-)John: See you later!		
			`} />
			<p>Mermaid hardcoded 4</p>
			<MermaidClient children={`
				sequenceDiagram
				  Alice->>John: Hello John, how are you?
				  John-->>Alice: Great!
				  Alice-)John: See you later!		
			`} />
    </>
  );
}