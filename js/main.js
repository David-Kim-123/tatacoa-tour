/**
 * ARCHIVO PRINCIPAL: main.js
 * Punto de entrada del cliente. Orquesta la inicialización modular de todos los componentes
 * una vez que el DOM está completamente cargado.
 */

import { ThemeManager } from './modules/theme.js';
import { NavigationManager } from './modules/navigation.js';
import { AccordionManager } from './modules/accordion.js';
import { ToastManager } from './modules/toast.js';
import { ModalManager } from './modules/modal.js';
import { FormValidator } from './modules/form.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 Inicializando Tatacoa Starlight Expeditions (Arquitectura Modular)...');

  // 1. Inicializar controlador de tema (Modo Oscuro / LocalStorage)
  const theme = new ThemeManager();

  // 2. Inicializar controlador de navegación móvil y header
  const navigation = new NavigationManager();

  // 3. Inicializar acordeón de Preguntas Frecuentes
  const accordion = new AccordionManager();

  // 4. Inicializar sistema de notificaciones Toast
  const toast = new ToastManager();

  // 5. Inicializar modal de detalles de tour
  const modal = new ModalManager();

  // 6. Inicializar validador de formulario de reserva
  const formValidator = new FormValidator(toast);

  console.log('✅ Todos los módulos se han inicializado correctamente.');
});
