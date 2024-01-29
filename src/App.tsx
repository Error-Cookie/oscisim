import { createContext, useState } from "react";
import WaveGraph from "./components/WaveGraph";
import FormulaGuide from "./components/FormulaGuide";
import ToneGenerator from "./components/ToneGenerator";
import OscillatorAnimation from "./components/OscillatorAnimation";
import Parameters from "./components/Parameters";
import Visuals from "./components/Visuals";

type State<T> = [T, React.Dispatch<React.SetStateAction<T>>];
type OsciCtxData = {
	animate: State<boolean>;
	amp: State<number>;
	freq: State<number>;
	drawAmp: State<boolean>;
	showCircle: State<boolean>;
	oscillator: State<string>;
};

export const OsciCtx = createContext<OsciCtxData>(null!);

export default function App() {
	const [animate, setAnimate] = useState(false);
	const [amp, setAmp] = useState(50);
	const [freq, setFreq] = useState(1);
	const [drawAmp, setDrawAmp] = useState(true);
	const [showCircle, setShowCircle] = useState(true);
	const [oscillator, setOscillator] = useState("Fadenpendel");

	return (
		<OsciCtx.Provider
			value={{
				animate: [animate, setAnimate],
				amp: [amp, setAmp],
				freq: [freq, setFreq],
				drawAmp: [drawAmp, setDrawAmp],
				showCircle: [showCircle, setShowCircle],
				oscillator: [oscillator, setOscillator],
			}}
		>
			<div className="m-4">
				<WaveGraph />
			</div>
			<div className="m-4 flex flex-row">
				<OscillatorAnimation />
				<Parameters />
				<Visuals />
			</div>
			<div className="m-4 flex flex-row">
				<FormulaGuide />
				<ToneGenerator />
			</div>
		</OsciCtx.Provider>
	);
}
