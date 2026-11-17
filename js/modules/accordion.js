/**
 * MÓDULO: AccordionManager
 * Responsabilidad: Manejo accesible de paneles colapsables tipo acordeón
 * para la sección de Preguntas Frecuentes (FAQ) sobre el Desierto de la Tatacoa.
 */

export class AccordionManager {
  constructor() {
    this.accordionButtons = document.querySelectorAll('.accordion-btn');
    this.init();
  }

  init() {
    if (!this.accordionButtons.length) return;

    this.accordionButtons.forEach((btn) => {
      btn.addEventListener('click', () => this.toggleAccordion(btn));
    });
  }

  toggleAccordion(activeBtn) {
    const isExpanded = activeBtn.getAttribute('aria-expanded') === 'true';
    const targetId = activeBtn.getAttribute('aria-controls');
    const targetPanel = document.getElementById(targetId);
    const chevronIcon = activeBtn.querySelector('.accordion-chevron');

    // Cerrar los otros paneles abiertos (comportamiento exclusivo)
    this.accordionButtons.forEach((btn) => {
      if (btn !== activeBtn) {
        btn.setAttribute('aria-expanded', 'false');
        const otherId = btn.getAttribute('aria-controls');
        const otherPanel = document.getElementById(otherId);
        const otherChevron = btn.querySelector('.accordion-chevron');
        
        if (otherPanel) {
          otherPanel.classList.add('hidden');
          otherPanel.setAttribute('aria-hidden', 'true');
        }
        if (otherChevron) {
          otherChevron.classList.remove('rotate-180');
        }
      }
    });

    // Alternar el panel seleccionado
    if (isExpanded) {
      activeBtn.setAttribute('aria-expanded', 'false');
      if (targetPanel) {
        targetPanel.classList.add('hidden');
        targetPanel.setAttribute('aria-hidden', 'true');
      }
      if (chevronIcon) {
        chevronIcon.classList.remove('rotate-180');
      }
    } else {
      activeBtn.setAttribute('aria-expanded', 'true');
      if (targetPanel) {
        targetPanel.classList.remove('hidden');
        targetPanel.setAttribute('aria-hidden', 'false');
      }
      if (chevronIcon) {
        chevronIcon.classList.add('rotate-180');
      }
    }
  }
}
