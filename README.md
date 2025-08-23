# Project Title
Live Demo: https://dustunderbag.github.io/XXXX-XXXX

## Features: 
* abc
* abc
* abc

## Cloning this project locally
1. Clone this repository in any location.
2. In terminal, navigate to this repository.
3. Install npm packages by running:
   `npm install`

## Deploy and host applcation on GitHub
Before deploying, all changes MUST be <b>committed</b>  

Run the following commands.
1. Merge branch `main` branch to branch `gh-page`:   
   `git checkout gh-pages && git merge main --no-edit`
2. Bundle the code into `dist`:  
   `rpm run build`
3. `git add dist -f && git commit -m "Deployment commit"`
4. `git subtree push --prefix dist origin gh-pages`
5. `git checkout main`