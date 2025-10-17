import { motion } from "framer-motion";
import Section from "./Section";
import { swapSteps } from "../lib/data";

export default function SwapSteps() {
return (
<Section id="swap" title="Échange 1-pour-1" intro="Simple comme bonjour : tu rends tes vides, tu repars avec des pleines.">
<div className="grid sm:grid-cols-3 gap-6">
{swapSteps.map((s, i) => (
<motion.div key={s.n} className="card" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
<div className="badge">Étape {s.n}</div>
<h3 className="mt-3 text-xl font-semibold">{s.title}</h3>
<p className="mt-2 text-slate-700">{s.text}</p>
</motion.div>
))}
</div>
<p className="mt-6 text-sm text-slate-600">Anti-sur-consigne : ton compte possède un nombre limité de “slots”. Pour prendre une pleine, tu rends une vide.</p>
</Section>
);
}
