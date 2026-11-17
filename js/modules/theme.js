/**
 * MÓDULO: ThemeManager
 * Responsabilidad: Gestión del modo oscuro con persistencia en localStorage 
 * y detección automática de preferencia de sistema del usuario.
 */

export class ThemeManager {
  constructor() {
    this.storageKey = 'tatacoa-theme-preference';
    this.themeToggleBtn = document.getElementById('theme-toggle');
    this.htmlElement = document.documentElement;
    this.init();
  }

  init() {
    // 1. Determinar el tema inicial (guardado o del sistema operativo)
    const savedTheme = localStorage.getItem(this.storageKey);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

    this.applyTheme(initialTheme);

    // 2. Event listener para el botón conmutador
    if (this.themeToggleBtn) {
      this.themeToggleBtn.addEventListener('click', () => this.toggleTheme());
    }

    // 3. Escuchar cambios de preferencia en el sistema si el usuario no ha forzado uno
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem(this.storageKey)) {
        this.applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  }

  applyTheme(theme) {
    if (theme === 'dark') {
      this.htmlElement.classList.add('dark');
      this.updateButtonUI(true);
    } else {
      this.htmlElement.classList.remove('dark');
      this.updateButtonUI(false);
    }
  }

  toggleTheme() {
    const isDark = this.htmlElement.classList.contains('dark');
    const newTheme = isDark ? 'light' : 'dark';
    
    this.applyTheme(newTheme);
    localStorage.setItem(this.storageKey, newTheme);

    // Despachar evento para componentes reactivos al tema
    window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme: newTheme } }));
  }

  updateButtonUI(isDark) {
    if (!this.themeToggleBtn) return;
    const sunIcon = this.themeToggleBtn.querySelector('.icon-sun');
    const moonIcon = this.themeToggleBtn.querySelector('.icon-moon');

    if (sunIcon && moonIcon) {
      if (isDark) {
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
        this.themeToggleBtn.setAttribute('aria-label', 'Cambiar a modo claro');
      } else {
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
        this.themeToggleBtn.setAttribute('aria-label', 'Cambiar a modo oscuro');
      }
    }
  }
}
