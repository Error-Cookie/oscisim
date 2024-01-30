import { useContext } from "react";
import Box from "./Box";
import Pendulum from "./oscillators/Pendulum";
import { OsciCtx } from "../App";
import SpringPendulum1 from "./oscillators/SpringPendulum1";
import SpringPendulum2 from "./oscillators/SpringPendulum2";
import BalanceWheel from "./oscillators/BalanceWheel";
import Chord from "./oscillators/Chord";

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
					<SpringPendulum2 />
				) : oscillator == "Unruh" ? (
					<BalanceWheel />
				) : oscillator == "Saite" ? (
					<Chord />
				) : (
					<></>
				)}
			</div>
		</Box>
	);
}
