import Summary from "../../models/Summary.tsx";

interface SummaryItemProps {
	readonly summary: Summary;
}
function SummaryItem({ summary }: SummaryItemProps) {
	return (
		<div className="summary-item">
			<div className="summary-item-title">{summary.title}</div>
			<div className="summary-item-text">{summary.text}</div>
		</div>
	);
}

interface SummaryDisplayProps {
	readonly summaries: Summary[];
}
export default function SummaryDisplay({ summaries }: SummaryDisplayProps) {
	return (
		<div className="display-current-list" id="summary-display">
			{summaries.map((summary) => (
				<SummaryItem summary={summary} key={summary.id} />
			))}
		</div>
	);
}
