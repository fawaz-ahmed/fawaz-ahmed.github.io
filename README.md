# fawaz-ahmed.github.io

Built with create-react-app with custom-react-scripts

`npm install -g create-react-app custom-react-scripts`

`create-react-app fawazahmed —scripts-version custom-react-scripts`

Setup for github pages :

1_ Add homepage link to `package.json` :

`"homepage": "https://fawaz-ahmed.github.io",`

2_ Install `gh-pages` :

`npm install --save gh-pages`

3_ Add following scripts to `package.json`

<I'm using devel branch for development and master for deployment>

`"scripts": {`

`  "predeploy": "npm run build",`

`  "deploy": "gh-pages -d build -b master",`

`  ...}`
