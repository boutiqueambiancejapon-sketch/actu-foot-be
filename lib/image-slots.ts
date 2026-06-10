/**
 * Registre central des emplacements d'images fixes du site — SOURCE UNIQUE des
 * ids, dimensions, chemins et prompts des images structurelles.
 *
 * Usage :
 * 1. <ImagePlaceholder slotId="home-hero-background" /> affiche l'image si elle existe,
 *    sinon un placeholder (détaillé en dev, épuré en prod).
 * 2. La page /admin/images liste tous les slots et leur statut.
 * 3. Les prompts sont écrits pour Gemini / Nano Banana (le moteur réel) : courts
 *    (<= ~20 mots), descriptifs, finissant par « no text, no logos, no watermark ».
 *
 * Format des images structurelles : .jpeg (output natif Gemini, conservé tel quel
 * pour ne pas perdre de qualité par conversion). Les articles peuvent rester en
 * .webp via la chaîne de génération en-app si activée.
 */

import { niche } from '@/niche.config'

export type ImageSlot = {
  id: string
  path: string
  width: number
  height: number
  alt: string
  description: string
  prompt: string
  section: 'home' | 'tools' | 'author' | 'brand' | 'blog'
}

/** Placeholder pour remplacer dans les prompts : [niche] */
function p(str: string): string {
  return str
    .replace(/\[niche\]/g, niche.entity)
    .replace(/\[nicheEn\]/g, niche.entities)
    .replace(/\[tagline\]/g, niche.tagline)
}

const NEG = 'no text, no logos, no watermark'

// ─── Slots statiques ────────────────────────────────────────────────────

const STATIC_SLOTS: ImageSlot[] = [
  // Home
  {
    id: 'home-hero-background',
    path: '/images/home/hero-background.jpeg',
    width: 1920,
    height: 1080,
    alt: 'Arrière-plan du hero — stade de football au crépuscule',
    description: 'Grande image en fond du hero above-fold. Stade éditorial au golden hour, ambiance magazine premium.',
    prompt:
      `Cinematic editorial empty football stadium at golden hour, warm side lighting on empty stands, dramatic long shadows, muted warm color grading, premium magazine aesthetic, shallow depth of field, ${NEG}`,
    section: 'home',
  },
  {
    id: 'home-hero-visual',
    path: '/images/home/hero-visual.jpeg',
    width: 1000,
    height: 1250,
    alt: 'Visuel principal du hero — silhouette éditoriale',
    description: 'Visuel principal à droite du hero (variant "split") ou en illustration de fond du hero centered.',
    prompt:
      `Editorial close-up portrait of football player silhouette in motion, dramatic side lighting, deep shadows, warm tones, cinematic vertical composition, premium magazine style, ${NEG}`,
    section: 'home',
  },

  // Tools — slots conservés pour cohérence du registre. Quiz/Comparator/Simulator
  // sont désactivés dans niche.config.ts pour ce site (magazine pur), donc les
  // images correspondantes ne sont pas générées à l'init. Le placeholder se déclenchera
  // si une page outil est rendue.
  {
    id: 'comparer-hero',
    path: '/images/tools/comparer-hero.webp',
    width: 1920,
    height: 600,
    alt: 'Header du comparateur',
    description: 'Bandeau horizontal en haut de /comparer. Outil désactivé sur ce site (magazine).',
    prompt: p(`Wide minimalist banner evoking side-by-side comparison of [nicheEn], clean background, editorial tone, ${NEG}`),
    section: 'tools',
  },
  {
    id: 'quiz-hero',
    path: '/images/tools/quiz-hero.webp',
    width: 1920,
    height: 600,
    alt: 'Header du quiz',
    description: 'Bandeau horizontal en haut de /quiz. Outil désactivé sur ce site (magazine).',
    prompt: p(`Wide banner evoking a guided personalized choice for [nicheEn], soft gradients, abstract path, ${NEG}`),
    section: 'tools',
  },
  {
    id: 'simulateur-hero',
    path: '/images/tools/simulateur-hero.webp',
    width: 1920,
    height: 600,
    alt: 'Header du simulateur',
    description: 'Bandeau horizontal en haut de /simulateur. Outil désactivé sur ce site (magazine).',
    prompt: p(`Wide banner evoking calculation and budget for [niche], abstract data visualization, clean lines, ${NEG}`),
    section: 'tools',
  },
  {
    id: 'deals-hero',
    path: '/images/tools/deals-hero.webp',
    width: 1920,
    height: 600,
    alt: 'Header des deals',
    description: 'Bandeau horizontal en haut de /deals. Outil désactivé sur ce site (magazine sans affiliation).',
    prompt: p(`Wide banner evoking premium offers for [niche], warm glowing accent lighting, editorial quality, ${NEG}`),
    section: 'tools',
  },

  // Brand
  {
    id: 'og-default',
    path: '/images/brand/og-default.webp',
    width: 1200,
    height: 630,
    alt: 'Image OpenGraph par défaut',
    description: 'Image de partage par défaut (fallback). Le site a déjà un opengraph-image.tsx dynamique ; celle-ci est optionnelle.',
    prompt: p(`Branded social sharing card background for a [niche] guide, premium look, space for an overlay, ${NEG}`),
    section: 'brand',
  },
]

// ─── Slots dynamiques (catégories, auteurs) ─────────────────────────────

function dynamicSlots(): ImageSlot[] {
  const slots: ImageSlot[] = []

  // Une image par catégorie (section home)
  niche.categories.forEach((cat) => {
    slots.push({
      id: `home-category-${cat.slug}`,
      path: `/images/categories/${cat.slug}.jpeg`,
      width: 1200,
      height: 900,  // 4:3 natif Gemini
      alt: `Illustration ${cat.label}`,
      description: `Image d'illustration de la section "${cat.label}" sur la home et en page pilier.`,
      prompt:
        `Editorial photo representing ${cat.label} in the ${niche.entity} context, shallow depth of field, premium magazine style, balanced composition, ${NEG}`,
      section: 'home',
    })
  })

  // Fond cinématique d'en-tête d'article par catégorie
  niche.categories.forEach((cat) => {
    slots.push({
      id: `blog-category-background-${cat.slug}`,
      path: `/images/blog/category-${cat.slug}.jpeg`,
      width: 2400,
      height: 1350,  // 16:9 natif Gemini (au lieu de 2:1 non supporté)
      alt: `Arrière-plan des articles ${cat.label}`,
      description: `Fond cinématique derrière le titre de chaque article de la catégorie "${cat.label}". Atmosphérique, avec de l'espace pour un overlay sombre et du texte.`,
      prompt:
        `Cinematic dark editorial background representing ${cat.label} for a ${niche.entity} guide, moody atmospheric lighting, rich muted color grading, space for a dark overlay, ${NEG}`,
      section: 'blog',
    })
  })

  // Photo auteur
  if (niche.author.slug) {
    slots.push({
      id: `author-${niche.author.slug}`,
      path: `/images/authors/${niche.author.slug}.jpeg`,
      width: 1024,
      height: 1024,
      alt: `Portrait éditorial de ${niche.author.name}`,
      description: 'Portrait éditorial de l\'auteur principal, format carré. Page auteur, articles, section AuthorTeaser.',
      prompt: `Stylized editorial illustration of a male sports journalist silhouette in profile, taking notes in a stadium press box, warm amber lighting, abstract figurative style, premium magazine illustration aesthetic, ${NEG}`,
      section: 'author',
    })
  }

  return slots
}

// ─── API publique ───────────────────────────────────────────────────────

/** Retourne tous les slots (statiques + dynamiques depuis niche.config). */
export function getAllImageSlots(): ImageSlot[] {
  return [...STATIC_SLOTS, ...dynamicSlots()]
}

/** Retourne un slot par son ID. */
export function getImageSlot(id: string): ImageSlot | undefined {
  return getAllImageSlots().find((s) => s.id === id)
}

/** Retourne les slots groupés par section. */
export function getImageSlotsBySection(): Record<string, ImageSlot[]> {
  const slots = getAllImageSlots()
  const grouped: Record<string, ImageSlot[]> = {}
  for (const slot of slots) {
    if (!grouped[slot.section]) grouped[slot.section] = []
    grouped[slot.section].push(slot)
  }
  return grouped
}
