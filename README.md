# 🌌 Tatacoa Starlight Expeditions
> **Sitio Web Turístico y Astronómico del Desierto de la Tatacoa (Villavieja, Huila)**  
> *Práctica de Investigación y Desarrollo con Tailwind CSS 4, Inteligencia Artificial y Arquitectura Modular.*  
> **Fundación Escuela Tecnológica de Neiva (FET) — Ingeniería de Software**

---

## 📌 Enlaces del Proyecto
* 🌐 **Sitio Web Publicado (Deploy):** [https://tu-usuario.github.io/tatacoa-tour/](https://tu-usuario.github.io/tatacoa-tour/) *(o enlace en Netlify)*
* 📂 **Repositorio en GitHub:** [https://github.com/tu-usuario/tatacoa-tour](https://github.com/tu-usuario/tatacoa-tour)
* 🎥 **Video de Sustentación en YouTube (8 min):** [https://youtu.be/TU_ENLACE_AQUI](https://youtu.be/TU_ENLACE_AQUI)

---

## 🏗️ Arquitectura del Software (Programación Modular)

El proyecto abandona el patrón monolítico de un único archivo y adopta una **arquitectura frontend modular orientada a eventos**, con separación limpia de responsabilidades y sin dependencias externas pesadas:

```
tatacoa-tour/
├── index.html               # Marcado semántico HTML5 estructurado y accesible (WAI-ARIA)
├── css/
│   └── styles.css          # Estilos complementarios, suavizado de scroll y accesibilidad
├── js/
│   ├── main.js             # Punto de entrada / Orquestador de módulos cliente
│   └── modules/
│       ├── theme.js        # ThemeManager: Modo oscuro y persistencia en localStorage
│       ├── navigation.js   # NavigationManager: Menú móvil hamburguesa accesible
│       ├── accordion.js    # AccordionManager: Preguntas frecuentes con ARIA
│       ├── modal.js        # ModalManager: Modal dinámico de itinerarios (Componente extra)
│       ├── form.js         # FormValidator: Validación reactiva con mensajes en tiempo real
│       └── toast.js        # ToastManager: Notificación flotante accesible (auto-cierre 4s)
└── README.md               # Documentación integral, prompt maestro, bitácora y cambios
```

---

## 🎨 Sistema de Diseño y Tokens (`@theme`)

El diseño visual está regulado por la directiva `@theme` de **Tailwind CSS 4**:

* **Regla 60-30-10:**
  * **60% Dominante:** Fondos de descanso visual inspirados en el desierto claro (`#FAF7F2`) y el cielo nocturno profundo en modo oscuro (`#060913`).
  * **30% Secundario:** Ocre y terracota de las formaciones de arcilla de El Cuzco (`#C85A32`, `#B04924`).
  * **10% Acento:** Ámbar cósmico estelar (`#E5A93C`) para botones de llamada a la acción (CTAs), badges y contrastes clave.
* **Colores Semánticos:**
  * Éxito: Verde esmeralda (`#16A34A`) en el Toast de confirmación.
  * Error: Rojo vibrante (`#DC2626`) en bordes y textos de validación.
  * Advertencia: Ámbar intenso (`#D97706`).
* **Tipografías:**
  * Títulos: *Space Grotesk* (Google Fonts) — moderna, geométrica y con carácter astronómico.
  * Lectura: *Inter* (Google Fonts) — legibilidad superior y cumplimiento de contraste WCAG 2.1 AA (4.5:1+).

---

## 🤖 Fase 2: Prompt Maestro Original

A continuación se presenta el **Prompt Maestro** diseñado para el inicio del proyecto, estructurado bajo las 5 partes formales de la ingeniería de prompts:

### 1. Rol
> *"Actúa como un arquitecto de software frontend senior y especialista en diseño de sistemas de diseño con Tailwind CSS 4, JavaScript modular (ES6) y estándares internacionales de accesibilidad web (WCAG 2.1 AA)."*

### 2. Contexto
> *"Estoy desarrollando la plataforma web oficial de 'Tatacoa Starlight Expeditions', una agencia de ecoturismo y astroturismo ubicada en Villavieja (Huila, Colombia). El público objetivo son viajeros nacionales, mochileros y turistas internacionales de 20 a 50 años interesados en senderismo paleontológico y observación astronómica nocturna. El objetivo es presentar la propuesta de valor del destino Huila, exponer los tours con tarifas en pesos colombianos y capturar reservas con validación interactiva."*

### 3. Tareas
> *"Construye la solución completa con arquitectura modular que contenga:*
> 1. *Encabezado fijo con logo astronómico, navegación fluida, conmutador de modo claro/oscuro y menú hamburguesa responsive.*
> 2. *Hero Section impactante con fotografía nocturna, overlay oscuro, métricas de confianza y dos botones de acción.*
> 3. *Sección 'Nosotros' a 2 columnas detallando la riqueza geológica y el compromiso comunitario en Villavieja.*
> 4. *Tarjetas de tours en cuadrícula (grid de 1 columna en móvil, 2 en tablet, 3 en desktop) con precios en COP, etiquetas de dificultad y acción para ver detalles.*
> 5. *Acordeón interactivo para resolver Preguntas Frecuentes sobre clima, transporte y ropa recomendada.*
> 6. *Formulario de reserva con etiquetas accesibles, inputs para nombre, correo, fecha, tour y cantidad de viajeros.*
> 7. *Controlador de validación en JavaScript que verifique campos vacíos y correo válido, mostrando advertencias en rojo bajo cada input.*
> 8. *Notificación flotante (Toast) verde accesible que confirme el envío y desaparezca tras 4 segundos.*
> 9. *Pie de página con datos de ubicación física en Villavieja, horarios de observatorio y derechos reservados."*

### 4. Restricciones
> *"Usa únicamente HTML5 semántico, Tailwind CSS 4 mediante su Play CDN oficial (`@tailwindcss/browser@4`) y Vanilla JavaScript estructurado en módulos ES6 independientes (`import`/`export`), sin frameworks de terceros. Define la paleta 60-30-10 y tipografías mediante la directiva `@theme`. Garantiza que todos los inputs tengan labels asociados, textos alternativos descriptivos en imágenes y contraste de color superior a 4.5:1."*

### 5. Formato de Salida
> *"Entrega el marcado estructurado en `index.html` y los módulos de JavaScript organizados en la carpeta `js/modules/` (`theme.js`, `navigation.js`, `accordion.js`, `form.js`, `toast.js` y `main.js`), debidamente comentados en español."*

---

## 📋 Fase 3: Bitácora de Prompts de Ajuste e Iteraciones

Durante el proceso asistido con IA, se identificaron fallas técnicas y de accesibilidad que fueron corregidas mediante 5 prompts de ajuste iterativo:

| # | Prompt de Ajuste Enviado | Problema que Buscaba Resolver | Resultado Obtenido | ¿Funcionó? |
|---|---|---|---|:---:|
| **1** | *"El menú hamburguesa en celulares no se oculta cuando el usuario hace clic en un enlace de navegación interna, tapando la pantalla. Corrige la lógica del módulo de navegación para que escuche el clic en los enlaces móviles y cierre el menú automáticamente."* | El menú móvil permanecía abierto bloqueando la vista de la sección tras hacer tap en una opción. | Se añadió un `forEach` en `NavigationManager` sobre `.nav-link-mobile` que invoca `closeMenu()`. | ✅ Sí |
| **2** | *"Al recargar la página, el modo oscuro se reinicia al valor predeterminado del sistema operativo y no recuerda la elección previa del usuario. Implementa persistencia con `localStorage`."* | Falta de persistencia del estado visual entre recargas del navegador. | Se integró `localStorage.getItem` y `setItem` con la clave `'tatacoa-theme-preference'` en `theme.js`. | ✅ Sí |
| **3** | *"Los mensajes de error del formulario de reserva no deben ser alertas invasivas de `alert()`. Crea elementos `<span>` accesibles en rojo debajo de cada campo que se muestren dinámicamente y se limpien cuando el usuario empiece a escribir."* | Mala experiencia de usuario (UX) por uso de popups nativos bloqueantes. | Se diseñó la inyección de clases `border-red-500` e inserción en spans `#id-error`, limpiando el estado con eventos `input`. | ✅ Sí |
| **4** | *"En Tailwind 4 las directivas `@tailwind base;` ya no se usan. Configura los tokens de color directamente con la nueva directiva `@theme` en un bloque `<style type="text/tailwindcss">`."* | La IA generó código con sintaxis obsoleta de Tailwind 3 (`tailwind.config.js` y `@tailwind utilities`). | Se migraron las variables a la directiva oficial `@theme` de la versión 4. | ✅ Sí |
| **5** | *"El toast verde de confirmación aparece instantáneamente pero nunca desaparece automáticamente. Agrega un temporizador de 4000 ms y añade atributos `role='status'` y `aria-live='polite'` para lectores de pantalla."* | Incumplimiento del requisito de desaparición a los 4 segundos y falta de accesibilidad. | Se implementó `setTimeout` a 4000 ms con animación de salida y marcado semántico accesible. | ✅ Sí |

---

## ✋ Fase 5: Personalización Manual (Cambios a Mano sin IA)

Para demostrar comprensión y dominio completo del código, se realizaron 3 modificaciones manuales directas:

1. **Implementación del Módulo Extra `ModalManager` (`modal.js`):**
   * *Qué se cambió:* Se codificó a mano una ventana modal accesible para previsualizar el itinerario detallado de cada tour al hacer clic en "Ver detalles".
   * *Por qué:* Eleva la calidad de la experiencia de usuario y añade un segundo componente interactivo más allá del acordeón, capturando los datos directamente mediante atributos `data-tour-*` en el DOM.
2. **Control Reactivo de Fecha Mínima en Reservas (`form.js`):**
   * *Qué se cambió:* Se agregó una rutina en JavaScript que consulta `new Date().toISOString().split('T')[0]` y la asigna como atributo `min` al input `#res-date`.
   * *Por qué:* Previene que los usuarios cometan errores al seleccionar fechas en el pasado, aplicando la heurística de Nielsen de **prevención de errores**.
3. **Optimización de Foco Visible y Suavizado de Scroll (`styles.css`):**
   * *Qué se cambió:* Se aplicó la regla universal `*:focus-visible` con `outline: 2px solid #e5a93c` y `outline-offset: 3px`.
   * *Por qué:* Asegura cumplimiento estricto con las normas WCAG 2.1 AA de navegación mediante teclado sin depender de los estilos predeterminados del navegador.

---

## 💻 Instrucciones para Ejecución Local

Para visualizar el proyecto en tu máquina local:

1. **Opción recomendada (Visual Studio Code):**
   * Abre la carpeta `tatacoa-tour` en VS Code.
   * Haz clic derecho sobre `index.html` y selecciona **"Open with Live Server"**.
2. **Opción alternativa con Python:**
   * Abre una terminal en la carpeta `tatacoa-tour`.
   * Ejecuta: `python -m http.server 8000`
   * Abre tu navegador en `http://localhost:8000`.
3. **Opción con XAMPP:**
   * Copia la carpeta `tatacoa-tour` a `C:\xampp\htdocs\`.
   * Con Apache encendido, abre `http://localhost/tatacoa-tour/`.
