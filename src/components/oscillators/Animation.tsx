import { useContext, useEffect, useRef } from "react";
import { OsciCtx } from "../../App";

export default function Animation({ draw }: { draw: (ctx: CanvasRenderingContext2D) => void }) {
	const [animate] = useContext(OsciCtx).animate;
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const ctx = canvasRef.current?.getContext("2d")!;
		let animFrame: number;

		const loop = () => {
			ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
			draw(ctx);
			if (animate) animFrame = window.requestAnimationFrame(loop);
		};

		loop();

		return () => window.cancelAnimationFrame(animFrame);
	}, [animate, draw]);

	return <canvas ref={canvasRef} width={300} height={200}></canvas>;
}
