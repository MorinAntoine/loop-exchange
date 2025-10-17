import Section from "./Section";

export default function Partners() {
  return (
    <Section id="concept" title="Contexte & cibles" intro="LOOP active les forces Nespresso : 800 boutiques / 93 pays, filières retour, B Corp, AAA.">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="card">
          <h3 className="text-lg font-semibold">B2C premium urbain</h3>
          <p className="mt-2 text-slate-700">Varie à la tasse, simplicité “capsule”, sans poubelle. Tailles S/M, dock 2–3 cartouches.</p>
        </div>
        <div className="card">
          <h3 className="text-lg font-semibold">B2B léger (≤ 50 pers.)</h3>
          <p className="mt-2 text-slate-700">Qualité constante, coûts prévisibles, geste RSE visible (kiosques/Express Swap).</p>
        </div>
        <figure className="sm:col-span-2">
          <img src="/images/cartridge-m.png" alt="Cartouche M dorée" className="block w-full h-auto rounded-2xl shadow mx-auto" />
        </figure>
      </div>
    </Section>
  );
}
