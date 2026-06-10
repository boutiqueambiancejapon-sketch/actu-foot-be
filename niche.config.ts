/**
 * niche.config.ts — Configuration centrale du site.
 * C'est le SEUL fichier à remplir pour chaque nouveau site issu du template.
 *
 * Workflow :
 * - Soit rempli par Claude Code via le skill `init-site` (qui pose les questions
 *   par blocs, en commençant par le Bloc 0 — langues + marché géo).
 * - Soit rempli à la main quand il n'y a pas de livrable Claude Design.
 *
 * Tous les composants, configs et pages dépendent de ce fichier. Ne pas hardcoder
 * de couleur, de font, de nom de site, de tagline dans le JSX — passer par ici.
 *
 * IMPORTANT — Bloc 0 d'init-site :
 *   Les champs `market`, `locales`, `defaultLocale`, `localePrefix` sont définis
 *   AVANT tous les autres et pilotent l'architecture i18n du site (routing,
 *   middleware, hreflang, sitemap, OG locale, schema.org). Cf. skills/init-site/SKILL.md.
 */

export type NicheConfig = {
  // Identité
  siteName: string
  domain: string
  tagline: string

  // Vocabulaire de la niche
  entity: string          // "produit", "destination", "carte"
  entities: string        // pluriel
  entityVerb: string      // "acheter", "explorer", "souscrire"
  dealWord: string        // "deals", "bons plans", "offres"

  // Hero
  heroPrefix: string
  heroSuffix: string
  rotatingWords: string[]
  subtitle: string
  ctaPrimary: { text: string; url: string }
  ctaSecondary: { text: string; url: string }

  // Catégories (1 couleur accent par catégorie)
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

  // Signature DA anti-IA — personnalité visuelle unique
  signature: {
    anchor: string
    oneRule: string
    inspiration: string[]
    forbidden: string[]
    components: string[]
  }

  // ─── i18n & marché (Bloc 0 d'init-site) ────────────────────────────────
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

export const niche: NicheConfig = {
  // Identité
  siteName: 'Actu Foot Belgique',
  domain: 'actu-foot.be',
  tagline: 'Le foot belge et européen, sans langue de bois',

  // Vocabulaire — magazine d'actu, pas comparateur produit
  entity: 'article',
  entities: 'articles',
  entityVerb: 'lire',
  dealWord: 'à la une',

  // Hero
  heroPrefix: 'Le foot belge',
  heroSuffix: 'décortiqué match après match',
  rotatingWords: ['Pro League', 'Diables Rouges', 'mercato', 'Champions League', 'analyses'],
  subtitle: "L'actu, les analyses tactiques et le décryptage du foot belge et des grands championnats européens — un regard tranchant mais factuel.",
  ctaPrimary: { text: 'Dernières news →', url: '/articles' },
  ctaSecondary: { text: 'Pro League', url: '/pro-league' },

  // Catégories — 5 silos éditoriaux
  categories: [
    {
      slug: 'pro-league',
      label: 'Pro League',
      accent: 'var(--accent-1)',
      description: 'Championnat belge — résultats, classement, analyses match par match',
    },
    {
      slug: 'diables-rouges',
      label: 'Diables Rouges',
      accent: 'var(--accent-2)',
      description: 'Sélection nationale belge — qualifications, Euro, Mondial, Nations League',
    },
    {
      slug: 'champions-league',
      label: 'Champions League',
      accent: 'var(--accent-3)',
      description: 'Le parcours européen des clubs belges et le top des clubs européens',
    },
    {
      slug: 'grands-championnats',
      label: 'Grands championnats',
      accent: 'var(--accent-4)',
      description: 'Premier League, Ligue 1, Liga, Bundesliga — vu depuis la Belgique',
    },
    {
      slug: 'mercato',
      label: 'Mercato',
      accent: 'var(--accent-5)',
      description: 'Transferts, rumeurs vérifiées et analyses du marché belge et international',
    },
  ],

  // Outils — désactivés pour un magazine d'actu pur
  quiz: { enabled: false, question: '', criteria: [] },
  comparator: { enabled: false, criteria: [] },
  simulator: { enabled: false, title: '', description: '' },

  // Style & DA — défini à l'Étape 8 (AUTO-DESIGN)
  style: {
    mode: 'dark',
    hero: 'split',
    effects: 'aurora',
    cards: 'bordered',
    uiStyle: '',
  },
  palette: {
    accent1: '#FF3D57',
    accent2: '#FFD23F',
    accent3: '#3DFFC0',
    accent4: '#7B61FF',
    accent5: '#3D9BFF',
    bgPrimary: '#0A0A0F',
    bgSurface: '#13131A',
    bgSurface2: '#1C1C26',
    textPrimary: '#F0F0F5',
    textSecondary: '#9090A8',
    textMuted: '#55556A',
  },
  fonts: { display: 'Unbounded', body: 'Space Grotesk' },

  // Auteur — Maxime (cf. docs/AUTHOR-maxime.md)
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

  // Signature DA — composée à l'Étape 8 (AUTO-DESIGN)
  signature: {
    anchor: '',
    oneRule: '',
    inspiration: [],
    forbidden: [],
    components: [],
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

/** Accent CSS variable for a given category index. */
const ACCENT_VARS = ['var(--accent-1)', 'var(--accent-2)', 'var(--accent-3)', 'var(--accent-4)', 'var(--accent-5)']

export function categoryAccent(index: number): string {
  return ACCENT_VARS[index % ACCENT_VARS.length]
}

/** Map category slug → label */
export function categoryLabels(): Record<string, string> {
  const map: Record<string, string> = {}
  for (const cat of niche.categories) map[cat.slug] = cat.label
  return map
}

/** Map category slug → CSS accent variable */
export function categoryAccents(): Record<string, string> {
  const map: Record<string, string> = {}
  niche.categories.forEach((cat, i) => {
    map[cat.slug] = categoryAccent(i)
  })
  return map
}

/** True si le site est multi-langue (≥ 2 locales actives). */
export function isMultilingual(): boolean {
  return niche.locales.length >= 2
}

/**
 * Helper pour construire un chemin localisé respectant `localePrefix: 'as-needed'`.
 * - Si lang === defaultLocale → renvoie path tel quel (pas de préfixe)
 * - Sinon → préfixe `/[lang]`
 * Exemple : localePath('fr', '/blog') → '/blog' ; localePath('en', '/blog') → '/en/blog'
 */
export function localePath(lang: string, path: string): string {
  if (lang === niche.defaultLocale) return path
  return `/${lang}${path === '/' ? '' : path}`
}
