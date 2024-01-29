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
        const h = ctx.canvas.height;

		const currY = (h / 2) * Math.cos(y(0) / 100);

        // spring top
        ctx.beginPath();
        ctx.moveTo(w / 2, 0);
        ctx.lineTo(w / 2, 20);
        ctx.stroke();

        // spring
		for (let i = 0; i < 10; i++) {
            ctx.beginPath();
            ctx.lineTo(w / 2 + (i % 2 == 0 ? 20 : -20), (20 + h / 2 + currY) / 10 * i);
            ctx.stroke();
        }
	};

	return <Animation draw={draw} />;
}
