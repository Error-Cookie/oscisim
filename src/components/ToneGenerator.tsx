import { useEffect, useState } from "react";
import Box from "./Box";

const ctx = new AudioContext();
let osc: OscillatorNode;
const vol = ctx.createGain();

export default function ToneGenerator() {
	const [freq, setFreq] = useState(123);
	const [amp, setAmp] = useState(0);
	const [on, setOn] = useState(false);

	if (osc) osc.frequency.value = freq;
	vol.gain.value = amp;

	useEffect(() => {
		if (!on) return;

		osc = ctx.createOscillator();
		osc.type = "sine";
		osc.frequency.value = freq;
		vol.gain.value = amp;
		osc.connect(vol).connect(ctx.destination);
		osc.start();

		return () => {
			vol.gain.value = 0;
			osc.stop();
			vol.disconnect();
			osc.disconnect();
		};
	}, [on]);

	return (
		<Box>
			<div className="divider mt-1 mb-4">TON GENERATOR</div>
			<div className="flex flex-col">
				<div className="join">
					<input
						type="number"
						defaultValue={123}
						style={freq == 0 ? { borderColor: "red" } : {}}
						className="input max-w-36 input-bordered join-item text-xl border-black rounded-xl mb-3"
						onInput={(e) => {
							setFreq(+(e.target as HTMLInputElement).value);
						}}
					/>
					<div className="btn btn-ghost border-black text-xl rounded-xl join-item">
						Hz
					</div>
				</div>

				<div className="label-text">Amplitude (Lautstärke):</div>
				<div className="flex flex-row mb-3">
					<input
						type="range"
						min={0}
						max={100}
						value={amp * 100}
						className="range mr-2"
						onChange={(v) => setAmp(+v.target.value / 100)}
					/>
					<div className="w-14 text-center">{amp}</div>
				</div>

				<div className="flex flex-row justify-between">
					<button
						className="btn join-item btn-success rounded-md border-black"
						onClick={() => setOn(true)}
					>
						Start
					</button>
					<button
						className="btn join-item btn-error rounded-md border-black"
						onClick={() => setOn(false)}
					>
						Stop
					</button>
				</div>
			</div>
		</Box>
	);
}
