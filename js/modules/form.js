/**
 * MÓDULO: FormValidator
 * Responsabilidad: Validación robusta del formulario de reservas en tiempo real
 * con mensajes de error accesibles bajo cada campo y retroalimentación mediante Toast.
 */

export class FormValidator {
  constructor(toastManager) {
    this.form = document.getElementById('reservation-form');
    this.toast = toastManager;
    this.emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    this.init();
  }

  init() {
    if (!this.form) return;

    // Validación al enviar
    this.form.addEventListener('submit', (e) => this.handleSubmit(e));

    // Limpieza de error en tiempo real mientras el usuario escribe
    const inputs = this.form.querySelectorAll('input, select, textarea');
    inputs.forEach((input) => {
      input.addEventListener('input', () => this.clearFieldError(input));
      input.addEventListener('change', () => this.clearFieldError(input));
    });

    // Establecer fecha mínima en el selector (hoy)
    const dateInput = document.getElementById('res-date');
    if (dateInput) {
      const today = new Date().toISOString().split('T')[0];
      dateInput.min = today;
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    let isValid = true;

    // 1. Validar Nombre Completo
    const nameInput = document.getElementById('res-name');
    if (!nameInput.value.trim() || nameInput.value.trim().length < 3) {
      this.showFieldError(nameInput, 'Por favor ingresa tu nombre completo (mínimo 3 letras).');
      isValid = false;
    }

    // 2. Validar Correo Electrónico
    const emailInput = document.getElementById('res-email');
    if (!emailInput.value.trim()) {
      this.showFieldError(emailInput, 'El correo electrónico es obligatorio.');
      isValid = false;
    } else if (!this.emailRegex.test(emailInput.value.trim())) {
      this.showFieldError(emailInput, 'Ingresa un correo electrónico válido (ejemplo: usuario@correo.com).');
      isValid = false;
    }

    // 3. Validar Tour Seleccionado
    const tourInput = document.getElementById('res-tour');
    if (!tourInput.value) {
      this.showFieldError(tourInput, 'Selecciona el tour o experiencia que deseas reservar.');
      isValid = false;
    }

    // 4. Validar Fecha
    const dateInput = document.getElementById('res-date');
    if (!dateInput.value) {
      this.showFieldError(dateInput, 'Selecciona la fecha deseada para tu expedición.');
      isValid = false;
    }

    // 5. Validar Número de Personas (1 a 10)
    const peopleInput = document.getElementById('res-people');
    const peopleVal = parseInt(peopleInput.value, 10);
    if (isNaN(peopleVal) || peopleVal < 1 || peopleVal > 10) {
      this.showFieldError(peopleInput, 'El grupo debe ser de 1 a 10 personas.');
      isValid = false;
    }

    // Si todo es válido, procesar éxito
    if (isValid) {
      // Mostrar toast verde de éxito que dura 4 segundos
      if (this.toast) {
        this.toast.show(
          `¡Reserva para "${nameInput.value.trim()}" recibida con éxito! Te contactaremos vía correo en breve.`,
          'success',
          4000
        );
      }

      // Limpiar formulario
      this.form.reset();
    } else {
      // Enfocar el primer campo con error
      const firstErrorField = this.form.querySelector('[aria-invalid="true"]');
      if (firstErrorField) {
        firstErrorField.focus();
      }
    }
  }

  showFieldError(input, message) {
    input.setAttribute('aria-invalid', 'true');
    input.classList.add('border-red-500', 'focus:ring-red-500', 'focus:border-red-500');
    input.classList.remove('border-sand-300', 'dark:border-night-700', 'focus:ring-amber-500');

    const errorSpan = document.getElementById(`${input.id}-error`);
    if (errorSpan) {
      errorSpan.textContent = message;
      errorSpan.classList.remove('hidden');
    }
  }

  clearFieldError(input) {
    input.removeAttribute('aria-invalid');
    input.classList.remove('border-red-500', 'focus:ring-red-500', 'focus:border-red-500');
    input.classList.add('border-sand-300', 'dark:border-night-700', 'focus:ring-amber-500');

    const errorSpan = document.getElementById(`${input.id}-error`);
    if (errorSpan) {
      errorSpan.textContent = '';
      errorSpan.classList.add('hidden');
    }
  }
}
