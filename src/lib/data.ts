export const concept = {
title: "Nespresso LOOP Exchange",
tagline: "« Je rends une vide, je repars avec une pleine »",
bullets: [
"Chambre d’extraction permanente (sans capsule jetable).",
"Cartouches réutilisables consignées S (150 g ≈ 15 espressos) et M (300 g ≈ 30).",
"Dose gravimétrique 10 g / 15 g via vis d’Archimède scellée + purge N₂.",
"Marc: bac marron quand présent, sinon MarcBag remis en boutique.",
],
};

export const swapSteps = [
{ n: 1, title: "Dépose", text: "Apporte tes cartouches vides en boutique/kiosque." },
{ n: 2, title: "Scan & crédit", text: "RFID → libère un slot de consigne pour chaque vide rendue." },
{ n: 3, title: "Repars plein", text: "Choisis tes cartouches pleines et paye le café, pas la consigne." },
];

export const features = [
{ icon: "♻️", title: "Planète", text: "–80/–90 % de déchets d’emballage par tasse; marcs collectés → compost/biogaz." },
{ icon: "🏪", title: "Business", text: "Flux récurrents, visites boutique ↑, barrière à l’entrée via logistique inverse." },
{ icon: "👥", title: "Société", text: "Emplois locaux (hubs, kiosques), pédagogie du réemploi; crédibilité B Corp." },
];

export const kpis = [
{ label: "Taux retour cartouches", value: "≥ 92 %" },
{ label: "Cycles/cartouche/an", value: "≥ 10" },
{ label: "Part des tasses LOOP (24 mois)", value: "≥ 15 %" },
{ label: "Déchets d’emballage/tasse", value: "–80/–90 %" },
{ label: "Temps d’échange", value: "< 90 s" },
];

export const faq = [
{ q: "Pourquoi pas d’abonnement ?", a: "Le modèle privilégie l’échange 1-pour-1 en boutique pour la simplicité et la maîtrise des flux." },
{ q: "Que se passe-t-il si je perds une cartouche ?", a: "Tu conserves la cartouche, ta consigne est retenue; un slot se libère si tu en reprends une." },
{ q: "Hygiène et fraîcheur ?", a: "Hubs HACCP, lavage eau en boucle, cartouches remplies sous azote et purge N₂ à la dose." },
];
