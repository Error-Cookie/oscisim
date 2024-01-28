import { text } from "./text";

export const plot = (
	f: (x: number) => number,
	from: number,
	to: number,
	ctx: CanvasRenderingContext2D,
	xlabel: string = "x",
	ylabel: string = "y",
) => {
	const w = ctx.canvas.width;
	const h = ctx.canvas.height;

	ctx.beginPath();
	ctx.strokeStyle = "#888";

	// x axis
	ctx.moveTo(0, h / 2);
	ctx.lineTo(w, h / 2);
	for (let i = 1; i <= to; i++) {
		const x = i * (w / to);
		ctx.moveTo(x, h / 2 - 3);
		ctx.lineTo(x, h / 2 + 3);
		text(i.toString(), x, h / 2 + 10, ctx, 11);
	}
	text(
		xlabel,
		ctx.canvas.width - 5,
		ctx.canvas.height / 2 + 20,
		ctx,
		16,
		"right",
	);

	// y axis
	ctx.moveTo(1, 0);
	ctx.lineTo(1, h);
	for (let i = 0; i <= 10; i++) {
		const y = i * (h / 10);
		ctx.moveTo(1, y);
		ctx.lineTo(4, y);
		if (i != 5) text((5 - i).toString(), 10, y + 2, ctx, 11);
	}
	text(ylabel, 22, 8, ctx, 16, "left");

	ctx.stroke();

	// draw function
	ctx.beginPath();
	ctx.strokeStyle = "#000";
	ctx.moveTo(0, h / 2);
	for (let i = 0; i < w; i++) {
		const x = i / (w / (to - from));
		ctx.lineTo(i, f(x) + h / 2);
	}

	ctx.stroke();
};

export const plotAmp = (amp: number, ctx: CanvasRenderingContext2D) => {
	ctx.save();
	ctx.setLineDash([5, 3]);
	ctx.beginPath();
	ctx.moveTo(0, ctx.canvas.height / 2 + amp);
	ctx.lineTo(ctx.canvas.width, ctx.canvas.height / 2 + amp);
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(0, ctx.canvas.height / 2 - amp);
	ctx.lineTo(ctx.canvas.width, ctx.canvas.height / 2 - amp);
	ctx.stroke();
	ctx.restore();
};
