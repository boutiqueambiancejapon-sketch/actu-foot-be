/**
 * niche.config.ts — Configuration centrale du site.
 * C'est le SEUL fichier à remplir pour chaque nouveau site issu du template.
 */

export type NicheConfig = {
  // Identité
  siteName: string
  domain: string
  tagline: string

  // Vocabulaire de la niche
  entity: string
  entities: string
  entityVerb: string
  dealWord: string

  // Hero
  heroPrefix: string
  heroSuffix: string
  rotatingWords: string[]
  subtitle: string
  ctaPrimary: { text: string; url: string }
  ctaSecondary: { text: string; url: string }

  // Catégories
  categories: {
    slug: string
    label: string
    accent: string
    description?: string
  }[]

  // Outils
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

  // Style & DA
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

  // Auteur
  author: {
    name: string
    slug: string
    title: string
    bio: string
    tone: string[]
    noGo: string[]
    formulations: string[]
  }

  // Identité visuelle
  logo: string
  homeSections: string[]

  // Affiliation
  affiliateTag: string
  defaultStore: string

  // Signature DA
  signature: {
    anchor: string
    oneRule: string
    inspiration: string[]
    forbidden: string[]
    components: string[]
  }

  // i18n & marché
  market: 'BE' | 'FR' | 'CA' | 'CH' | string
  defaultLocale: string
  locales: string[]
  localePrefix?: 'as-needed' | 'always'

  // Technique
  vercelRegion: string
  repo: string
  branch: string
}

// ─── Configuration du site — Actu Foot Belgique ─────────────────────────
//
// DA (étape 8) : skin V2 Éditorial muté (rouge brique + verticale sport custom).
// - archétype : magazine d'analyse + actu foot.
// - skin source : V2 Éditorial (cf. docs/design-reference/volteo/DESIGN-NOTES.md §5).
// - mutations : teinte marque #9E2B25 → #B23230 (~+12° vers rouge brique vif),
//   fonts Newsreader+Hanken → Fraunces+Inter (mêmes registres serif+grotesk
//   neutre, plus contemporains), rayons 3px (gardé), verticale custom sport
//   (rouge Pro League, rouge Diables, bleu CL, vert pelouse, ambré mercato).

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

  // Catégories — verticale sport custom (cf. signature.components ci-dessous)
  categories: [
    {
      slug: 'pro-league',
      label: 'Pro League',
      accent: 'var(--accent-1)',  // #B23230 rouge brique éditorial (= marque)
      description: 'Championnat belge — résultats, classement, analyses match par match',
    },
    {
      slug: 'diables-rouges',
      label: 'Diables Rouges',
      accent: 'var(--accent-2)',  // #E63946 rouge Belgique vif
      description: 'Sélection nationale belge — qualifications, Euro, Mondial, Nations League',
    },
    {
      slug: 'champions-league',
      label: 'Champions League',
      accent: 'var(--accent-3)',  // #1F3B6F bleu profond UEFA CL
      description: 'Le parcours européen des clubs belges et le top des clubs européens',
    },
    {
      slug: 'grands-championnats',
      label: 'Grands championnats',
      accent: 'var(--accent-4)',  // #2A8B5F vert pelouse
      description: 'Premier League, Ligue 1, Liga, Bundesliga — vu depuis la Belgique',
    },
    {
      slug: 'mercato',
      label: 'Mercato',
      accent: 'var(--accent-5)',  // #D89A2B ambré or (valeur/transfert)
      description: 'Transferts, rumeurs vérifiées et analyses du marché belge et international',
    },
  ],

  // Outils — désactivés (magazine pur)
  quiz: { enabled: false, question: '', criteria: [] },
  comparator: { enabled: false, criteria: [] },
  simulator: { enabled: false, title: '', description: '' },

  // Style — V2 Éditorial muté (clair, hero centered magazine, angles nets)
  style: {
    mode: 'light',
    hero: 'centered',
    effects: 'subtle',
    cards: 'bordered',
    uiStyle: 'editorial-press',
  },

  // Palette — V2 Éditorial muté (papier chaud + 5 accents sport)
  palette: {
    accent1: '#B23230',  // rouge brique éditorial muté (marque + Pro League)
    accent2: '#E63946',  // rouge Belgique vif (Diables Rouges)
    accent3: '#1F3B6F',  // bleu profond UEFA (Champions League)
    accent4: '#2A8B5F',  // vert pelouse (Grands championnats)
    accent5: '#D89A2B',  // ambré or (Mercato)
    bgPrimary: '#FBF7F0',  // crème V2
    bgSurface: '#FFFFFF',
    bgSurface2: '#F1E8D9',  // cream-2 V2
    textPrimary: '#1B1813',
    textSecondary: '#4A443A',
    textMuted: '#8A8173',
  },

  // Fonts — V2 Éditorial muté (Fraunces serif + Inter sans-serif neutre)
  fonts: {
    display: 'Fraunces',
    body: 'Inter',
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

  // Identité visuelle
  logo: 'Actu Foot·BE',
  homeSections: ['ticker', 'featured', 'articles', 'categories', 'newsletter', 'author'],

  // Pas d'affiliation — modèle display + newsletter
  affiliateTag: '',
  defaultStore: '',

  // Signature DA — anti-footprint, presse foot éditoriale
  signature: {
    anchor: 'Presse foot éditoriale belge — papier chaud, angles nets, photo dominante, typo serif vivante (Fraunces).',
    oneRule: 'Une photo dominante, un titre tranché, jamais de mots inutiles autour. La marge respire et la typo guide la lecture.',
    inspiration: [
      'The Athletic (US/UK) — long-form data-driven, sources nommées',
      'So Foot (FR) — angle tranché, refus du consensus, ironie maîtrisée',
      'Cinq (mag papier FR, ex-So Foot Hors-Série) — direction artistique magazine',
      'Tifo Football — pédagogie tactique illustrée',
    ],
    forbidden: [
      'dégradés multi-couleurs néon ou pastel',
      'icônes flat colorées de type clipart générique',
      'carrousels auto-scroll horizontaux full-bleed',
      'effets aurora-glow flottants (anti-pattern V4)',
      "photos de stock anonymes de stades vides ou ballons sur fond neutre",
      "fonds blancs purs sans grain (sauf zones de tableau)",
    ],
    components: [
      'EditorialHero — photo dominante + over-titre catégorie en majuscules + titre serif Fraunces grand',
      "ByLine — \"Par Maxime · 10 juin 2026 · 6 min de lecture\" sous titre, typo Inter petite",
      'TickerScores — bandeau discret en haut de home, scores live Pro League + grands championnats (à connecter API foot phase 2)',
      'PullQuote — citation serif Fraunces italique large, filet vertical accent-1',
      'DataTable — tableaux stats avec typo éditoriale, alternance subtile cream/cream-2, en-tête accent-3 bleu profond',
      'CategoryChip — étiquette catégorie en haut d\'article, couleur accent dédiée (Pro League rouge, Diables rouge vif, CL bleu, etc.)',
      'BodyArticle — colonne 680px max, line-height 1.75, lettrine première lettre en Fraunces bold colorée accent-1',
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
