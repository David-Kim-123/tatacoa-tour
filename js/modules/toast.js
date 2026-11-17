/**
 * MÓDULO: ToastManager
 * Responsabilidad: Notificaciones flotantes tipo Toast para retroalimentación
 * de usuario no intrusiva con auto-cierre programado (4 segundos) y accesibilidad WCAG.
 */

export class ToastManager {
  constructor() {
    this.toastElement = document.getElementById('notification-toast');
    this.toastMessage = document.getElementById('toast-message');
    this.toastCloseBtn = document.getElementById('toast-close-btn');
    this.timeoutId = null;
    this.init();
  }

  init() {
    if (this.toastCloseBtn) {
      this.toastCloseBtn.addEventListener('click', () => this.hide());
    }
  }

  show(message, type = 'success', duration = 4000) {
    if (!this.toastElement || !this.toastMessage) return;

    // Limpiar temporizador previo si existía
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }

    this.toastMessage.textContent = message;

    // Mostrar y animar
    this.toastElement.classList.remove('hidden', 'translate-y-10', 'opacity-0');
    this.toastElement.classList.add('translate-y-0', 'opacity-100');

    // Auto-cierre a los 4 segundos (4000 ms) según requerimiento de la guía
    this.timeoutId = setTimeout(() => {
      this.hide();
    }, duration);
  }

  hide() {
    if (!this.toastElement) return;

    this.toastElement.classList.remove('translate-y-0', 'opacity-100');
    this.toastElement.classList.add('translate-y-10', 'opacity-0');

    setTimeout(() => {
      this.toastElement.classList.add('hidden');
    }, 300);
  }
}
