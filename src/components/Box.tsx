import { PropsWithChildren } from "react";

export default function Box({ children }: PropsWithChildren) {
	return (
		<div className="border-2 border-base-content rounded-md p-3 inline-block shadow-xl">
			{children}
		</div>
	);
}
