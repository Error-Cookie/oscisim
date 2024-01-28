import { useState } from "react";
import Box from "./components/Box";
import WaveGraph from "./components/WaveGraph";
import FormulaGuide from "./components/FormulaGuide";
import ToneGenerator from "./components/ToneGenerator";
import OscillatorAnimation from "./components/OscillatorAnimation";

export default function App() {
	const [amp, setAmp] = useState(50);
	const [freq, setFreq] = useState(1);
	const [drawAmp, setDrawAmp] = useState(true);
	const [showCircle, setShowCircle] = useState(true);
	const [animate, setAnimate] = useState(false);
	const [oscillator, setOscillator] = useState("Pendel");

	// used for plotting the oscillation, graph and circle
	const y = (t: number) =>
		amp *
		Math.sin(
			2 *
				Math.PI *
				freq *
				(-t + (animate ? performance.now() / 1000 : 0)),
		);

	return (
		<>
			<div className="m-4">
				<Box>
					<WaveGraph
						amp={amp}
						freq={freq}
						drawAmp={drawAmp}
						showCircle={showCircle}
						animate={animate}
						y={y}
					/>
				</Box>
			</div>
			<div className="m-4 flex flex-row">
				<OscillatorAnimation oscillator={oscillator} y={y} />
				<div className="mx-2"></div>
				<Box>
					<div className="divider my-1 w-60">PARAMETER</div>

					<div className="label-text">Amplitude ŷ:</div>
					<div className="flex flex-row">
						<input
							type="range"
							min={0}
							max={100}
							value={amp}
							className="range mr-2"
							onChange={(v) => setAmp(+v.target.value)}
						/>
						<div className="w-14 text-center">{amp / 20}</div>
					</div>

					<div className="label-text">Frequenz f:</div>
					<div className="flex flex-row">
						<input
							type="range"
							min={0}
							max={50}
							value={freq * 10}
							className="range mr-2"
							onChange={(v) => setFreq(+v.target.value / 10)}
						/>
						<div className="w-14 text-center">
							{freq.toFixed(1)}Hz
						</div>
					</div>
					<div className="label-text">Winkelgeschw. &#969;</div>
					<div className="flex flex-row">
						<input
							type="range"
							min={0}
							max={50}
							value={freq * 10}
							className="range mr-2"
							onChange={(v) => setFreq(+v.target.value / 10)}
						/>
						<div className="w-14 text-center">
							{(freq * 2).toFixed(1)}&#960;<sup>1</sup>&frasl;
							<sub>s</sub>
						</div>
					</div>
					<div className="label-text">Periodendauer T:</div>
					<div className="flex flex-row">
						<input
							type="range"
							min={0}
							max={100}
							value={(1 / freq) * 10}
							className="range mr-2"
							onChange={(v) =>
								setFreq((1 / +v.target.value) * 10)
							}
						/>
						<div className="w-14 text-center">
							{(1 / freq).toFixed(1)}s
						</div>
					</div>
				</Box>
				<div className="mx-2"></div>

				<Box>
					<div className="divider my-1">VISUELL</div>
					<div className="form-control">
						<label className="label cursor-pointer">
							<input
								type="checkbox"
								className="toggle mr-3"
								checked={animate}
								onChange={() => setAnimate(!animate)}
							/>
							<span className="label-text">Animieren</span>
						</label>
					</div>
					<div className="form-control">
						<label className="label cursor-pointer">
							<input
								type="checkbox"
								className="toggle mr-3"
								checked={drawAmp}
								onChange={() => setDrawAmp(!drawAmp)}
							/>
							<span className="label-text">Amplitude ŷ</span>
						</label>
					</div>
					<div className="form-control mb-1">
						<label className="label cursor-pointer">
							<input
								type="checkbox"
								className="toggle mr-3"
								checked={showCircle}
								onChange={() => setShowCircle(!showCircle)}
							/>
							<span className="label-text">Kreisprojektion</span>
						</label>
					</div>
					<select
						className="select select-bordered w-full max-w-xs"
						value={oscillator}
						onChange={(e) => setOscillator(e.target.value)}
					>
						<option>Pendel</option>
						<option>Federpendel 1</option>
						<option>Federpendel 2</option>
						<option>Unruh</option>
						<option>Saite</option>
					</select>
				</Box>
			</div>
			<div className="m-4 flex flex-row">
				<FormulaGuide />
				<div className="mx-2"></div>
				<ToneGenerator />
			</div>
		</>
	);
} // unruh, pendel, federpendel, saite
