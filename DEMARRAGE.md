# 🚀 Guide de démarrage rapide

## Étape 1 : Installation

Ouvrez un terminal dans le dossier du projet et lancez :

```bash
npm install
```

Cette commande va télécharger toutes les dépendances nécessaires (Astro, MDX, etc.).

## Étape 2 : Lancer le site en local

```bash
npm run dev
```

Ouvrez votre navigateur sur `http://localhost:4321`

Vous devriez voir votre blog avec 2 articles d'exemple !

## Étape 3 : Ajouter votre premier article

1. Allez dans le dossier `src/content/posts/`
2. Créez un nouveau fichier, par exemple : `ma-premiere-rosetta.mdx`
3. Copiez le contenu d'un des articles existants comme base
4. Modifiez le contenu
5. Sauvegardez

Le site se recharge automatiquement, votre article apparaît !

## Étape 4 : Personnaliser

### Changer les couleurs

Ouvrez `public/styles/global.css` et modifiez les variables CSS :

```css
:root {
    --color-primary: #6b4423;   /* Votre couleur principale */
    --color-secondary: #d4a574; /* Votre couleur secondaire */
}
```

### Modifier la page "À propos"

Ouvrez `src/pages/about.astro` et modifiez le contenu.

### Changer le titre du blog

Ouvrez `src/layouts/Layout.astro` et modifiez la ligne :

```html
<h1><a href="/">☕ Votre Titre Ici</a></h1>
```

## Étape 5 : Ajouter vos images

1. Placez vos photos dans `public/images/`
2. Dans vos articles, référencez-les comme ceci :

```markdown
![Description](/images/nom-de-votre-photo.jpg)
```

## Étape 6 : Déployer en ligne (gratuit)

### Option A : Netlify

1. Créez un compte sur https://netlify.com
2. Installez Git si ce n'est pas fait
3. Initialisez Git dans votre projet :
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```
4. Créez un repo sur GitHub et poussez votre code
5. Sur Netlify : "Import from Git" → sélectionnez votre repo
6. Netlify détecte automatiquement la configuration
7. Cliquez sur "Deploy" !

Votre blog sera en ligne en 2-3 minutes sur une URL type `votre-blog.netlify.app`

### Option B : Vercel

Même principe que Netlify :
1. Compte sur https://vercel.com
2. Import depuis GitHub
3. Deploy automatique

## Commandes utiles

```bash
# Développement local
npm run dev

# Compiler pour la production (test en local)
npm run build
npm run preview

# Tout réinstaller en cas de problème
rm -rf node_modules
npm install
```

## Besoin d'aide ?

- Consultez le `README.md` pour plus de détails
- Documentation Astro : https://docs.astro.build
- Les articles d'exemple contiennent tous les cas d'usage courants

## Checklist avant de publier votre premier article

- [ ] Les métadonnées sont remplies (title, description, date, tags)
- [ ] Une image de couverture est définie
- [ ] Les images sont optimisées (< 500KB par image)
- [ ] Le texte est relu et formaté
- [ ] Les encadrés tips/warning sont bien utilisés
- [ ] L'article est adapté à votre public (amateurs éclairés)

Bon courage et amusez-vous bien ! ☕✨
