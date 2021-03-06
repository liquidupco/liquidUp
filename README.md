# Liquidup

/!\ Utiliser une version de nodeJS 9.2.1 ou supérieur /!\

## Récupérer le projet et les dépendances

- git clone https://github.com/liquidupco/liquidUp.git

- npm install

## Récupérer les modifications apportées au projet

- git pull

- npm install

## Sauvegarder les modifications apportées au projet

- git add .

- git commit -m "message du commit"

- git push

## Installer Strapi

n'importe ou sur la machine:

- npm install strapi@alpha -g

## Lancer l'application strapi

Aller à l'emplacement de mongod.exe

Windows:
- mongod.exe

Mac/Linux: RTFM

Retourner dans le dossier du projet puis dans le sous dossier liquidup (dans un autre invite de commande, il faut laisser mongod.exe tourner)
- strapi start

Ouvrez votre navigateur

http://localhost:1337

http://localhost:1337/admin

Tuto strapi:

https://strapi.io/documentation/3.x.x/getting-started/quick-start.html#_3-create-a-content-type

## Problèmes courants

### La commande strapi ne marche pas

- Réessayer d'installer strapi
- Vérifier la version de nodeJS
- Redémarrer l'ordinateur 
- Essayer la commande "> node server.js" à la racine du projet

### La commande git ne marche pas

- Vérifier que git est bien installé
- Vérifier qu'elle est tapée dans le bon dossier
- Demander aux admins de vérifier que les droits ont été donnés (dans le cas d'un push)
- Vérifier le compte enregistré dans l'ordinateur

### Le projet ne démarre pas ou plante sans raison apparente

- Vérifier si la commande "npm install" a bien été entrée depuis le dernier "pull" de git
- Vérifier les versions de npm (npm -v), node (node -v) et strapi (strapi -v)
- Vérifier que le serveur MongoDB est bien lancé

### La commande npm ne marche pas

- Aller sur le site de NodeJS pour le réinstaller:
https://nodejs.org/en/download/

### Si ça ne marche toujours pas:

 - reformatez l'ordinateur
