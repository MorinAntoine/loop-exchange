import Section from "./Section";
import { faq } from "../lib/data";

export default function FAQ() {
return (
<Section id="faq" title="FAQ">
<div className="grid gap-4">
{faq.map((f) => (
<details key={f.q} className="card">
<summary className="cursor-pointer text-lg font-medium">{f.q}</summary>
<p className="mt-2 text-slate-700">{f.a}</p>
</details>
))}
</div>
</Section>
);
}
