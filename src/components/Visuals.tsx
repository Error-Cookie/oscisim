import { useContext } from "react";
import Box from "./Box";
import { OsciCtx } from "../App";

export default function Visuals() {
	const osciCtx = useContext(OsciCtx);
	const [animate, setAnimate] = osciCtx.animate;
	const [drawAmp, setDrawAmp] = osciCtx.drawAmp;
	const [showCircle, setShowCircle] = osciCtx.showCircle;
	const [oscillator, setOscillator] = osciCtx.oscillator;

	return (
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
				<option>Fadenpendel</option>
				<option>Federpendel 1</option>
				<option>Federpendel 2</option>
				<option>Unruh</option>
				<option>Saite</option>
			</select>
		</Box>
	);
}
