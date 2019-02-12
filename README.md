# PJT4SUPBANK

## Installation

IDE: `Visual Studio Code` obligatoire

Extensions nécessaires: 
  - `Prettier - Code formatter`: **Esben Petersen** | plus de 7M de téléchargement
  - `TSLint`: **Microsoft** | plus de 120K de téléchargement
  
## Lancer le projet

- Ouvrir une invite de commande
- Se déplacer dans le répertoire du projet
- `ng serve`
- Ouvrir une page internet: [`http://localhost:4200`](http://localhost:4200)

## Environement de Dev

Dans le fichier `settings.json` (*ctrl+P* & rechercher le fichier) , ajouter cette propriété à l'objet :
```json
"editor.codeActionsOnSave": {
  "source.fixAll.tslint": true
}
```
Le code sera formatté automatiquement, si possible, à chaque sauvergarde manuelle (`ctrl+S`)

## Package

- `Angular Material`: Librairie graphique
- `prettier`: Formattage de code
- `pretty-quick`: Permet de lancer prettier en ligne de commande
- `husky`: Permet de lancer des instruction en pre-commit

## Commit & Push

- Aucun commit sur **Master**
- Le projet complet doit être formatté avec `Prettier` (alt+shift+F) et doit respecter le `TSLint` pour pouvoir être **commit**.
- Faire une **Pull request** pour merger une branche sur **Master**

