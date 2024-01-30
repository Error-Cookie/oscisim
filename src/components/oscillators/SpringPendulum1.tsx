import { useContext } from "react";
import { OsciCtx } from "../../App";
import { osciFuncY } from "../../util/oscifunc";
import Animation from "./Animation";

export default function SpringPendulum1() {
	const osciCtx = useContext(OsciCtx);
	const [amp] = osciCtx.amp;
	const [freq] = osciCtx.freq;
	const [animate] = osciCtx.animate;

	const y = osciFuncY(amp, freq, animate);

	const draw = (ctx: CanvasRenderingContext2D) => {
		const w = ctx.canvas.width;

		// spring top
		ctx.beginPath();
		ctx.moveTo(w / 2, 0);
		ctx.lineTo(w / 2, 10);
		ctx.lineTo(w / 2 - 15, 10);

		// spring
		const springX = (i: number) => w / 2 + ((i % 2) * 30 - 15);
		const springY = (i: number) => (i / 15) * y(0) + (i / 15) * 100 + 10;

		for (let i = 0; i < 15; i++) ctx.lineTo(springX(i), springY(i));

		const ymax = springY(15);

		// spring end + weight
		ctx.lineTo(w / 2, ymax);
		ctx.moveTo(w / 2 + 20, ymax + 15);
		ctx.arc(w / 2, ymax + 15, 20, 0, 360);
		ctx.stroke();

		// elongation
		ctx.beginPath();
		ctx.save();
		ctx.strokeStyle = "#888";
		ctx.moveTo(w / 2 + 53, 110);
		ctx.lineTo(w / 2 + 50, 110);
		ctx.lineTo(w / 2 + 50, ymax);
		ctx.lineTo(w / 2 + 53, ymax);
		ctx.stroke();
		ctx.restore();
	};

	return <Animation draw={draw} />;
}
