import { Mermaid } from "~/components/mermaid";
import { ClientOnly } from "remix-utils";

export default function Index() {
  return (
    <>
		<ClientOnly>{() =>
		<>
    <p>Mermaid hardcoded 1</p>
			<Mermaid children={`
				graph TD;
					A-->B;
					A-->C;
					B-->D;
					C-->D;
			`} />
			<p>Mermaid hardcoded 2</p>
			<Mermaid children={`
				sequenceDiagram
				  Alice->>John: Hello John, how are you?
				  John-->>Alice: Great!
				  Alice-)John: See you later!		
			`} />
			<p>Mermaid hardcoded 3</p>
			<Mermaid children={`
				sequenceDiagram
				  Alice->>John: Hello John, how are you?
				  John-->>Alice: Great!
				  Alice-)John: See you later!		
			`} />
			<p>Mermaid hardcoded 4</p>
			<Mermaid children={`
				sequenceDiagram
				  Alice->>John: Hello John, how are you?
				  John-->>Alice: Great!
				  Alice-)John: See you later!		
			`} />
			</>
			}</ClientOnly>
    </>
  );
}