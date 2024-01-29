import { useContext } from "react";
import { osciFuncY } from "../../util/oscifunc";
import Animation from "./Animation";
import { OsciCtx } from "../../App";

export default function Pendulum() {
	const osciCtx = useContext(OsciCtx);
	const [amp] = osciCtx.amp;
	const [freq] = osciCtx.freq;
	const [animate] = osciCtx.animate;

	const y = osciFuncY(amp, freq, animate);

	const draw = (ctx: CanvasRenderingContext2D) => {
		const w = ctx.canvas.width;

		const currX = w / 2 + (w / 2) * Math.sin(y(0) / 100);
		const currY = (w / 2) * Math.cos(y(0) / 100);

		// guidelines
		ctx.beginPath();
		ctx.save();
		ctx.strokeStyle = "#aaa";
		ctx.setLineDash([5, 10]);
		ctx.arc(w / 2, 0, w / 2, 0, 360);
		ctx.stroke();
		ctx.restore();

		// pendulum
		ctx.beginPath();
		ctx.moveTo(w / 2, 0);
		ctx.lineTo(currX, currY);
		ctx.moveTo(currX + 20, currY);
		ctx.arc(currX, currY, 20, 0, 360);
		ctx.stroke();
	};

	return <Animation draw={draw} />;
}
