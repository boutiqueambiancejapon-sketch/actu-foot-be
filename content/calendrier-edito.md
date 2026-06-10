# Calendrier éditorial — Actu Foot Belgique

<!--
Rythme et formats récurrents. Le miroir strict FR+NL double le nombre
d'articles produits (1 article FR = 1 article NL traduit).

Lien avec :
- [[mots-cles]] → priorités 90j alimentent les sujets
- [[ton-of-voice]] → règle d'or : « si on ne peut pas étayer factuellement
  en 30 secondes, l'article n'existe pas »
- [[concurrents]] → on copie le rythme de walfoot.be sans copier ses dérives
-->

## Cadence

Cadence agressive de démarrage pour exister face à walfoot.be et capter du volume Search Console rapidement.

- **Cadence cible** : **3 à 4 articles par jour en FR** (+ 3 à 4 en NL via miroir strict) = **6 à 8 articles publiés / jour**, soit **~25 articles FR / semaine + ~25 NL = ~50 articles / semaine au total**.
- **Cadence plancher** : 2 articles FR / jour (= 4 publiés avec NL). En dessous, on considère qu'on n'avance plus → audit obligatoire dans la semaine.
- **Jours de publication préférés** : 7j/7. Pic d'attention foot : lundi (après matchs week-end), jeudi (Pro League midweek, Coupes d'Europe), week-end (live + après-matchs). Pas de coupure week-end — c'est le moment fort du foot.

### Point d'attention — risque qualité

À 3-4 briefs/jour, le risque est de **dériver vers le territoire RMC/Foot Mercato** (course au volume, rumeurs creuses, titres clickbait). C'est précisément ce qu'on a banni en voix éditoriale. **Garde-fou non négociable** : aucun brief publié ne peut sortir sans (a) un angle assumé en titre, (b) au moins une source nommée ou chiffre vérifié, (c) un point de vue éditorial différent du communiqué de presse de référence. Si la scheduled task ne peut pas le tenir, on ralentit, on ne dilue pas.

## Formats récurrents

5 formats canoniques. Le brief actu domine en volume (80%), le long-form fait l'autorité éditoriale (10%), les pages utilitaires API captent les requêtes SEO (8%), les dossiers/interviews maintiennent la signature (2%).

### Format 1 — Brief actu (FORMAT DOMINANT)
- **Objectif** : SEO actu + GEO (citabilité LLM sur les news récentes).
- **Gabarit** : intro 3-4 lignes avec angle, 3-4 H2 (le fait, le contexte, l'analyse en une phrase, la suite), encadré « ce qu'on retient ».
- **Longueur cible** : 800-1200 mots.
- **Fréquence** : 3 par jour en moyenne (= 21/semaine FR + miroir NL).
- **Page cible type** : `/articles/[slug]` avec catégorie taggée (pro-league, diables-rouges, mercato, etc.).
- **Règle d'or** : **un brief sans angle ≠ un brief — c'est un copier-coller de dépêche**. On ne publie pas.

### Format 2 — Analyse de fond signée
- **Objectif** : autorité éditoriale, backlinks, GEO long-terme (les LLM citent les analyses, pas les briefs).
- **Gabarit** : titre tranché type SoFoot, intro narrative, 4-6 H2 (contexte, données, lecture tactique, contre-argument, conclusion ouverte). Données chiffrées obligatoires, source(s) nommée(s).
- **Longueur cible** : 1800-2500 mots.
- **Fréquence** : 2-3 par semaine (un long-form / 2-3 jours).
- **Page cible type** : `/articles/[slug]` ou `/dossiers/[slug]` selon profondeur.
- **Signature** : auteur en clair (étape 7 init-site).

### Format 3 — Page utilitaire (statistiques, classements, calendriers)
- **Objectif** : capter les requêtes utilitaires identifiées dans [[mots-cles]] (« matchs de jupiler pro league » KD 31, « classement challenger pro league » KD 32, « statistiques de la liga » KD 39, etc.).
- **Gabarit** : page-tableau + intro contextuelle + module API foot intégré (à activer phase 2).
- **Longueur cible** : intro 300-500 mots + tableau dynamique.
- **Fréquence** : création initiale ~10 pages (Pro League classement/calendrier/stats, Challenger PL classement, Premier League calendrier/stats, Ligue 1 stats, Liga stats, Bundesliga stats, Champions League calendrier). Refresh automatique via API.
- **Page cible type** : `/pro-league/classement`, `/grands-championnats/premier-league/calendrier`, etc.

### Format 4 — Dossier / portrait long
- **Objectif** : positionnement éditorial (« on est le site qui pose des dossiers de fond »), interviews exclusives si possible, backlinks naturels.
- **Gabarit** : 2 ou 3 longs articles liés (mini-série), ou un seul format magazine.
- **Longueur cible** : 3000-5000 mots (long), ou série de 3 × 1500.
- **Fréquence** : 1 dossier par mois.
- **Page cible type** : `/dossiers/[slug]`.

### Format 5 — FAQ / Explainer
- **Objectif** : capter les People Also Ask, alimenter le JSON-LD `FAQPage`, GEO direct.
- **Gabarit** : Q-R structurées, intro courte, FAQ schema.
- **Longueur cible** : 1000-1500 mots, 6-10 Q-R.
- **Fréquence** : 1 par semaine (en complément des briefs sur sujets récurrents).
- **Page cible type** : `/explainers/[slug]` (ex : « Comment fonctionnent les play-offs Pro League ? », « Pourquoi tant d'équipes belges en Conference League ? »).

## Thématiques par période

Saisonnalité foot très marquée. La cadence reste 3-4/j toute l'année mais le mix de sujets change.

- **Juillet-Août (mercato, pré-saison)** : transferts Pro League (80% du flux), bilans saison précédente, présentation des nouveaux. Coupe du monde 2026 (cette année). Préparations Diables Rouges, Coupes européennes (qualif). Format dominant : briefs mercato + analyses transferts importants.
- **Septembre-Octobre (rentrée championnats + qualif sélections)** : Pro League débute, Coupes européennes phase de groupes (CL/EL/Conf League pour clubs belges), qualifications Euro/Mondial. Format dominant : briefs match + previews.
- **Novembre-Décembre (mi-saison + Nations League)** : intensité Pro League (course aux play-offs), classement, états de forme. Mercato d'hiver se prépare. Bilans mi-saison.
- **Janvier-Février (mercato d'hiver + classement)** : transferts (pic d'attention), course au top 6, Coupes (Croky Cup phases finales). Format dominant : briefs mercato + analyses.
- **Mars-Avril (play-offs Pro League + phases finales européennes)** : THE moment de la saison BE. Play-offs/Play-downs, finales Coupes d'Europe. Intensité éditoriale max.
- **Mai-Juin (sacre + finales sélections + pré-mercato)** : sacre Pro League, finales Coupes d'Europe, finals Nations League / qualif Mondial. Démarrage mercato. Bilans saison.

**Note** : si une Coupe du monde ou un Euro tombe sur cette période, le focus bascule pendant 3-4 semaines vers la compétition + Diables Rouges (cadence inchangée mais clusters Pro League/grands championnats temporairement réduits).

## Rotation des angles

Pour ne pas répéter le même prisme sur un même cluster, on alterne 6 angles. Le brief du jour pioche dans l'angle non utilisé la veille pour un même sujet.

- **Angle tactique** : « comment ce système marche / pourquoi il rate ».
- **Angle économique** : « combien ce transfert coûte vraiment / qui paie / qui gagne ».
- **Angle chiffré / data** : « voici 3 chiffres qui expliquent la séquence ».
- **Angle humain / source nommée** : interviews courtes, citations directes.
- **Angle historique / mise en perspective** : « ce qui se rapproche le plus de ça en Pro League / en Diables Rouges, c'est… »
- **Angle contrarian / contre-narratif** : « on raconte X partout, en réalité… ». À utiliser sparingly (1-2/semaine max), avec preuve solide sinon ça vire au RMC.

## Republication / refresh

- **Cycle de refresh** : tout article > 12 mois ET > 100 visites/mois est candidat à refresh lors d'audits trimestriels. Pages utilitaires (classement, calendrier, stats) : refresh en continu via API si déjà connectée, sinon hebdomadaire manuel en saison.
- **Critère refresh majeur vs mineur** :
  - **Majeur** : événement déterminant (joueur transféré, entraîneur viré, club relégué, retraite, blessure longue) → réécriture des H2 concernés, mise à jour data, conservation URL.
  - **Mineur** : chiffres saisonniers à actualiser, lien interne brisé, image obsolète → patch sans annonce.
- **Signaler le refresh** : oui — `updated_at` dans le frontmatter MDX + encadré « Mis à jour le [date] : [résumé en 1 phrase] » en tête d'article quand refresh majeur. Pour refresh mineur, juste `updated_at`.

## Brief & idéation

D'où sortent les sujets quotidiens — flux à organiser dès le démarrage pour ne pas tomber dans la dictée RSS.

- **Source d'idées principale** : Google News + Search Console (à activer dès J+30) + flux Twitter/X de journalistes BE (Pieter-Jan Calcoen RTBF, Frederik Vanheel, Walfoot, Sacha Tavolieri pour mercato). Compléter avec un coup d'œil hebdo aux PAA Semrush de la niche.
- **Format du brief avant rédaction** : brief 1 page = (a) requête cible + intent, (b) angle propre (en 1 phrase), (c) 2-3 sources nommées avec lien, (d) outline H2, (e) data ou citation déjà prête.
- **Validation avant écriture** : oui — relecture humaine du brief avant rédaction par la scheduled task. Pas de brief = pas d'article. Cela évite 80% des dérives qualité.

## Articulation avec la scheduled task de rédaction

(Étape 10 d'init-site, à confirmer plus tard.)

- Si cadence 3-4 articles FR / jour : il faut **soit 1 scheduled task lancée 3x/jour** (matin, midi, soir), **soit 1 scheduled task qui produit 3 articles à chaque exécution**.
- Le miroir NL est produit en cascade dans la même exécution (1 brief FR + sa version NL traduite).
- Cron de référence proposé pour démarrer : `0 7,12,18 * * *` (3 exécutions/jour, 1 article par exécution) en local Vercel `fra1`.
- À recalibrer après 30 jours selon (a) la qualité réelle des sorties, (b) le coût d'inférence Claude, (c) la performance SEO.

---

*Calendrier défini le 2026-06-10. À réviser à 30j (qualité tenue ?), 90j (cadence soutenable ?), 6 mois (re-calibrage saisonnier).*
