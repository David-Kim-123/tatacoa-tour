/**
 * MÓDULO: NavigationManager
 * Responsabilidad: Control del menú responsive (hamburguesa) en dispositivos móviles,
 * accesibilidad de teclado, bloqueo de scroll y cierre automático tras navegación.
 */

export class NavigationManager {
  constructor() {
    this.menuBtn = document.getElementById('mobile-menu-btn');
    this.mobileMenu = document.getElementById('mobile-menu');
    this.navLinks = document.querySelectorAll('.nav-link-mobile');
    this.header = document.getElementById('main-header');
    this.init();
  }

  init() {
    if (!this.menuBtn || !this.mobileMenu) return;

    // Toggle menú al hacer clic en el botón hamburguesa
    this.menuBtn.addEventListener('click', () => this.toggleMenu());

    // Cierre automático al hacer clic en cualquier enlace
    this.navLinks.forEach((link) => {
      link.addEventListener('click', () => this.closeMenu());
    });

    // Cerrar con la tecla Escape (WCAG Accesibilidad)
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !this.mobileMenu.classList.contains('hidden')) {
        this.closeMenu();
        this.menuBtn.focus();
      }
    });

    // Efecto de sombra y fondo en header al hacer scroll
    window.addEventListener('scroll', () => this.handleScroll());
  }

  toggleMenu() {
    const isExpanded = this.menuBtn.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  }

  openMenu() {
    this.mobileMenu.classList.remove('hidden');
    this.menuBtn.setAttribute('aria-expanded', 'true');
    this.menuBtn.setAttribute('aria-label', 'Cerrar menú de navegación');

    // Cambiar ícono a X
    const iconBurger = this.menuBtn.querySelector('.icon-burger');
    const iconClose = this.menuBtn.querySelector('.icon-close');
    if (iconBurger && iconClose) {
      iconBurger.classList.add('hidden');
      iconClose.classList.remove('hidden');
    }
  }

  closeMenu() {
    this.mobileMenu.classList.add('hidden');
    this.menuBtn.setAttribute('aria-expanded', 'false');
    this.menuBtn.setAttribute('aria-label', 'Abrir menú de navegación');

    // Restaurar ícono hamburguesa
    const iconBurger = this.menuBtn.querySelector('.icon-burger');
    const iconClose = this.menuBtn.querySelector('.icon-close');
    if (iconBurger && iconClose) {
      iconBurger.classList.remove('hidden');
      iconClose.classList.add('hidden');
    }
  }

  handleScroll() {
    if (!this.header) return;
    if (window.scrollY > 20) {
      this.header.classList.add('shadow-md', 'backdrop-blur-md', 'bg-sand-50/90', 'dark:bg-night-950/90');
      this.header.classList.remove('bg-transparent');
    } else {
      this.header.classList.remove('shadow-md', 'backdrop-blur-md', 'bg-sand-50/90', 'dark:bg-night-950/90');
    }
  }
}
