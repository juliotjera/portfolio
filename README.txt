PORTFOLIO — JULIO (version "vibe japonais")
Concept : ambiance japonaise épurée — motif de vagues (seigaiha), torii, kanji en légende de section.
Alternative à "portfolio-simple" (thème plan/document technique) : même profil, autre habillage visuel.

FICHIERS
- index.html  → structure et contenu
- style.css   → design (variables couleurs/typo en haut du fichier)
- script.js   → menu mobile, animations au défilement, formulaire de contact

POUR PERSONNALISER
1. Ouvrez index.html dans un navigateur pour voir le rendu (double-clic suffit, aucune installation).
2. Remplacez "julio@example.com" par votre adresse (About, Contact, et script.js pour le bouton d'envoi).
3. Remplacez "github.com/julio" par votre vrai profil GitHub/LinkedIn dans la section Contact.
4. Section "Projets" : remplacez les 3 descriptions, tags et liens Démo/Code par vos vrais projets.
5. Section "Compétences" : ajoutez/retirez des .skill-tile dans chaque .skill-group selon votre stack,
   et mettez à jour le nombre dans .count-num en conséquence.
6. Photo : remplacez le cercle "photo-circle" (actuellement juste une initiale) par une vraie photo
   en ajoutant <img src="votre-photo.jpg" alt="Julio" /> à l'intérieur, avec object-fit:cover en CSS.
7. Couleurs et polices : tout se règle dans le bloc `:root { ... }` en haut de style.css
   - --accent : couleur d'accent (actuellement bleu)
   - --paper / --paper-raised : fonds clair / cartes
   - --font-display / --font-body / --font-mono : les polices (Google Fonts, liées dans index.html)
8. CV : le bouton "Télécharger mon CV" pointe vers "cv-julio.pdf" — ajoutez ce fichier PDF
   dans le dossier (à côté d'index.html) sinon le lien renverra une erreur 404.
9. Partage sur les réseaux : ajoutez une image "og-image.png" (1200x630px) dans le dossier
   pour un bel aperçu quand le lien est partagé sur LinkedIn/Discord/etc. (balises og:image
   déjà en place dans le <head>).

LE FORMULAIRE DE CONTACT
Il n'y a pas de serveur : le bouton "Envoyer le message" ouvre le client mail de l'utilisateur
avec le sujet et le message déjà remplis (voir script.js, fonction mailto). Aucune donnée n'est
stockée ni envoyée à un tiers.

ACCESSIBILITÉ & PERFORMANCE
- Contrastes vérifiés, focus clavier visible, navigation au clavier fonctionnelle.
- Animations désactivées automatiquement si l'utilisateur préfère "réduire les animations" (OS).
- Aucune dépendance : HTML/CSS/JS pur, aucune installation nécessaire.
