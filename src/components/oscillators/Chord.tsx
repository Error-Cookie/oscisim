import { useContext } from "react";
import { OsciCtx } from "../../App";
import { osciFuncY } from "../../util/oscifunc";
import Animation from "./Animation";

export default function Chord() {
	const osciCtx = useContext(OsciCtx);
	const [amp] = osciCtx.amp;
	const [freq] = osciCtx.freq;
	const [animate] = osciCtx.animate;

	const y = osciFuncY(amp, freq, animate);

	const draw = (ctx: CanvasRenderingContext2D) => {
		const w = ctx.canvas.width;
		const h = ctx.canvas.height;

		ctx.beginPath();

		for (let i = 0; i < w; i++) ctx.lineTo(i, h / 2 + y(0) * Math.sin((Math.PI * i) / w));

		ctx.stroke();
	};

	return <Animation draw={draw} />;
}
