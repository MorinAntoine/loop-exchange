import { ReactNode } from "react";

export default function Section({ id, title, intro, children }: { id?: string; title?: string; intro?: string; children: ReactNode }) {
return (
<section id={id} className="section">
<div className="container-xl">
{title && (
<header className="mb-8">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">{title}</h2>
{intro && <p className="mt-2 text-lg text-slate-700">{intro}</p>}
</header>
)}
{children}
</div>
</section>
);
}
