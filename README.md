# 🧪 Tableau Périodique Interactif (Mendeleev Modern)

> Une exploration moderne, réactive et élégante des 118 éléments chimiques, conçue pour le web d'aujourd'hui.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![React](https://img.shields.io/badge/React-19-61dafb.svg?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38bdf8.svg?logo=tailwindcss)

## 🌟 Aperçu

Cette application est une refonte complète du tableau périodique classique. Elle offre une expérience utilisateur fluide ("Fit-to-screen"), sans défilement inutile, et s'adapte à toutes les tailles d'écran. Chaque élément est interactif et révèle des détails approfondis, des configurations électroniques précises et des représentations chimiques en LaTeX.
<img width="1393" height="773" alt="{4C41A390-0306-4882-A6BC-B4145D182AE4}" src="https://github.com/user-attachments/assets/4d3c5334-a63a-44e9-8e80-6fef524deff5" />

---

## ✨ Fonctionnalités Clés

### 🎨 Interface & UX
- **Grille "Fit-to-Screen"** : Le tableau s'ajuste dynamiquement pour remplir l'écran sans barres de défilement, utilisant une grille CSS 18x10 optimisée.
- **Design Réactif (Responsive)** : Les tailles de police et les éléments s'adaptent (unités `vmin`) du mobile au grand écran de bureau.
- **Mode Sombre / Clair** : Basculez instantanément entre un thème lumineux clinique et un mode sombre élégant pour les sessions nocturnes.
- **Visualisation Colorée** : Code couleur précis respectant les familles chimiques (Métaux de transition, Gaz nobles, Halogènes, etc.).

### ⚛️ Données Scientifiques
- **118 Éléments** : Base de données complète de l'Hydrogène (1) à l'Oganesson (118).
- **Rendu LaTeX (KaTeX)** : Affichage professionnel des configurations électroniques (ex: `[Xe] 4f^{14} 5d^{10} 6s^1`) et des équations chimiques.
- **Données Riches** : Masse atomique, points de fusion/ébullition, catégorie, groupe, période et description détaillée.
- **Langue** : Entièrement localisé en **Français** 🇫🇷.

### 🔍 Outils
- **Recherche Instantanée** : Filtrez les éléments en temps réel par Symbole (`Au`), Nom (`Or`) ou Numéro Atomique (`79`).
- **Effets Visuels** : Survol interactif, mise en évidence (dimming) des éléments non sélectionnés lors de la recherche.

---

## 🛠️ Stack Technique

Ce projet a été construit avec les dernières technologies web pour assurer performance et maintenabilité :

*   **Core :** [React 19](https://react.dev/)
*   **Langage :** [TypeScript](https://www.typescriptlang.org/) (Typage strict des interfaces éléments)
*   **Style :** [Tailwind CSS](https://tailwindcss.com/) (Utilitaire-first, Grid layout avancé, Dark mode)
*   **Rendu Mathématique :** [KaTeX](https://katex.org/) (via composant React personnalisé)
*   **Icônes :** [Lucide React](https://lucide.dev/)

---

## 🚀 Installation et Démarrage

Pour lancer ce projet localement :

1.  **Cloner le dépôt** (ou télécharger les fichiers) :
    ```bash
    git clone https://github.com/votre-user/mendeleev-modern.git
    cd mendeleev-modern
    ```

2.  **Installer les dépendances** :
    ```bash
    npm install
    # ou
    yarn install
    ```

3.  **Lancer le serveur de développement** :
    ```bash
    npm start
    # ou
    yarn start
    ```

4.  Ouvrez votre navigateur sur `http://localhost:3000`.

---

## 📂 Structure du Projet

```text
/
├── public/              # Assets statiques (index.html)
├── src/
│   ├── components/      # Composants UI réutilisables
│   │   ├── ElementCard.tsx         # Tuile individuelle d'un élément
│   │   ├── ElementDetailsPanel.tsx # Panneau latéral d'informations
│   │   ├── LatexRenderer.tsx       # Wrapper KaTeX sécurisé
│   │   └── SearchBar.tsx           # Barre de recherche
│   ├── App.tsx          # Composant racine et layout principal
│   ├── constants.ts     # Base de données des éléments & logique de génération
│   ├── types.ts         # Définitions TypeScript (Interfaces & Enums)
│   └── index.tsx        # Point d'entrée React
└── README.md            # Documentation
```

---

## 🔧 Personnalisation

### Modifier les couleurs
Les couleurs des familles chimiques sont définies dans `constants.ts` via la fonction `getCategoryColor`. Vous pouvez modifier les classes Tailwind associées pour changer la palette.

### Ajouter des données
Les données principales sont générées algorithmiquement pour rester léger, mais les exceptions sont gérées dans `CORE_DATA` (`constants.ts`). Pour ajouter une description spécifique ou une image personnalisée pour un élément, ajoutez simplement une entrée dans ce tableau.

---

## 📝 Auteur

Projet généré et optimisé par IA, supervisé par un Ingénieur Frontend Senior.

---

*Fait avec ❤️ et des atomes.*
