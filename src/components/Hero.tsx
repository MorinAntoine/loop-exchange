import { motion } from "framer-motion";
import { concept } from "../lib/data";

export default function Hero() {
  return (
    <header id="top" className="relative overflow-hidden bg-charcoal text-white">
      <div className="container-xl py-20 sm:py-28 grid gap-10 sm:grid-cols-2 items-center">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <span className="badge">Capsule-like • Waste-free</span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-semibold">{concept.title}</h1>
          <p className="mt-3 text-gold text-lg">{concept.tagline}</p>
          <ul className="mt-6 space-y-2 text-slate-200">
            {concept.bullets.map((b) => (
              <li key={b} className="flex gap-2"><span aria-hidden>•</span><span>{b}</span></li>
            ))}
          </ul>
          <div className="mt-8 flex gap-4">
            <a href="#swap" className="btn btn-primary">Voir l’échange</a>
            <a href="#impact" className="btn bg-white text-charcoal hover:opacity-90">Avantages</a>
          </div>
        </motion.div>

        <motion.figure
          className="relative"
          initial={{ opacity: 0, scale: .98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: .1 }}
        >
          <img
            src="/images/machine-loop.png"
            alt="Machine LOOP Exchange avec cartouche M"
            className="block w-full h-auto rounded-2xl shadow"
          />
          <figcaption className="sr-only">Machine LOOP Exchange</figcaption>
        </motion.figure>
      </div>
      <div aria-hidden className="absolute -bottom-24 right-0 w-64 h-64 rounded-full bg-gold/20 blur-3xl"></div>
    </header>
  );
}
