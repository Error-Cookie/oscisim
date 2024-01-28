import { useEffect, useState } from "react";

export default function Pendulum({ y }: { y: (t: number) => number }) {
	const [elong, setElong] = useState(0);

	useEffect(() => {
		let animFrame: number;

		const anim = () => {
			setElong(y(0));
			animFrame = window.requestAnimationFrame(anim);
		};
		anim();

		return () => window.cancelAnimationFrame(animFrame);
	});

	return (
		<img
			className="mx-auto"
			src="/pendulum.svg"
			style={{
				rotate: elong + "deg",
				transform: "rotate(" + elong + ")",
				transformOrigin: "40px 0px",
			}}
		/>
	);
}
