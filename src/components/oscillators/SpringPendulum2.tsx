import { useContext } from "react";
import { OsciCtx } from "../../App";
import { osciFuncY } from "../../util/oscifunc";
import Animation from "./Animation";

export default function SpringPendulum2() {
	const osciCtx = useContext(OsciCtx);
	const [amp] = osciCtx.amp;
	const [freq] = osciCtx.freq;
	const [animate] = osciCtx.animate;

	const y = osciFuncY(amp, freq, animate);

	const draw = (ctx: CanvasRenderingContext2D) => {
		const w = ctx.canvas.width;
		const h = ctx.canvas.height;

		ctx.beginPath();

		// spring
		const springY = (i: number) => h / 2 + ((i % 2) * 30 - 15);
		const springXa = (i: number) => (i / 15) * y(0) + (i / 15) * 130;
		const springXb = (i: number) => (i / 15) * y(0) - (i / 15) * 130 + w;

		const middle = springXa(15) + 20;

		// left spring
		for (let i = 0; i < 15; i++) ctx.lineTo(springXa(i), springY(i));
		ctx.lineTo(springXa(15), h / 2);

		ctx.moveTo(w, h / 2);

		// right spring
		for (let i = 0; i < 15; i++) ctx.lineTo(springXb(i), springY(i));
		ctx.lineTo(springXb(15), h / 2);

		// weight
		ctx.arc(middle, h / 2, 20, 0, 360);

		ctx.stroke();

		// elongation
		ctx.beginPath();
		ctx.save();
		ctx.strokeStyle = "#888";
		ctx.moveTo(w / 2, h / 2 + 27);
		ctx.lineTo(w / 2, h / 2 + 30);
		ctx.lineTo(middle, h / 2 + 30);
		ctx.lineTo(middle, h / 2 + 27);
		ctx.stroke();
		ctx.restore();
	};

	return <Animation draw={draw} />;
}
