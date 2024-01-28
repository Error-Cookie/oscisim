import Box from "./Box";

export default function FormulaGuide() {
	return (
		<Box>
			<div className="divider mt-1 mb-4">FORMELN</div>
			<div className="text-md text-center mb-1">
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
			<div className="text-md text-center mb-1">
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
			<div className="text-md text-center">
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
	);
}
