PORTFOLIO — JULIOT JERA (habillage japonais)

Ambiance japonaise épurée : motif de vagues seigaiha, cercle bleu, feuilles
et décors flottants. Alternative à "portfolio-simple" — même profil, autre
habillage visuel.

Aucune installation, aucune dépendance : HTML/CSS/JS pur. Ouvrir index.html
dans un navigateur suffit.


ARBORESCENCE
  index.html
  assets/
    css/style.css          design ; les variables (couleurs, typo, images)
                           sont regroupées dans le bloc :root en haut
    js/script.js           bascule clair/sombre, menu mobile, révélations
                           au défilement, formulaire de contact
    img/
      photo.png            photo détourée (fond transparent)
      leaf.png             feuille flottante
      og-image.png         aperçu au partage (1200x630)
      fond/                motif de vagues, versions claire et sombre
      deco/                vent, oiseaux, papillon, pagode — découpés du
                           visuel de fond pour pouvoir être animés
    doc/CV_JERA_Juliot.pdf

  Les chemins de style.css sont relatifs à assets/css/, donc préfixés par
  ../img/. Ceux d'index.html partent de la racine du dossier.


LES DEUX THÈMES
Chaque image existe en deux versions, claire et "-dark". Le thème est piloté
par l'attribut data-theme sur <html> : un petit script en haut d'index.html
l'applique avant le premier rendu, pour éviter le flash blanc au chargement.
Le choix est mémorisé ; sans choix explicite, le réglage du système décide.


LES ANIMATIONS DE LA PAGE 1
Réglées d'après la vidéo de référence, mesurée image par image.

  Ouverture (~1,5 s) : le cercle bleu paraît d'abord seul sur une page
  encore blanche, puis la photo monte depuis le bas, le motif se révèle, les
  textes arrivent, les boutons, et enfin les feuilles et les décors.

  En continu : les feuilles dérivent lentement, chacune avec sa propre
  période (18 à 26 s) et sa propre phase de départ, pour qu'elles ne soient
  jamais synchronisées. Le vent, le papillon, la pagode et les oiseaux
  suivent une trajectoire fermée parcourue à vitesse constante — sans quoi
  le mouvement s'arrête à chaque extrémité et paraît saccadé.

  Tout est neutralisé si le système demande de réduire les animations.


CE QUI RESTE À FAIRE
- Les liens "Démo" et "Code" des 3 projets pointent vers #contact. Mettre
  les vraies URL GitHub, ou retirer les boutons.


LE FORMULAIRE DE CONTACT
Il n'y a pas de serveur : le bouton d'envoi ouvre le client mail avec le
sujet et le message déjà remplis (voir script.js). Rien n'est stocké ni
transmis à un tiers.


ACCESSIBILITÉ
Contrastes vérifiés dans les deux thèmes, focus clavier visible, navigation
au clavier fonctionnelle, décors marqués aria-hidden.
