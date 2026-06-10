/**
 * niche.config.ts — Configuration centrale du site.
 */

export type NicheConfig = {
  siteName: string
  domain: string
  tagline: string

  entity: string
  entities: string
  entityVerb: string
  dealWord: string

  heroPrefix: string
  heroSuffix: string
  rotatingWords: string[]
  subtitle: string
  ctaPrimary: { text: string; url: string }
  ctaSecondary: { text: string; url: string }

  categories: {
    slug: string
    label: string
    accent: string
    description?: string
  }[]

  quiz: {
    enabled: boolean
    question: string
    criteria: string[]
  }
  comparator: {
    enabled: boolean
    criteria: string[]
  }
  simulator: {
    enabled: boolean
    title: string
    description: string
  }

  style: {
    mode: 'dark' | 'light'
    hero: 'split' | 'centered' | 'minimal'
    effects: 'aurora' | 'subtle' | 'none'
    cards: 'bordered' | 'filled' | 'minimal'
    uiStyle: string
  }
  palette: {
    accent1: string
    accent2: string
    accent3: string
    accent4: string
    accent5: string
    bgPrimary: string
    bgSurface: string
    bgSurface2: string
    textPrimary: string
    textSecondary: string
    textMuted: string
  }
  fonts: {
    display: string
    body: string
  }

  author: {
    name: string
    slug: string
    title: string
    bio: string
    tone: string[]
    noGo: string[]
    formulations: string[]
  }

  logo: string
  homeSections: string[]

  affiliateTag: string
  defaultStore: string

  signature: {
    anchor: string
    oneRule: string
    inspiration: string[]
    forbidden: string[]
    components: string[]
  }

  market: 'BE' | 'FR' | 'CA' | 'CH' | string
  defaultLocale: string
  locales: string[]
  localePrefix?: 'as-needed' | 'always'

  vercelRegion: string
  repo: string
  branch: string
}

// ─── Configuration du site — Actu Foot Belgique ─────────────────────────
//
// DA (étape 8) — mapping orthodoxe Voltéo :
//
// 1. SKIN source : V2 Éditorial.
//    Source de vérité : docs/design-reference/volteo/assets/theme-v2.css.
//    Tokens lus :
//      --cream #FBF7F0 → bgPrimary
//      --paper #FFFFFF → bgSurface
//      --cream-2 #F1E8D9 → bgSurface2
//      --ink #1B1813 → textPrimary
//      --ink-2 #4A443A → textSecondary
//      --ink-3 #8A8173 → textMuted
//      --primary #9E2B25 → accent1 (marque + 1ère catégorie)
//      --spark #C8922F → accent2 (2ème catégorie, convention DESIGN-NOTES §3a)
//      --r-sm 2px / --r 3px / --r-lg 4px / --r-xl 6px → radius (rayons V2 nets, gardés)
//      --line #E4D9C6 / --line-2 #EFE7D8 → borders (filets éditoriaux V2)
//      shadows V2 spécifiques (offsets Y négatifs, presse) → reportées dans globals.css
//
// 2. VERTICALE : custom 5 hex "sport-foot" — exception assumée au catalogue Voltéo
//    (énergie / assurance / auto / tech ne couvrent pas le foot).
//    Mapping DESIGN-NOTES §4 : cat-1/2/3 verticale → accent3/4/5.
//      cat-1 #1F3B6F (bleu UEFA profond)  → accent3 (Champions League)
//      cat-2 #1A6E45 (vert pelouse saturé) → accent4 (Grands championnats)
//      cat-3 #B98722 (ambré doré)          → accent5 (Mercato)
//      cat-4/5 réservés (futures catégories : foot féminin, podcasts, data…)
//
// 3. MUTATIONS bornées (DESIGN-NOTES §6) :
//      - teinte marque : #9E2B25 → #B23230 (rotation ~+12° → rouge brique plus vif,
//        reste dans la famille bordeaux V2)
//      - fonts : Newsreader+Hanken → Fraunces+Inter (même registre serif éditorial
//        + grotesk neutre)
//      - rayons : inchangés (V2 strict)
//
// 4. TEMPLATE : magazine (homeSections + style.hero centered).
//
// Conséquence "Diables Rouges en ambre" : accent2 = spark V2 ambré, donc la
// catégorie Diables Rouges utilise un ambre profond et non un rouge. C'est la
// doctrine Voltéo (le SKIN définit les 2 premiers slots, pas la sémantique du
// label). Volontaire — différencie visuellement du rouge marque.

export const niche: NicheConfig = {
  siteName: 'Actu Foot Belgique',
  domain: 'actu-foot.be',
  tagline: 'Le foot belge et européen, sans langue de bois',

  entity: 'article',
  entities: 'articles',
  entityVerb: 'lire',
  dealWord: 'à la une',

  heroPrefix: 'Le foot belge',
  heroSuffix: 'décortiqué match après match',
  rotatingWords: ['Pro League', 'Diables Rouges', 'mercato', 'Champions League', 'analyses'],
  subtitle: "L'actu, les analyses tactiques et le décryptage du foot belge et des grands championnats européens — un regard tranchant mais factuel.",
  ctaPrimary: { text: 'Dernières news →', url: '/articles' },
  ctaSecondary: { text: 'Pro League', url: '/pro-league' },

  // Catégories — mapping skin V2 (accent1/2) + verticale custom sport-foot (accent3/4/5)
  categories: [
    {
      slug: 'pro-league',
      label: 'Pro League',
      accent: 'var(--accent-1)',  // #B23230 — primary V2 muté (marque)
      description: 'Championnat belge — résultats, classement, analyses match par match',
    },
    {
      slug: 'diables-rouges',
      label: 'Diables Rouges',
      accent: 'var(--accent-2)',  // #C8922F — spark V2 (convention skin, ambre profond)
      description: 'Sélection nationale belge — qualifications, Euro, Mondial, Nations League',
    },
    {
      slug: 'champions-league',
      label: 'Champions League',
      accent: 'var(--accent-3)',  // #1F3B6F — verticale custom cat-1 (bleu UEFA)
      description: 'Le parcours européen des clubs belges et le top des clubs européens',
    },
    {
      slug: 'grands-championnats',
      label: 'Grands championnats',
      accent: 'var(--accent-4)',  // #1A6E45 — verticale custom cat-2 (vert pelouse)
      description: 'Premier League, Ligue 1, Liga, Bundesliga — vu depuis la Belgique',
    },
    {
      slug: 'mercato',
      label: 'Mercato',
      accent: 'var(--accent-5)',  // #B98722 — verticale custom cat-3 (ambré doré)
      description: 'Transferts, rumeurs vérifiées et analyses du marché belge et international',
    },
  ],

  // Outils — désactivés (magazine pur)
  quiz: { enabled: false, question: '', criteria: [] },
  comparator: { enabled: false, criteria: [] },
  simulator: { enabled: false, title: '', description: '' },

  // Style — V2 Éditorial, magazine, angles nets
  style: {
    mode: 'light',
    hero: 'centered',
    effects: 'subtle',
    cards: 'bordered',
    uiStyle: 'editorial-press',
  },

  // Palette — V2 muté + verticale custom sport-foot
  palette: {
    accent1: '#B23230',  // primary V2 muté (~+12° rotation hue depuis #9E2B25)
    accent2: '#C8922F',  // spark V2 pur (convention DESIGN-NOTES §3a)
    accent3: '#1F3B6F',  // verticale custom cat-1 — bleu UEFA Champions League
    accent4: '#1A6E45',  // verticale custom cat-2 — vert pelouse saturé
    accent5: '#B98722',  // verticale custom cat-3 — ambré doré mercato
    bgPrimary:   '#FBF7F0',  // --cream V2
    bgSurface:   '#FFFFFF',  // --paper V2
    bgSurface2:  '#F1E8D9',  // --cream-2 V2
    textPrimary:   '#1B1813',  // --ink V2
    textSecondary: '#4A443A',  // --ink-2 V2
    textMuted:     '#8A8173',  // --ink-3 V2
  },

  // Fonts — V2 muté (même registre serif vivant + grotesk neutre)
  fonts: {
    display: 'Fraunces',     // mutation de Newsreader (V2 source)
    body: 'Inter',           // mutation de Hanken Grotesk (V2 source)
  },

  // Auteur — Maxime
  author: {
    name: 'Maxime',
    slug: 'maxime',
    title: 'Rédacteur en chef et analyste',
    bio: "Maxime suit la Pro League depuis plus de quinze ans et écrit sur le foot belge avec une approche tactique et économique factuelle. Rédacteur en chef d'Actu Foot Belgique.",
    tone: ['tranchant', 'factuel', 'curieux'],
    noGo: ['supporter écrivant', 'chroniqueur premier degré', 'tipster'],
    formulations: [
      'Le constat est simple :',
      'On y revient.',
      'À regarder de près :',
      'Trois chiffres, trois lectures.',
    ],
  },

  logo: 'Actu Foot·BE',
  homeSections: ['ticker', 'featured', 'articles', 'categories', 'newsletter', 'author'],

  affiliateTag: '',
  defaultStore: '',

  // Signature DA — mapping Voltéo documenté
  signature: {
    anchor: 'V2 Éditorial muté (rouge brique presse) + verticale custom sport-foot (bleu UEFA / vert pelouse / ambré mercato).',
    oneRule: 'Un titre tranché, une photo dominante, des filets éditoriaux à filet hairline #E4D9C6, jamais de mots inutiles. La marge respire et la typo serif guide la lecture.',
    inspiration: [
      'The Athletic (US/UK) — long-form data-driven',
      'So Foot (FR) — angle tranché, ironie maîtrisée',
      'Cinq Mondial (mag papier FR) — direction artistique magazine éditorial',
      'Tifo Football — pédagogie tactique illustrée',
    ],
    forbidden: [
      'dégradés multi-couleurs néon ou pastel',
      'icônes flat colorées de type clipart générique',
      'carrousels auto-scroll horizontaux full-bleed',
      'effets aurora-glow flottants (anti-pattern V4 sur skin V2)',
      "photos de stock anonymes de stades vides ou ballons sur fond neutre",
      'shadows avec offsets symétriques (V2 utilise des offsets Y négatifs)',
      'rayons > 6px (anti V2 — angles nets strict)',
    ],
    components: [
      'EditorialHero — photo dominante + over-titre catégorie majuscules (eyebrow .18em) + titre serif Fraunces grand letter-spacing -.015em',
      "ByLine — \"Par Maxime · 10 juin 2026 · 6 min de lecture\" sous titre, typo Inter petite",
      'TickerScores — bandeau discret en haut de home, scores live Pro League + grands championnats (à connecter API foot phase 2)',
      'PullQuote — citation serif Fraunces italique large, filet vertical accent-1',
      'DataTable — tableaux stats avec en-tête accent-3 bleu UEFA, alternance cream/cream-2',
      'CategoryChip — étiquette catégorie border-radius 3px (V2), couleur accent dédiée',
      'BodyArticle — colonne 680px max, line-height 1.75, lettrine Fraunces bold accent-1',
      'Filets line — séparateurs 1px solid #E4D9C6 (--line V2), aucune ombre portée sur les sections de contenu',
    ],
  },

  // Bloc 0 — VERROUILLÉ
  market: 'BE',
  defaultLocale: 'fr',
  locales: ['fr', 'nl'],
  localePrefix: 'as-needed',

  vercelRegion: 'fra1',
  repo: 'boutiqueambiancejapon-sketch/actu-foot-be',
  branch: 'main',
}

// ─── Helpers ────────────────────────────────────────────────────────────

const ACCENT_VARS = ['var(--accent-1)', 'var(--accent-2)', 'var(--accent-3)', 'var(--accent-4)', 'var(--accent-5)']

export function categoryAccent(index: number): string {
  return ACCENT_VARS[index % ACCENT_VARS.length]
}

export function categoryLabels(): Record<string, string> {
  const map: Record<string, string> = {}
  for (const cat of niche.categories) map[cat.slug] = cat.label
  return map
}

export function categoryAccents(): Record<string, string> {
  const map: Record<string, string> = {}
  niche.categories.forEach((cat, i) => {
    map[cat.slug] = categoryAccent(i)
  })
  return map
}

export function isMultilingual(): boolean {
  return niche.locales.length >= 2
}

export function localePath(lang: string, path: string): string {
  if (lang === niche.defaultLocale) return path
  return `/${lang}${path === '/' ? '' : path}`
}
