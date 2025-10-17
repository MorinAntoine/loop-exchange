export default function Nav() {
return (
<nav className="sticky top-0 z-50 backdrop-blur bg-cream/75 border-b border-black/5">
<div className="container-xl flex items-center justify-between py-3">
<a href="#top" className="flex items-center gap-2 font-semibold">
<span className="text-deepgreen">Nespresso</span>
<span className="text-charcoal">LOOP Exchange</span>
</a>
<div className="hidden sm:flex items-center gap-6 text-sm">
<a href="#concept" className="hover:text-deepgreen">Concept</a>
<a href="#swap" className="hover:text-deepgreen">Échange 1-pour-1</a>
<a href="#impact" className="hover:text-deepgreen">Avantages</a>
<a href="#marcbag" className="hover:text-deepgreen">MarcBag</a>
<a href="#kpi" className="hover:text-deepgreen">KPI</a>
<a href="#faq" className="hover:text-deepgreen">FAQ</a>
</div>
<a href="#cta" className="btn btn-primary">Tester en zone pilote</a>
</div>
</nav>
);
}
