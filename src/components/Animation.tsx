import { useEffect, useRef } from "react";

export default function Animation({
	draw,
	w,
	h,
}: {
	draw: (ctx: CanvasRenderingContext2D) => void;
	w: number;
	h: number;
}) {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current!;
		const ctx = canvas.getContext("2d")!;

		const render = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			draw(ctx);

			window.requestAnimationFrame(render);
		};
		render();
	});
	return <canvas ref={canvasRef} width={w} height={h}></canvas>;
}
