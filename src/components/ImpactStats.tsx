import Section from "./Section";
import { kpis } from "../lib/data";

export default function ImpactStats() {
return (
<Section id="kpi" title="KPI zones pilotes (12–24 mois)">
<div className="grid sm:grid-cols-5 gap-4">
{kpis.map((k) => (
<div key={k.label} className="card text-center">
<div className="text-2xl font-semibold text-deepgreen">{k.value}</div>
<div className="mt-1 text-sm text-slate-600">{k.label}</div>
</div>
))}
</div>
</Section>
);
}
