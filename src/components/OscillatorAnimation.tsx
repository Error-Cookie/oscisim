import Box from "./Box";
import Pendulum from "./oscillators/Pendulum";

export default function OscillatorAnimation({
	oscillator,
	y,
}: {
	oscillator: string;
	y: (t: number) => number;
}) {
	return (
		<Box>
			<div className="w-96">
				{oscillator == "Pendel" ? (
					<Pendulum y={y} />
				) : oscillator == "Federpendel 1" ? (
					<></>
				) : oscillator == "Federpendel 2" ? (
					<></>
				) : oscillator == "Unruh" ? (
					<></>
				) : oscillator == "Saite" ? (
					<></>
				) : (
					<></>
				)}
			</div>
		</Box>
	);
}
