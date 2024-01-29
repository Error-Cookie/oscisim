export const osciFuncY = (amp: number, freq: number, animate: boolean) => (t: number) =>
	amp * Math.sin(2 * Math.PI * freq * (-t + (animate ? performance.now() / 1000 : 0)));

export const osciFuncX = (amp: number, freq: number, animate: boolean) => (t: number) =>
	-amp * Math.cos(2 * Math.PI * freq * (t + (animate ? performance.now() / 1000 : 0)));
