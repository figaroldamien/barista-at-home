# Blog Latte Art & Méthodes Douces ☕

Blog pédagogique pour partager des techniques de latte art et méthodes d'extraction douces, destiné aux amateurs passionnés.

## 🚀 Démarrage rapide

### Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur `http://localhost:4321`

### Commandes disponibles

| Commande | Action |
|----------|--------|
| `npm install` | Installe les dépendances |
| `npm run dev` | Lance le serveur de dev sur `localhost:4321` |
| `npm run build` | Compile le site pour la production dans `./dist/` |
| `npm run preview` | Prévisualise le build de production localement |

## 📝 Ajouter un nouvel article

1. Créer un nouveau fichier `.mdx` dans `src/content/posts/`
2. Copier le template ci-dessous
3. Remplacer les informations
4. Écrire votre contenu en Markdown

### Template d'article

```mdx
---
layout: ../../layouts/PostLayout.astro
title: "Titre de votre article"
description: "Description courte pour le référencement et la carte d'article"
date: "2026-02-01"
difficulty: "Débutant" # Débutant, Intermédiaire, ou Avancé
coverImage: "/images/nom-de-votre-image.jpg"
coverImageAlt: "Description de l'image"
tags: ["Tag1", "Tag2", "Tag3"]
---

Votre contenu ici en Markdown...

## Sous-titre

Paragraphe avec **gras** et *italique*.

![Description image](/images/votre-image.jpg)

<div class="tips-box">

**💡 Astuce** : Votre conseil ici

</div>

<div class="warning-box">

**⚠️ Attention** : Votre avertissement ici

</div>

<div class="equipment-box">

**📦 Matériel** : Vos recommandations matériel ici

</div>
```

## 📁 Structure du projet

```
/
├── public/
│   ├── images/          # Vos photos et vidéos
│   └── styles/
│       └── global.css   # Styles du site
├── src/
│   ├── content/
│   │   └── posts/       # 📝 VOS ARTICLES ICI
│   ├── layouts/
│   │   ├── Layout.astro       # Layout principal
│   │   └── PostLayout.astro   # Layout des articles
│   └── pages/
│       ├── index.astro        # Page d'accueil
│       ├── articles.astro     # Liste des articles
│       └── about.astro        # Page à propos
├── astro.config.mjs     # Configuration Astro
└── package.json
```

## 🎨 Personnalisation

### Couleurs

Modifiez les couleurs dans `public/styles/global.css` :

```css
:root {
    --color-primary: #6b4423;      /* Marron café */
    --color-secondary: #d4a574;    /* Beige lait */
    --color-bg: #fefefe;           /* Fond */
    --color-text: #2c2c2c;         /* Texte */
}
```

### Navigation

Modifiez le menu dans `src/layouts/Layout.astro` :

```html
<ul>
    <li><a href="/">Accueil</a></li>
    <li><a href="/articles">Articles</a></li>
    <li><a href="/about">À propos</a></li>
</ul>
```

## 📦 Déploiement

### Sur Netlify (Recommandé - Gratuit)

1. Créez un compte sur [Netlify](https://www.netlify.com/)
2. Connectez votre repository GitHub
3. Configurez :
   - Build command : `npm run build`
   - Publish directory : `dist`
4. Déployez !

### Sur Vercel (Alternative - Gratuit)

1. Créez un compte sur [Vercel](https://vercel.com/)
2. Importez votre projet depuis GitHub
3. Vercel détecte automatiquement Astro
4. Déployez !

## 🖼️ Ajouter des images

1. Placez vos images dans `public/images/`
2. Référencez-les dans vos articles : `/images/nom-image.jpg`
3. Optimisez vos images avant (compression, format WebP si possible)

### Formats recommandés

- **Photos** : JPG ou WebP (compression 80-85%)
- **Illustrations** : PNG ou SVG
- **Taille max** : 1200px de large pour les images d'articles

## 🎥 Ajouter des vidéos

### Option 1 : YouTube/Vimeo (Recommandé)

```markdown
<iframe 
  width="100%" 
  height="400" 
  src="https://www.youtube.com/embed/VOTRE_VIDEO_ID" 
  frameborder="0" 
  allowfullscreen>
</iframe>
```

### Option 2 : Vidéo locale (fichiers légers uniquement)

```markdown
<video controls width="100%">
  <source src="/images/votre-video.mp4" type="video/mp4">
</video>
```

## 💡 Conseils d'écriture

### Structure d'un bon article

1. **Introduction** : Pourquoi ce sujet est important
2. **Prérequis** : Matériel et niveau nécessaires
3. **Étapes détaillées** : Technique pas à pas
4. **Troubleshooting** : Problèmes courants et solutions
5. **Exercices** : Progression pour s'entraîner
6. **Conclusion** : Récapitulatif et prochaines étapes

### Éléments à inclure

- ✅ Photos/vidéos claires à chaque étape importante
- ✅ Encadrés tips/warning/equipment pour les infos importantes
- ✅ Adaptations selon les types de machines
- ✅ Timing estimés et objectifs mesurables
- ✅ Ton encourageant et bienveillant

## 🔧 Technologies utilisées

- **Astro** : Framework du site
- **MDX** : Format des articles (Markdown enrichi)
- **CSS vanilla** : Styles (pas de framework lourd)

## 📞 Support

Pour toute question sur la configuration technique du blog, référez-vous à :
- [Documentation Astro](https://docs.astro.build)
- [Documentation MDX](https://mdxjs.com/)

## 📄 Licence

Ce projet est à usage personnel. Le contenu des articles vous appartient.
