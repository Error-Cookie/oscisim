import { useContext } from "react";
import Box from "./Box";
import Pendulum from "./oscillators/Pendulum";
import { OsciCtx } from "../App";
import SpringPendulum1 from "./oscillators/SpringPendulum1";

export default function OscillatorAnimation() {
	const osciCtx = useContext(OsciCtx);
	const [oscillator] = osciCtx.oscillator;

	return (
		<Box>
			<div>
				{oscillator == "Fadenpendel" ? (
					<Pendulum />
				) : oscillator == "Federpendel 1" ? (
					<SpringPendulum1 />
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
