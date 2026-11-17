/**
 * MÓDULO: ModalManager
 * Responsabilidad: Ventana modal emergente accesible (Componente extra)
 * para ver el itinerario completo y detalles específicos de cada tour.
 */

export class ModalManager {
  constructor() {
    this.modal = document.getElementById('tour-detail-modal');
    this.modalTitle = document.getElementById('modal-tour-title');
    this.modalDesc = document.getElementById('modal-tour-desc');
    this.modalIncludes = document.getElementById('modal-tour-includes');
    this.modalPrice = document.getElementById('modal-tour-price');
    this.closeBtn = document.getElementById('close-modal-btn');
    this.modalBackdrop = document.getElementById('modal-backdrop');
    this.detailButtons = document.querySelectorAll('.btn-tour-detail');
    this.init();
  }

  init() {
    if (!this.modal) return;

    // Escuchar clics en los botones de "Ver detalles" de las tarjetas
    this.detailButtons.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const card = e.target.closest('[data-tour-title]');
        if (card) {
          const title = card.getAttribute('data-tour-title');
          const desc = card.getAttribute('data-tour-desc');
          const includes = card.getAttribute('data-tour-includes');
          const price = card.getAttribute('data-tour-price');
          this.open(title, desc, includes, price);
        }
      });
    });

    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.close());
    }

    if (this.modalBackdrop) {
      this.modalBackdrop.addEventListener('click', () => this.close());
    }

    // Cerrar con Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !this.modal.classList.contains('hidden')) {
        this.close();
      }
    });
  }

  open(title, desc, includes, price) {
    if (this.modalTitle) this.modalTitle.textContent = title;
    if (this.modalDesc) this.modalDesc.textContent = desc;
    if (this.modalPrice) this.modalPrice.textContent = price;

    if (this.modalIncludes && includes) {
      const items = includes.split('|');
      this.modalIncludes.innerHTML = items
        .map((item) => `<li class="flex items-center gap-2"><svg class="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg><span>${item.trim()}</span></li>`)
        .join('');
    }

    this.modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  }

  close() {
    this.modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }
}
