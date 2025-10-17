export default function Footer() {
  return (
    <footer className="py-10 bg-charcoal text-white">
      <div className="container-xl flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/80">Projet étudiant — démonstration non officielle.</p>
          <nav className="text-sm flex gap-4">
            <a href="#concept" className="hover:underline">Concept</a>
            <a href="#swap" className="hover:underline">Échange</a>
            <a href="#marcbag" className="hover:underline">MarcBag</a>
          </nav>
        </div>

        <div className="h-px bg-white/10" aria-hidden />

        {/* Crédit étudiant */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src="/images/gem.png"
              alt="Grenoble Ecole de Management (GEM)"
              className="h-8 w-auto rounded-sm bg-white"
            />
            <p className="text-sm text-white/90">
              Projet de <strong>Antoine Morin</strong> — <span className="whitespace-nowrap">L3 SHN</span> — Programme Grande École GEM
            </p>
          </div>
          <div className="text-sm text-white/70">
            © {new Date().getFullYear()} — Nespresso LOOP Exchange (concept demo)
          </div>
        </div>
      </div>
    </footer>
  );
}
