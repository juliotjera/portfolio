// Bascule clair / sombre
// Le thème initial est déjà posé par le script en haut de index.html (anti-flash) ;
// on se contente ici de mettre le bouton à jour et de gérer le clic.
const themeToggle = document.getElementById("theme-toggle");

function majBoutonTheme() {
  const sombre = document.documentElement.dataset.theme === "dark";
  themeToggle.setAttribute("aria-pressed", String(sombre));
  themeToggle.setAttribute("aria-label", sombre ? "Passer en mode clair" : "Passer en mode sombre");
}

const animationsReduites = window.matchMedia("(prefers-reduced-motion: reduce)");

function appliqueTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("theme", theme);
  majBoutonTheme();
}

// Repli pour les navigateurs sans View Transitions : on active une transition
// sur les couleurs le temps de la bascule, puis on la retire.
function basculeAvecFondu(theme) {
  const racine = document.documentElement;
  racine.classList.add("theme-switching");
  appliqueTheme(theme);
  window.setTimeout(() => racine.classList.remove("theme-switching"), 500);
}

themeToggle.addEventListener("click", () => {
  const theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";

  if (animationsReduites.matches) return appliqueTheme(theme);
  if (!document.startViewTransition) return basculeAvecFondu(theme);

  // Le nouveau thème est révélé par un cercle qui s'ouvre depuis le bouton.
  const zone = themeToggle.getBoundingClientRect();
  const x = zone.left + zone.width / 2;
  const y = zone.top + zone.height / 2;
  const rayonMax = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y)
  );

  const transition = document.startViewTransition(() => appliqueTheme(theme));
  transition.ready
    .then(() => {
      document.documentElement.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${rayonMax}px at ${x}px ${y}px)`] },
        { duration: 550, easing: "cubic-bezier(.4, 0, .2, 1)", pseudoElement: "::view-transition-new(root)" }
      );
    })
    // `ready` est rejeté si le navigateur abandonne la transition — onglet en
    // arrière-plan, ou bascule déclenchée pendant qu'une autre est en cours.
    // Le thème a malgré tout été appliqué : on ignore simplement l'animation,
    // sans quoi la promesse rejetée remonterait en erreur dans la console.
    .catch(() => {});
});

// suit les réglages du système tant que l'utilisateur n'a pas choisi lui-même
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
  if (localStorage.getItem("theme")) return;
  document.documentElement.dataset.theme = e.matches ? "dark" : "light";
  majBoutonTheme();
});

majBoutonTheme();

// Année dans le pied de page + bloc hero
const yearNow = new Date().getFullYear();
document.getElementById("year").textContent = yearNow;
document.getElementById("year-big").textContent = yearNow;

// Menu mobile
const navToggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("site-nav");

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Fermer le menu" : "Ouvrir le menu");
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// Révélation au chargement + au défilement
const revealItems = document.querySelectorAll(".reveal");

function startLeafMotion(item) {
  if (!item.classList.contains("leaf") || item.dataset.motionStarted) return;
  item.dataset.motionStarted = "true";
  setTimeout(() => {
    item.classList.add("is-floating");
  }, 1450);
}

function revealOnLoad() {
  revealItems.forEach((item, index) => {
    const delay = Math.min(index * 80, 280);
    item.style.transitionDelay = `${delay}ms`;
    item.classList.add("is-visible");
    startLeafMotion(item);
  });
}

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          if (!el.classList.contains("is-visible")) {
            const delay = Array.from(el.parentElement.children).indexOf(el) * 60;
            el.style.transitionDelay = `${Math.min(delay, 240)}ms`;
            el.classList.add("is-visible");
            startLeafMotion(el);
          }
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  revealItems.forEach((item) => observer.observe(item));
  window.addEventListener("load", () => setTimeout(revealOnLoad, 80));
} else {
  window.addEventListener("load", () => setTimeout(revealOnLoad, 80));
}

// Formulaire de contact -> ouvre le client mail avec le message prérempli
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const subject = document.getElementById("f-subject").value;
  const name = document.getElementById("f-name").value.trim();
  const contact = document.getElementById("f-contact").value.trim();
  const message = document.getElementById("f-message").value.trim();

  const body = `Nom: ${name}\nContact: ${contact}\n\n${message}`;
  const mailto = `mailto:juliotjera7@gmail.com?subject=${encodeURIComponent(subject + " — via portfolio")}&body=${encodeURIComponent(body)}`;

  window.location.href = mailto;
});
