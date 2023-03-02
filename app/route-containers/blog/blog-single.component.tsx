import { PostSingle } from "~/templetes/post-single";

export default function Page() {
	const body = `## Mermaid as shortcode ::mermaid[graph TD;A-->B;A-->C;B-->D;C-->D;] ## 2nd Mermaid as shortcode ::mermaid[flowchart TD;Start-->Stop;]`
	return (
		<PostSingle data={body} />
	);
}