import Section from "./Section";

export default function MarcBag() {
  return (
    <Section id="marcbag" title="MarcBag — zéro friction pour le marc" intro="Tu déposes ton MarcBag en entrant en boutique, en même temps que l’échange.">
      <div className="grid sm:grid-cols-2 gap-6 items-center">
        <figure>
          <img src="/images/marcbag.png" alt="MarcBag Nespresso" className="block w-full h-auto rounded-2xl shadow" />
        </figure>
        <div className="card">
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Le marc devient <strong>compost</strong> ou <strong>biogaz</strong> selon la région.</li>
            <li><strong>Un seul trajet</strong> : tu viens déjà pour l’échange.</li>
            <li>Trappe “grounds only” en boutique; hubs locaux, eau en boucle fermée.</li>
          </ul>
          <div className="mt-4 text-sm text-slate-600">Option bac marron si présent dans ta ville.</div>
        </div>
      </div>
    </Section>
  );
}
