# L'Atelier du Pizzaiolo — site vitrine (offre Grow)

Site démo React (Vite) bilingue **FR / AR (RTL)** pour la pizzeria L'Atelier du Pizzaiolo (Alger).
Parcours de conversion : **Home → Menu → Commander → WhatsApp**, avec panier propriétaire.

## Lancer le projet

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # build de production
```

## Structure

```
src/
  data/
    menu.js      ← toute la carte (34 pizzas, prix L/XL, tags best/veg/sea/spicy, images)
    site.js      ← succursales (tél, WhatsApp, Maps), avis, offres, FAQ, stats, grille IG
    strings.js   ← tous les textes UI en FR + AR
  context/CartContext.jsx   ← panier (localStorage) + générateurs de messages WhatsApp
  i18n.jsx       ← contexte de langue (FR/AR, dir rtl/ltr, persistance)
  components/    ← Navbar, Footer, CartDrawer, MobileBar, PizzaCard, LocationPanel, ui, Icons
  pages/         ← Home, Menu, Restaurants, About, Contact, Order
```

## À personnaliser rapidement

- **Numéros WhatsApp / tél** : `src/data/site.js` (champ `wa` au format international sans `+`).
- **Offres / combos** : `src/data/site.js` → `OFFERS`.
- **Avis clients** : `src/data/site.js` → `REVIEWS` (remplacer par de vrais avis Google).
- **Carte / prix** : `src/data/menu.js`.
- **Photos** : `public/images/` (remplacer par les vraies photos Instagram le moment venu).
- **Horaires** : `src/data/strings.js` (`hours.*`) + logique ouvert/fermé dans `src/hooks.js`.

## Fonctionnalités Grow incluses

Menu interactif (recherche + filtres + tailles L/XL), best-sellers, offres, panier + checkout
WhatsApp par succursale, avis, 3 succursales avec cartes Google Maps intégrées, statut
« ouvert maintenant », FR/AR RTL, UX mobile-first (barre Commander sticky), animations légères.
# Atelier-pizzaiollo
