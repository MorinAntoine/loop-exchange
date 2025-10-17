import Section from "./Section";
import { features } from "../lib/data";

export default function Features() {
return (
<Section id="impact" title="Avantages & impacts positifs" intro="Business, planète, société — sans renier l’ADN espresso.">
<div className="grid sm:grid-cols-3 gap-6">
{features.map((f) => (
<div key={f.title} className="card">
<div className="text-3xl">{f.icon}</div>
<h3 className="mt-3 text-xl font-semibold">{f.title}</h3>
<p className="mt-2 text-slate-700">{f.text}</p>
</div>
))}
</div>
</Section>
);
}
