# demoExpressWithProxy


Petit exemple d'utilisation de la librairie express pour faire un site web qui est hébergé par exemple sur un raspberry pi et qui fait proxy vers certains services rest hébergé sur un esp8266 ou esp32

# Installation

```bash
yarn add express-http-proxy
yarn add express
```

# Démarrage

```bash
node app.js
```

# Structure

Tout ce qui doit être téléchargé vers le navigateur doit être dans le répertoire **public** (ou un de ses sous répertoires). Cela concerne les pages html, les images, le code javascript qui va tourner dans la navigateur.

Le code de votre serveur Web se trouve dans le fichier app.js.

```js
//Chargement des libraries utilisées
var proxy = require('express-http-proxy');
const express = require('express');
const app = express();

//Configuration pour configurer que les ressources static sont dans le répertoire publics
app.use(express.static('public'));

//Configuration pour configurer que toutes requêtes GET ou POST arrivant sur l'URL /api doit être renvoyé vers l'ESP
app.use('/api', proxy('http://IPOFYOURESP:4000/api'));

//Construction de vos propres services qui ne tourne que sur le raspberry pi ou votre serveur
app.get('/myfunction', function (req, res) {
  res.send('Hello World!')
})
// Configuration du port d'écoute et démarrage du serveur
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

```
