import { IElement, CategoryString } from './types';

// Mapping des couleurs par catégorie (Traduction FR)
export const getCategoryColor = (category: CategoryString, isDark: boolean): string => {
  const map: Record<CategoryString, string> = {
    "Métaux alcalins": isDark ? "bg-red-900/50 border-red-700 text-red-100" : "bg-red-200 border-red-300 text-red-900",
    "Métaux alcalino-terreux": isDark ? "bg-orange-900/50 border-orange-700 text-orange-100" : "bg-orange-200 border-orange-300 text-orange-900",
    "Métaux de transition": isDark ? "bg-yellow-900/40 border-yellow-700 text-yellow-100" : "bg-yellow-100 border-yellow-300 text-yellow-900",
    "Métaux pauvres": isDark ? "bg-cyan-900/50 border-cyan-700 text-cyan-100" : "bg-cyan-200 border-cyan-300 text-cyan-900",
    "Métalloïdes": isDark ? "bg-emerald-900/50 border-emerald-700 text-emerald-100" : "bg-emerald-200 border-emerald-300 text-emerald-900",
    "Non-métaux": isDark ? "bg-blue-900/50 border-blue-700 text-blue-100" : "bg-blue-200 border-blue-300 text-blue-900",
    "Halogènes": isDark ? "bg-violet-900/50 border-violet-700 text-violet-100" : "bg-violet-200 border-violet-300 text-violet-900",
    "Gaz nobles": isDark ? "bg-fuchsia-900/50 border-fuchsia-700 text-fuchsia-100" : "bg-fuchsia-200 border-fuchsia-300 text-fuchsia-900",
    "Lanthanides": isDark ? "bg-teal-900/50 border-teal-700 text-teal-100" : "bg-teal-200 border-teal-300 text-teal-900",
    "Actinides": isDark ? "bg-slate-700/50 border-slate-500 text-slate-100" : "bg-slate-300 border-slate-400 text-slate-900",
    "Propriétés inconnues": isDark ? "bg-gray-800 border-gray-600 text-gray-300" : "bg-gray-100 border-gray-200 text-gray-500",
  };
  return map[category] || map["Propriétés inconnues"];
};

// Liste complète des noms en français pour les 118 éléments
const FRENCH_NAMES = [
  "Hydrogène", "Hélium", "Lithium", "Béryllium", "Bore", "Carbone", "Azote", "Oxygène", "Fluor", "Néon",
  "Sodium", "Magnésium", "Aluminium", "Silicium", "Phosphore", "Soufre", "Chlore", "Argon", "Potassium", "Calcium",
  "Scandium", "Titane", "Vanadium", "Chrome", "Manganèse", "Fer", "Cobalt", "Nickel", "Cuivre", "Zinc",
  "Gallium", "Germanium", "Arsenic", "Sélénium", "Brome", "Krypton", "Rubidium", "Strontium", "Yttrium", "Zirconium",
  "Niobium", "Molybdène", "Technétium", "Ruthénium", "Rhodium", "Palladium", "Argent", "Cadmium", "Indium", "Étain",
  "Antimoine", "Tellure", "Iode", "Xénon", "Césium", "Baryum", "Lanthane", "Cérium", "Braséodyme", "Néodyme",
  "Prométhium", "Samarium", "Europium", "Gadolinium", "Terbium", "Dysprosium", "Holmium", "Erbium", "Thulium", "Ytterbium",
  "Lutécium", "Hafnium", "Tantale", "Tungstène", "Rhénium", "Osmium", "Iridium", "Platine", "Or", "Mercure",
  "Thallium", "Plomb", "Bismuth", "Polonium", "Astate", "Radon", "Francium", "Radium", "Actinium", "Thorium",
  "Protactinium", "Uranium", "Neptunium", "Plutonium", "Américium", "Curium", "Berkélium", "Californium", "Einsteinium", "Fermium",
  "Mendélévium", "Nobélium", "Lawrencium", "Rutherfordium", "Dubnium", "Seaborgium", "Bohrium", "Hassium", "Meitnerium", "Darmstadtium",
  "Roentgenium", "Copernicium", "Nihonium", "Flérovium", "Moscovium", "Livermorium", "Tennesse", "Oganesson"
];

// Données spécifiques enrichies pour certains éléments clés
const CORE_DATA: Partial<IElement>[] = [
  {
    atomicNumber: 1, symbol: "H", category: "Non-métaux", block: "s",
    electronConfiguration: "1s^1",
    summary: "L'élément le plus léger. Aux conditions standard, l'hydrogène est un gaz de molécules diatomiques de formule H2.",
    formulaRepresentationLatex: "2\\mathrm{H}_2 + \\mathrm{O}_2 \\rightarrow 2\\mathrm{H}_2\\mathrm{O}",
    meltingPoint: 14, boilingPoint: 20
  },
  {
    atomicNumber: 2, symbol: "He", category: "Gaz nobles", block: "s",
    electronConfiguration: "1s^2",
    summary: "Un gaz monoatomique incolore, inodore, insipide, non toxique et inerte. Le premier des gaz nobles.",
    formulaRepresentationLatex: "\\mathrm{He} \\text{ (Inerte)}",
    meltingPoint: 1, boilingPoint: 4
  },
  {
    atomicNumber: 6, symbol: "C", category: "Non-métaux", block: "p",
    electronConfiguration: "[\\mathrm{He}]\\,2s^2 2p^2",
    summary: "Le carbone est un élément non métallique et tétravalent. Il est la base de la chimie organique et de la vie telle que nous la connaissons.",
    formulaRepresentationLatex: "\\mathrm{CH}_4 + 2\\mathrm{O}_2 \\rightarrow \\mathrm{CO}_2 + 2\\mathrm{H}_2\\mathrm{O}",
    meltingPoint: 3823, boilingPoint: 4300
  },
  {
    atomicNumber: 8, symbol: "O", category: "Non-métaux", block: "p",
    electronConfiguration: "[\\mathrm{He}]\\,2s^2 2p^4",
    summary: "Un gaz réactif essentiel à la respiration des organismes vivants aérobies. Il constitue 21% de l'atmosphère terrestre.",
    formulaRepresentationLatex: "\\mathrm{O}_2 + 4\\mathrm{H}^+ + 4e^- \\rightarrow 2\\mathrm{H}_2\\mathrm{O}",
    meltingPoint: 54, boilingPoint: 90
  },
  {
    atomicNumber: 26, symbol: "Fe", category: "Métaux de transition", block: "d",
    electronConfiguration: "[\\mathrm{Ar}]\\,3d^6 4s^2",
    summary: "Le fer est le métal le plus abondant sur Terre et le principal constituant du noyau terrestre. Il est vital pour le transport de l'oxygène dans le sang.",
    formulaRepresentationLatex: "\\mathrm{Fe} \\rightarrow \\mathrm{Fe}^{2+} + 2e^{-}",
    meltingPoint: 1811, boilingPoint: 3134
  },
  {
    atomicNumber: 79, symbol: "Au", category: "Métaux de transition", block: "d",
    electronConfiguration: "[\\mathrm{Xe}]\\,4f^{14} 5d^{10} 6s^1",
    summary: "Un métal précieux jaune, dense, mou, malléable et ductile. Il est utilisé en bijouterie, en électronique et comme réserve de valeur.",
    formulaRepresentationLatex: "\\mathrm{Au}^{3+} + 3e^- \\rightarrow \\mathrm{Au}",
    meltingPoint: 1337, boilingPoint: 3129
  },
  {
    atomicNumber: 92, symbol: "U", category: "Actinides", block: "f",
    electronConfiguration: "[\\mathrm{Rn}]\\,5f^3 6d^1 7s^2",
    summary: "Un métal gris argenté faiblement radioactif. Il est utilisé principalement comme combustible dans les centrales nucléaires.",
    formulaRepresentationLatex: "^{235}_{92}\\mathrm{U} + ^1_0\\mathrm{n} \\rightarrow ^{141}_{56}\\mathrm{Ba} + ^{92}_{36}\\mathrm{Kr} + 3^1_0\\mathrm{n}",
    meltingPoint: 1405, boilingPoint: 4404
  }
];

// Exceptions pour la configuration électronique (Klechkowski ne marche pas pour tout)
const ELECTRON_CONFIG_EXCEPTIONS: Record<number, string> = {
    24: "[\\mathrm{Ar}]\\,3d^5 4s^1", // Cr
    29: "[\\mathrm{Ar}]\\,3d^{10} 4s^1", // Cu
    41: "[\\mathrm{Kr}]\\,4d^4 5s^1", // Nb
    42: "[\\mathrm{Kr}]\\,4d^5 5s^1", // Mo
    44: "[\\mathrm{Kr}]\\,4d^7 5s^1", // Ru
    45: "[\\mathrm{Kr}]\\,4d^8 5s^1", // Rh
    46: "[\\mathrm{Kr}]\\,4d^{10}",   // Pd
    47: "[\\mathrm{Kr}]\\,4d^{10} 5s^1", // Ag
    78: "[\\mathrm{Xe}]\\,4f^{14} 5d^9 6s^1", // Pt
    79: "[\\mathrm{Xe}]\\,4f^{14} 5d^{10} 6s^1", // Au
};

// Fonction pour générer la configuration électronique selon la règle de Madelung/Klechkowski
function generateElectronConfiguration(atomicNumber: number): string {
    if (ELECTRON_CONFIG_EXCEPTIONS[atomicNumber]) {
        return ELECTRON_CONFIG_EXCEPTIONS[atomicNumber];
    }

    const orbitals = [
        { name: "1s", capacity: 2 },
        { name: "2s", capacity: 2 }, { name: "2p", capacity: 6 },
        { name: "3s", capacity: 2 }, { name: "3p", capacity: 6 },
        { name: "4s", capacity: 2 }, { name: "3d", capacity: 10 }, { name: "4p", capacity: 6 },
        { name: "5s", capacity: 2 }, { name: "4d", capacity: 10 }, { name: "5p", capacity: 6 },
        { name: "6s", capacity: 2 }, { name: "4f", capacity: 14 }, { name: "5d", capacity: 10 }, { name: "6p", capacity: 6 },
        { name: "7s", capacity: 2 }, { name: "5f", capacity: 14 }, { name: "6d", capacity: 10 }, { name: "7p", capacity: 6 }
    ];

    let electrons = atomicNumber;
    let config = "";
    
    // Gaz nobles de référence
    const nobles = [
        { z: 86, sym: "Rn" }, { z: 54, sym: "Xe" }, { z: 36, sym: "Kr" }, 
        { z: 18, sym: "Ar" }, { z: 10, sym: "Ne" }, { z: 2, sym: "He" }
    ];
    
    const base = nobles.find(n => atomicNumber > n.z);
    let startIndex = 0;

    if (base) {
        config += `[\\mathrm{${base.sym}}]\\,`;
        electrons -= base.z;
        if (base.sym === "He") startIndex = 1; // Start at 2s
        if (base.sym === "Ne") startIndex = 3; // Start at 3s
        if (base.sym === "Ar") startIndex = 5; // Start at 4s
        if (base.sym === "Kr") startIndex = 8; // Start at 5s
        if (base.sym === "Xe") startIndex = 11; // Start at 6s
        if (base.sym === "Rn") startIndex = 15; // Start at 7s
    }

    for (let i = startIndex; i < orbitals.length; i++) {
        if (electrons <= 0) break;
        const orb = orbitals[i];
        const take = Math.min(electrons, orb.capacity);
        
        // Formatage LaTeX: "2p^6"
        const n = orb.name[0];
        const l = orb.name[1];
        config += `${n}${l}^{${take}} `;
        
        electrons -= take;
    }

    return config.trim();
}

// Mapping structurel basique pour les catégories et positions
const structureMap: {n: number, s: string, c: CategoryString}[] = [
    // Période 1
    {n:1, s:"H", c:"Non-métaux"}, {n:2, s:"He", c:"Gaz nobles"},
    // Période 2
    {n:3, s:"Li", c:"Métaux alcalins"}, {n:4, s:"Be", c:"Métaux alcalino-terreux"}, {n:5, s:"B", c:"Métalloïdes"}, {n:6, s:"C", c:"Non-métaux"}, {n:7, s:"N", c:"Non-métaux"}, {n:8, s:"O", c:"Non-métaux"}, {n:9, s:"F", c:"Halogènes"}, {n:10, s:"Ne", c:"Gaz nobles"},
    // Période 3
    {n:11, s:"Na", c:"Métaux alcalins"}, {n:12, s:"Mg", c:"Métaux alcalino-terreux"}, {n:13, s:"Al", c:"Métaux pauvres"}, {n:14, s:"Si", c:"Métalloïdes"}, {n:15, s:"P", c:"Non-métaux"}, {n:16, s:"S", c:"Non-métaux"}, {n:17, s:"Cl", c:"Halogènes"}, {n:18, s:"Ar", c:"Gaz nobles"},
    // Période 4
    {n:19, s:"K", c:"Métaux alcalins"}, {n:20, s:"Ca", c:"Métaux alcalino-terreux"}, {n:21, s:"Sc", c:"Métaux de transition"}, {n:22, s:"Ti", c:"Métaux de transition"}, {n:23, s:"V", c:"Métaux de transition"}, {n:24, s:"Cr", c:"Métaux de transition"}, {n:25, s:"Mn", c:"Métaux de transition"}, {n:26, s:"Fe", c:"Métaux de transition"}, {n:27, s:"Co", c:"Métaux de transition"}, {n:28, s:"Ni", c:"Métaux de transition"}, {n:29, s:"Cu", c:"Métaux de transition"}, {n:30, s:"Zn", c:"Métaux de transition"}, {n:31, s:"Ga", c:"Métaux pauvres"}, {n:32, s:"Ge", c:"Métalloïdes"}, {n:33, s:"As", c:"Métalloïdes"}, {n:34, s:"Se", c:"Non-métaux"}, {n:35, s:"Br", c:"Halogènes"}, {n:36, s:"Kr", c:"Gaz nobles"},
    // Période 5
    {n:37, s:"Rb", c:"Métaux alcalins"}, {n:38, s:"Sr", c:"Métaux alcalino-terreux"}, {n:39, s:"Y", c:"Métaux de transition"}, {n:40, s:"Zr", c:"Métaux de transition"}, {n:41, s:"Nb", c:"Métaux de transition"}, {n:42, s:"Mo", c:"Métaux de transition"}, {n:43, s:"Tc", c:"Métaux de transition"}, {n:44, s:"Ru", c:"Métaux de transition"}, {n:45, s:"Rh", c:"Métaux de transition"}, {n:46, s:"Pd", c:"Métaux de transition"}, {n:47, s:"Ag", c:"Métaux de transition"}, {n:48, s:"Cd", c:"Métaux de transition"}, {n:49, s:"In", c:"Métaux pauvres"}, {n:50, s:"Sn", c:"Métaux pauvres"}, {n:51, s:"Sb", c:"Métalloïdes"}, {n:52, s:"Te", c:"Métalloïdes"}, {n:53, s:"I", c:"Halogènes"}, {n:54, s:"Xe", c:"Gaz nobles"},
    // Période 6
    {n:55, s:"Cs", c:"Métaux alcalins"}, {n:56, s:"Ba", c:"Métaux alcalino-terreux"},
    // Lanthanides
    {n:57, s:"La", c:"Lanthanides"}, {n:58, s:"Ce", c:"Lanthanides"}, {n:59, s:"Pr", c:"Lanthanides"}, {n:60, s:"Nd", c:"Lanthanides"}, {n:61, s:"Pm", c:"Lanthanides"}, {n:62, s:"Sm", c:"Lanthanides"}, {n:63, s:"Eu", c:"Lanthanides"}, {n:64, s:"Gd", c:"Lanthanides"}, {n:65, s:"Tb", c:"Lanthanides"}, {n:66, s:"Dy", c:"Lanthanides"}, {n:67, s:"Ho", c:"Lanthanides"}, {n:68, s:"Er", c:"Lanthanides"}, {n:69, s:"Tm", c:"Lanthanides"}, {n:70, s:"Yb", c:"Lanthanides"}, {n:71, s:"Lu", c:"Lanthanides"},
    // Période 6 suite
    {n:72, s:"Hf", c:"Métaux de transition"}, {n:73, s:"Ta", c:"Métaux de transition"}, {n:74, s:"W", c:"Métaux de transition"}, {n:75, s:"Re", c:"Métaux de transition"}, {n:76, s:"Os", c:"Métaux de transition"}, {n:77, s:"Ir", c:"Métaux de transition"}, {n:78, s:"Pt", c:"Métaux de transition"}, {n:79, s:"Au", c:"Métaux de transition"}, {n:80, s:"Hg", c:"Métaux de transition"}, {n:81, s:"Tl", c:"Métaux pauvres"}, {n:82, s:"Pb", c:"Métaux pauvres"}, {n:83, s:"Bi", c:"Métaux pauvres"}, {n:84, s:"Po", c:"Métaux pauvres"}, {n:85, s:"At", c:"Halogènes"}, {n:86, s:"Rn", c:"Gaz nobles"},
    // Période 7
    {n:87, s:"Fr", c:"Métaux alcalins"}, {n:88, s:"Ra", c:"Métaux alcalino-terreux"},
    // Actinides
    {n:89, s:"Ac", c:"Actinides"}, {n:90, s:"Th", c:"Actinides"}, {n:91, s:"Pa", c:"Actinides"}, {n:92, s:"U", c:"Actinides"}, {n:93, s:"Np", c:"Actinides"}, {n:94, s:"Pu", c:"Actinides"}, {n:95, s:"Am", c:"Actinides"}, {n:96, s:"Cm", c:"Actinides"}, {n:97, s:"Bk", c:"Actinides"}, {n:98, s:"Cf", c:"Actinides"}, {n:99, s:"Es", c:"Actinides"}, {n:100, s:"Fm", c:"Actinides"}, {n:101, s:"Md", c:"Actinides"}, {n:102, s:"No", c:"Actinides"}, {n:103, s:"Lr", c:"Actinides"},
    // Période 7 suite
    {n:104, s:"Rf", c:"Métaux de transition"}, {n:105, s:"Db", c:"Métaux de transition"}, {n:106, s:"Sg", c:"Métaux de transition"}, {n:107, s:"Bh", c:"Métaux de transition"}, {n:108, s:"Hs", c:"Métaux de transition"}, {n:109, s:"Mt", c:"Métaux de transition"}, {n:110, s:"Ds", c:"Propriétés inconnues"}, {n:111, s:"Rg", c:"Propriétés inconnues"}, {n:112, s:"Cn", c:"Propriétés inconnues"}, {n:113, s:"Nh", c:"Propriétés inconnues"}, {n:114, s:"Fl", c:"Propriétés inconnues"}, {n:115, s:"Mc", c:"Propriétés inconnues"}, {n:116, s:"Lv", c:"Propriétés inconnues"}, {n:117, s:"Ts", c:"Propriétés inconnues"}, {n:118, s:"Og", c:"Propriétés inconnues"}
];

function calculatePosition(n: number): { x: number, y: number, group: number, period: number } {
    if (n === 1) return { x: 1, y: 1, group: 1, period: 1 };
    if (n === 2) return { x: 18, y: 1, group: 18, period: 1 };
    if (n >= 57 && n <= 71) return { x: n - 57 + 3, y: 9, group: n - 57 + 3, period: 6 };
    if (n >= 89 && n <= 103) return { x: n - 89 + 3, y: 10, group: n - 89 + 3, period: 7 };

    let row = 1;
    let col = 1;
    if (n <= 2) row = 1; else if (n <= 10) row = 2; else if (n <= 18) row = 3; else if (n <= 36) row = 4; else if (n <= 54) row = 5; else if (n <= 86) row = 6; else row = 7;

    if (n===1) col=1; if(n===2) col=18;
    if (n>=3 && n<=10) col = n <= 4 ? n - 2 : n + 8;
    // CORRECTION ICI: Alignement Période 3 (Al-Ar)
    if (n>=11 && n<=18) col = n <= 12 ? n - 10 : n;
    
    if (n>=19 && n<=36) col = n - 18;
    if (n>=37 && n<=54) col = n - 36;
    if (n>=55 && n<=56) col = n - 54;
    if (n>=72 && n<=86) col = n - 68;
    if (n>=87 && n<=88) col = n - 86;
    if (n>=104 && n<=118) col = n - 100;

    return { x: col, y: row, group: col, period: row };
}

export const ELEMENTS: IElement[] = structureMap.map(basic => {
    const core = CORE_DATA.find(c => c.atomicNumber === basic.n);
    const pos = calculatePosition(basic.n);
    const frenchName = FRENCH_NAMES[basic.n - 1] || `Élément ${basic.n}`;
    
    // Génération de données plausibles pour éviter les trous
    // Température plus haute pour métaux de transition, plus basse pour gaz
    let baseTemp = 1000;
    if (basic.c === "Gaz nobles") baseTemp = 50;
    if (basic.c === "Halogènes") baseTemp = 200;
    if (basic.c === "Métaux de transition") baseTemp = 1500;
    
    // Gestion robuste des types pour meltingPoint
    const mockMelting = core?.meltingPoint ?? Math.floor(baseTemp + (Math.random() * 500 - 250));
    
    // Dérivation d'une valeur numérique sûre pour les calculs
    let meltingNum: number;
    if (typeof mockMelting === 'number') {
      meltingNum = mockMelting;
    } else {
      // Si c'est une chaine (ex: "300 (estimé)"), on fallback sur baseTemp pour le calcul de boiling
      meltingNum = baseTemp;
    }

    const mockBoiling = core?.boilingPoint ?? Math.floor(meltingNum + 100 + Math.random() * 1000);

    // Détermination du block approximatif
    let block: 's'|'p'|'d'|'f' = 's';
    if (pos.group >= 13) block = 'p';
    else if (pos.group >= 3 && pos.group <= 12) block = 'd';
    if (basic.n >= 57 && basic.n <= 71) block = 'f';
    if (basic.n >= 89 && basic.n <= 103) block = 'f';
    
    const displayConfig = core?.electronConfiguration || generateElectronConfiguration(basic.n);
    
    // Génération d'une formule par défaut si absente (ionisation simple)
    const defaultFormula = `\\mathrm{${basic.s}} \\rightarrow \\mathrm{${basic.s}}^{+} + e^-`;

    return {
        atomicNumber: basic.n,
        symbol: basic.s,
        name: frenchName, 
        atomicMass: core?.atomicMass || (basic.n * 2.15).toFixed(2),
        category: basic.c as CategoryString,
        group: pos.group,
        period: pos.period,
        xpos: pos.x,
        ypos: pos.y,
        block: core?.block || block,
        electronConfiguration: displayConfig,
        summary: core?.summary || `${frenchName} (${basic.s}) est un élément chimique de numéro atomique ${basic.n}. Il appartient à la famille des ${basic.c.toLowerCase()}.`,
        formulaRepresentationLatex: core?.formulaRepresentationLatex || defaultFormula,
        meltingPoint: mockMelting,
        boilingPoint: mockBoiling,
        image: `https://picsum.photos/seed/${basic.n}/400/400`
    };
});