import { useEffect, useRef } from "react";
import { plot, plotAmp } from "../util/plot";
import { text } from "../util/text";

export default function WaveGraph({
	amp,
	freq,
	drawAmp,
	showCircle,
	animate,
	y,
}: {
	amp: number;
	freq: number;
	drawAmp: boolean;
	showCircle: boolean;
	animate: boolean;
	y: (t: number) => number;
}) {
	const plotCanvasRef = useRef<HTMLCanvasElement>(null);
	const circleCanvasRef = useRef<HTMLCanvasElement>(null);

	// required for plotting the circle
	const x = (t: number) =>
		-amp *
		Math.cos(
			2 * Math.PI * freq * (t + (animate ? performance.now() / 1000 : 0)),
		);

	useEffect(() => {
		let animFrame: number | undefined;

		const draw = () => {
			const start = performance.now();

			// canvas setup
			const ctx = plotCanvasRef.current!.getContext("2d")!;
			const w = ctx.canvas.width;
			const h = ctx.canvas.height;
			ctx.clearRect(0, 0, w, h);

			plot(y, 0, 5, ctx, "t in s", "y");
			text(
				`y(t) = ${(amp / 20).toFixed(2)} * sin(2 * π * ${freq.toFixed(2)}Hz * t)`,
				w - 5,
				h - 10,
				ctx,
				15,
				"right",
			);

			if (showCircle) {
				const ctx = circleCanvasRef.current?.getContext("2d");
				if (ctx) {
					const w = ctx.canvas.width;
					const h = ctx.canvas.height;
					ctx.clearRect(0, 0, w, h);

					// circle
					ctx.beginPath();
					ctx.arc(w / 2, h / 2, amp, 0, 360);
					ctx.stroke();

					// middle dot
					ctx.beginPath();
					ctx.arc(w / 2, h / 2, 5, 0, 360);
					ctx.stroke();

					// projection line
					ctx.beginPath();
					ctx.moveTo(w / 2, h / 2);
					ctx.lineTo(w / 2 + x(0), h / 2 + y(0));
					ctx.arc(w, h / 2 + y(0), 3, 0, 360);
					ctx.stroke();

					// x/y axis
					ctx.beginPath();
					ctx.moveTo(w / 2, h / 2 + amp);
					ctx.lineTo(w / 2, h / 2 - amp);
					ctx.moveTo(w / 2 + amp, h / 2);
					ctx.lineTo(w / 2 - amp, h / 2);
					ctx.stroke();
					if (drawAmp) plotAmp(amp, ctx);
				}
			}

			if (drawAmp) plotAmp(amp, ctx);

			if (animate) {
				// debug frame time
				text(
					(performance.now() - start).toFixed(1).toString() + "ms",
					w - 20,
					20,
					ctx,
					11,
					"right",
				);
				animFrame = window.requestAnimationFrame(draw); // create animation loop
			}
		};

		draw();

		return () => void (animFrame && window.cancelAnimationFrame(animFrame));
	}, [amp, freq, drawAmp, showCircle, animate]);

	return (
		<div className="flex flex-row">
			{showCircle && (
				<canvas ref={circleCanvasRef} width={200} height={200}></canvas>
			)}
			<canvas ref={plotCanvasRef} width={800} height={200}></canvas>
		</div>
	);
}
