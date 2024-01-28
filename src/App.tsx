import { useState } from "react";
import Box from "./components/Box";
import WaveGraph from "./components/WaveGraph";

export default function App() {
	const [amp, setAmp] = useState(50);
	const [freq, setFreq] = useState(1);
	const [drawAmp, setDrawAmp] = useState(true);
	const [showCircle, setShowCircle] = useState(true);
	const [animate, setAnimate] = useState(false);

	return (
		<>
			<div className="m-5 flex flex-row">
				<Box>
					<WaveGraph
						amp={amp}
						freq={freq}
						drawAmp={drawAmp}
						showCircle={showCircle}
						animate={animate}
					/>
				</Box>
				<div className="mx-2"></div>
				<Box>
					<div className="divider my-1">PARAMETER</div>

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
						<div className="w-10 text-center">{amp / 20}</div>
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
						<div className="w-10 text-center">
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
						<div className="w-10 text-center">
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
						<div className="w-10 text-center">
							{(1 / freq).toFixed(1)}s
						</div>
					</div>
				</Box>
				<div className="mx-2"></div>
			</div>
			<div className="m-5 flex flex-row">
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
					<div className="form-control">
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
				</Box>
				<div className="mx-2"></div>
				<Box>
					<div className="divider my-1">FORMELN</div>
					<div className="text-lg text-center mb-1">
						y(t) &#61;{" "}
						<span
							className="tooltip tooltip-bottom border border-base-300 rounded-md p-1"
							data-tip="Amplitude ŷ"
						>
							ŷ
						</span>{" "}
						&#215; sin(2 &#215; &#960; &#215;{" "}
						<span
							className="tooltip tooltip-bottom border border-base-300 rounded-md p-1"
							data-tip="Frequenz f"
						>
							f
						</span>{" "}
						&#215; t)
					</div>
					<div className="text-lg text-center mb-1">
						y(t) &#61;{" "}
						<span
							className="tooltip tooltip-bottom border border-base-300 rounded-md p-1"
							data-tip="Amplitude ŷ"
						>
							ŷ
						</span>{" "}
						&#215; sin((2 &#215; &#960; &frasl;{" "}
						<span
							className="tooltip tooltip-bottom border border-base-300 rounded-md p-1"
							data-tip="Periodendauer T"
						>
							T
						</span>
						) &#215; t)
					</div>
					<div className="text-lg text-center">
						y(t) &#61;{" "}
						<span
							className="tooltip tooltip-bottom border border-base-300 rounded-md p-1"
							data-tip="Amplitude ŷ"
						>
							ŷ
						</span>{" "}
						&#215; sin(
						<span
							className="tooltip tooltip-bottom border border-base-300 rounded-md p-1"
							data-tip="Winkelgeschw. &#969;"
						>
							&#969;
						</span>{" "}
						&#215; t)
					</div>
				</Box>
			</div>
		</>
	);
}
