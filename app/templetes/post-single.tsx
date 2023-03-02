import { MarkDown } from "~/components/markdown";

export function PostSingle({
	data,
}: {
	data: string;
}) {

	return (
		<>
			{data ? <MarkDown content={data} /> : null}
		</>
	);
}
