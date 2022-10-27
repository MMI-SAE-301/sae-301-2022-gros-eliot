# code de base pour TP (et future SAE 301)

- **Nom : Gros**
- **Prénom : Eliot**
- **URL maquette Figma: https://www.figma.com/file/xRo5o8utclGQ4MUhuk161k/SAE301---Eliot-Gros-B1?node-id=0%3A1**
- **URL publique du site : http://tiktak.eliotgros.fr/**
- **URL projet Supabase : https://kisrworleajyjetsbnmz.supabase.co**
  - [x] Avez-vous invité abdallah.makhoul@univ-fcomte.fr dans votre 'Organisation' Supabase ?

# Auto-évaluation

## R313 | Dev Back (Abdallah Makhoul : [AC 2404](https://moodle.univ-fcomte.fr/mod/assign/view.php?id=612670) et [AC 2402](https://moodle.univ-fcomte.fr/mod/assign/view.php?id=612669))

Vous avez rendu à la racine du projet :

- [x] Le modèle conceptuel de données (nom : [MCD.png](/MCD.png) ou [MPD.pdf](/MPD.png) [^1])
- [x] Et compléter le fichier [bdd.sql](/bdd.sql) détaillant le code pour la création des tables, vues et policies créées
- [x] Avez-vous bien invité abdallah.makhoul@univ-fcomte.fr dans votre 'Organisation' Supabase comme développeur ?

## R312 | Intégrer ([Pierre Pracht : AC 2401](https://moodle.univ-fcomte.fr/mod/assign/view.php?id=612668))

Pour les liens :

- [BDD/MCD & MPD](https://github.com/MMI-SAE-301/sae-301-2022-gros-eliot/commit/74d3584cabdff6c43428ffa392c983bb40a0188e)

- [Tailwind fonctionnel: import classes de couleurs](https://github.com/MMI-SAE-301/sae-301-2022-gros-eliot/commit/06b29498bbc10f7f4120be87cf7c9e42ccb9de49)

- [Tailwind fonctionnel: import des fonts](https://github.com/MMI-SAE-301/sae-301-2022-gros-eliot/commit/787696fbe0a5adf028831213cca267e45d637f67)

- [Header responive + structure vue de base](https://github.com/MMI-SAE-301/sae-301-2022-gros-eliot/commit/7e7ef8621449182b1bd8092f0a6a29e38a69a1b0)

- [connexion fonctionnel + "se déconnecter / se connecter" dans header](https://github.com/MMI-SAE-301/sae-301-2022-gros-eliot/commit/d12680c506189098a4e3c80d476e989bccde3539)

- [connexion fonctionnel (Google, Facebook)](https://github.com/MMI-SAE-301/sae-301-2022-gros-eliot/commit/3401c31e47153d5a806c1e2dbc6074250ee99186)

- [Footer responsive et fonctionnel](https://github.com/MMI-SAE-301/sae-301-2022-gros-eliot/commit/159d2c6fbe250d0f9e0c1204ccc86f1a7b8fe61e)

- [Hero de la page d'accueil - light mode à la place du dark mode](https://github.com/MMI-SAE-301/sae-301-2022-gros-eliot/commit/f4780f62b3cf10f6972e17c9989e8de4cfbc3d04)

- [Fin page d'accueil avec exemples (composants SVG importés)](https://github.com/MMI-SAE-301/sae-301-2022-gros-eliot/commit/32ae61ddefb8b0564e085d300f072d6fc7692fcc)

- [Début formulaire de personnalisation](https://github.com/MMI-SAE-301/sae-301-2022-gros-eliot/commit/f111777339683339652a044a54740617e2ce5711)

- [Formulaire de personnalisation terminé](https://github.com/MMI-SAE-301/sae-301-2022-gros-eliot/commit/dfc5b87e2f6de911bd0889ab88fb006b0be16115)

- [Page liste des produits fonctionnelle](https://github.com/MMI-SAE-301/sae-301-2022-gros-eliot/commit/0589932d5d2e34de43b1f0fc38011df4b92c0da6)

- [Page du produit disponible (commande possible)](https://github.com/MMI-SAE-301/sae-301-2022-gros-eliot/commit/71fa925a9cc8b5051a46dce8e60064eeaa097f0d)

- [Page du produit : update (suppression possible)](https://github.com/MMI-SAE-301/sae-301-2022-gros-eliot/commit/587787f68d127ecc2dc839f54cf63ae82f353dbc)

- [Améliorations SEO](https://github.com/MMI-SAE-301/sae-301-2022-gros-eliot/commit/a6f9ac4905fa265c7ea58b08b55208f9e60cf6b0)

- [Améliorations performances : optimisation des images](https://github.com/MMI-SAE-301/sae-301-2022-gros-eliot/commit/f04763aa6d0d47f8b72d5037768e5fc21812fc48)

- [Correction du bug des aiguilles](https://github.com/MMI-SAE-301/sae-301-2022-gros-eliot/commit/ea5585a50ef0e087cca1092a145da7f14053df59)

- [Accessibilité : ajout d'éléments](https://github.com/MMI-SAE-301/sae-301-2022-gros-eliot/commit/9bdbab2fe0a58130dc251613e18a87859c62b4a2)

- [Fichier BDD.sql mis à jour](https://github.com/MMI-SAE-301/sae-301-2022-gros-eliot/commit/145ee41d1607bae3e5999f2939893355933c4c91)

Noté sur 40.

- [README](/README.md) bien rempli (0-2-4pts)
  - Ne cochez que ce que vous avez fait.
- Fonctionnalités "avancées" du site (0-2-4pts)
- Intégration du site (0-2-4-6pts)
- Code et Commit (0-2-4-6pts)
- Code HTML spécifiquement sémantique et accessible (0-1-2pts)

- [x] usage de Classes utilitaires (1pt)
  - [lien vers sa définition](/src/index.css)
  - [lien vers son usage](/src/pages/Connexion.vue#L4)
- [x] Composants graphiques (0-1-2pts)

  - [éléments layouts (header, footer)](/src/components/layout/)
  - [icons : exemple avec LogoTikTak](/src/components/icons/LogoTikTak.vue)
  - [Composants généraux avec les formulaires, HeroView...](/src/components/general/)

- Technique CSS (0-1-2pts)

  - [backgroundColor](/src/components/general/FormKitColors.vue#L23)
  - [background avec image + couleur par dessus](/src/components/general/FormKitTexture.vue#L24)
  - [screens pour light mode](/tailwind.config.js#L20)
  - [gridTemplateColumns (template de grid)](/tailwind.config.js#L23)

- Mise en page CSS (0-1-2pts)

  - [Flex](/src/pages/index.vue#L138)
  - [Grid](/src/components/general/CommandeMontre.vue#L99)
  - [Hidden, block](/src/components/layout/HeaderView.vue)

  - [x] Mise en page fluide

- [x] Mobile First (0-1-2pts)

  - [x] Plusieurs tailles
    - [Taille de base, md et lg : exemple (cliquez ici)](src/index.css#L11)

- [x] Dark Mode (0-1-2pts)

  - [ ] Simple usage de 'light:'
  - [x] Mise en place avec usage de custom property pour les couleurs. Ou usage de DaisyUI AVEC thèmes perso
    - [Page de produit (partie commande)](/src/components/general/CommandeMontre.vue#L79)
    - [Page accueil](/src/pages/index.vue)
    - [Fond des pages](/index.html#L18)

- "tailwin.config.js" (0-1-2pts)

  - [usage basique couleurs/fonts](/tailwind.config.js#L8)
  - [gridTemplateColumns](/tailwind.config.js#L23)

- Composants "accessibles" (0-1-2pts)
  - [textes "accessibles" (eg. 'sr-only')](/src/App.vue#L30)
  - [ ] Contenu accessible ET Usage de composants étudié pour accessibilité (Eg. HeadlessUI)

[^1]: Supprimez les mentions inutiles.
