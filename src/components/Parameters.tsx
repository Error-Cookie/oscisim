import { useContext } from "react";
import { OsciCtx } from "../App";
import Box from "./Box";

export default function Parameters() {
	const osciCtx = useContext(OsciCtx);
	const [amp, setAmp] = osciCtx.amp;
	const [freq, setFreq] = osciCtx.freq;

	return (
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
				<div className="w-14 text-center">{freq.toFixed(1)}Hz</div>
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
					onChange={(v) => setFreq((1 / +v.target.value) * 10)}
				/>
				<div className="w-14 text-center">{(1 / freq).toFixed(1)}s</div>
			</div>
		</Box>
	);
}
