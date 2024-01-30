import { useContext } from "react";
import { OsciCtx } from "../../App";
import { osciFuncY } from "../../util/oscifunc";
import Animation from "./Animation";

export default function BalanceWheel() {
	const osciCtx = useContext(OsciCtx);
	const [amp] = osciCtx.amp;
	const [freq] = osciCtx.freq;
	const [animate] = osciCtx.animate;

	const y = osciFuncY(amp, freq, animate);

	const draw = (ctx: CanvasRenderingContext2D) => {
		const w = ctx.canvas.width;
		const h = ctx.canvas.height;

		const bridgeX = (a: number) => 80 * Math.cos(a);
		const bridgeY = (a: number) => 80 * Math.sin(a);

		// balance wheel
		ctx.beginPath();
		ctx.arc(w / 2, h / 2, 80, 0, 360);
		ctx.moveTo(w / 2 + 90, h / 2);
		ctx.arc(w / 2, h / 2, 90, 0, 360);
		ctx.moveTo(w / 2 + bridgeX(y(0) / 50 - 0.1), h / 2 + bridgeY(y(0) / 50 - 0.1));
		ctx.lineTo(w / 2 - bridgeX(y(0) / 50 + 0.1), h / 2 - bridgeY(y(0) / 50 + 0.1));
		ctx.moveTo(w / 2 + bridgeX(y(0) / 50 + 0.1), h / 2 + bridgeY(y(0) / 50 + 0.1));
		ctx.lineTo(w / 2 - bridgeX(y(0) / 50 - 0.1), h / 2 - bridgeY(y(0) / 50 - 0.1));
		ctx.stroke();

		// elongation
		ctx.beginPath();
		ctx.save();
		ctx.strokeStyle = "#888";
		ctx.arc(w / 2, h / 2, 95, 0, y(0) / 50, y(0) < 0);
		ctx.stroke();
		ctx.restore();
	};

	return <Animation draw={draw} />;
}
