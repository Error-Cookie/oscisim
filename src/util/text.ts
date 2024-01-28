export const text = (
	txt: string,
	x: number,
	y: number,
	ctx: CanvasRenderingContext2D,
	fontSize: number = 16,
	align: CanvasTextAlign = "center",
) => {
	ctx.font = `${fontSize || 16}px Comfortaa`;
	ctx.textAlign = align || "center";
	ctx.fillText(txt, x, y);
};
