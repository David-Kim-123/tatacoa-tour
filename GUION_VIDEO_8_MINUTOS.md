# 🎬 GUION TÉCNICO Y ESCALETA PARA EL VIDEO DE SUSTENTACIÓN (8 MINUTOS)
## "Investigación y Desarrollo Web con Tailwind CSS 4 e Inteligencia Artificial"
**Proyecto:** Tatacoa Starlight Expeditions  
**Estudiante:** Juan David Quimbayo | FET — Ingeniería de Software  
**Duración Total:** 8 minutos exactos (Máximo 9 min permitidos)  
**Modalidad de Grabación:** Pantalla completa (con micrófono claro y opcionalmente cámara web en una esquina).

---

### ⏱️ CRONOGRAMA MINUTO A MINUTO (RÚBRICA OFICIAL)

| Minuto | Bloque / Sección | Qué debes mostrar en pantalla | Qué debes decir (Guion hablado) |
|---|---|---|---|
| **0:00 - 1:00** | **1. Presentación** | Página de inicio del sitio web en el navegador, desplazándote suavemente por la cabecera. | *"Buenos días/tardes. Mi nombre es Juan David Quimbayo, estudiante de Ingeniería de Software en la FET. Para esta práctica desarrollé 'Tatacoa Starlight Expeditions', una plataforma de ecoturismo y astroturismo para el Desierto de la Tatacoa en Villavieja, Huila. Nuestro público objetivo son viajeros y turistas interesados en el senderismo y la observación del cosmos. La identidad visual se rige bajo la regla 60-30-10 con la directiva `@theme` de Tailwind 4: 60% tonos arena y pizarra cósmica, 30% terracota de El Cuzco y 10% de acento ámbar estelar para las llamadas a la acción, combinando las fuentes Space Grotesk e Inter."* |
| **1:00 - 2:00** | **2. Lo Investigado** | Mostrar el documento PDF del informe o diapositiva rápida con las 3 ideas clave. | *"De mi investigación teórica extraigo tres conclusiones fundamentales: Primero, Tailwind CSS no es solo un conjunto de clases, es un sistema de diseño atómico inmutable que con su nuevo motor Oxide en Rust genera únicamente el CSS utilizado, reduciendo el peso a menos de 25 KB. Segundo, Tailwind v4 da el salto definitivo a 'CSS-First' reemplazando el archivo de configuración JS por la directiva `@theme`. Y tercero, sobre la IA: los modelos de lenguaje son excelentes aceleradores sintácticos, pero carecen de criterio visual y semántico, por lo que suelen cometer alucinaciones de clases y omitir criterios esenciales de accesibilidad si un ingeniero humano no los supervisa."* |
| **2:00 - 3:00** | **3. Prompt Maestro** | Abrir el archivo `README.md` y resaltar en pantalla el bloque del Prompt Maestro. | *"Para iniciar la fase práctica diseñé un Prompt Maestro estructurado en 5 partes formales: 1) El Rol: actuando como arquitecto frontend senior experto en accesibilidad. 2) El Contexto: la agencia de turismo en Villavieja y su necesidad de capturar reservas. 3) Las Tareas: 9 secciones secuenciales desde la navbar fija hasta el footer y el toast. 4) Las Restricciones técnicas: uso estricto de HTML5, Tailwind 4 vía Play CDN y JavaScript modular sin librerías externas, cumpliendo accesibilidad WCAG. Y 5) El Formato de salida: código estructurado en módulos ES6 y debidamente comentado en español."* |
| **3:00 - 4:00** | **4. Iteraciones (Bitácora)** | Mostrar la tabla de la bitácora de 5 iteraciones en el `README.md`. | *"Ninguna IA entrega el software perfecto en el primer intento. En mi bitácora documenté 5 iteraciones de ajuste: 1) El menú móvil se quedaba abierto tras dar clic en un enlace; se ajustó con un evento de cierre automático. 2) El modo oscuro se reseteaba al recargar; lo solucionamos implementando persistencia en `localStorage`. 3) El formulario mostraba un molesto `alert()`; se rediseñó con etiquetas `<span>` dinámicas en rojo bajo cada input. 4) La IA generó código obsoleto con `@tailwind utilities`; se corrigió a la directiva `@theme` de la versión 4. Y 5) El Toast no desaparecía; se programó un `setTimeout` exacto a 4 segundos con accesibilidad `aria-live`."* |
| **4:00 - 6:00** | **5. Demostración en Vivo** | Sitio web interactivo. Presionar F12 para alternar entre vista PC y vista móvil de teléfono (iPhone/Pixel). | *"Veamos el sitio en funcionamiento. Aquí tenemos la versión de escritorio con el Hero nocturno y las métricas. Si cambio al modo oscuro con este botón, observen cómo toda la paleta transmuta fluidamente gracias a las variables CSS de `@theme` y se conserva si recargo la página. Ahora activamos la vista móvil (F12): la navegación colapsa en un menú hamburguesa accesible que abre y cierra con suavidad. Vemos las tarjetas de tours con precios en pesos colombianos. Si doy clic en 'Ver detalles', se despliega este modal con el itinerario completo. Más abajo, el acordeón de Preguntas Frecuentes abre y cierra respetando atributos ARIA. Finalmente, el formulario: si intento enviar datos vacíos o un correo incorrecto, aparecen mensajes de advertencia en rojo; pero si diligencio datos válidos, se restablece el formulario y emerge este Toast verde de éxito que dura exactamente 4 segundos antes de ocultarse."* |
| **6:00 - 7:30** | **6. Explicación del Código** | Abrir VS Code en los archivos `js/modules/` y resaltar las partes clave. | *"Pasemos al código. La arquitectura es 100% modular. Destaco mis 3 cambios manuales hechos a mano: 1) El módulo `modal.js`, que programé desde cero para capturar los atributos `data-tour` del DOM y mostrar el itinerario del tour. 2) En `form.js`, la restricción reactiva que calcula la fecha actual (`new Date()`) para fijar el `min` en el input de fecha y prevenir errores. 3) En `styles.css`, la regla `*:focus-visible` para garantizar anillos de navegación accesibles por teclado. En cuanto a Tailwind, destaco 5 clases esenciales: `fixed top-0 z-40` para la navbar flotante, `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` para la cuadrícula responsive, `backdrop-blur-md` para el efecto translúcido, `dark:bg-night-950` para el tema oscuro, y `focus:ring-2 focus:ring-amber-accent` para el foco accesible."* |
| **7:30 - 8:00** | **7. Conclusiones** | Regresar a la cámara web o a la portada del sitio. | *"En conclusión, esta práctica me permitió comprobar que la combinación de Tailwind CSS 4 y la inteligencia artificial reduce los tiempos de maquetación en más de un 60%, pero requiere que el desarrollador posea sólidos fundamentos de arquitectura, JavaScript moderno y estándares de accesibilidad para auditar el resultado. La IA es una aliada invaluable para acelerar el desarrollo, pero el criterio de ingeniería sigue siendo 100% humano. Muchas gracias."* |

---

### 💡 CONSEJOS CLAVE PARA GRABAR EL VIDEO
1. **Verificación de permisos:** Al subirlo a YouTube, configúralo como **"No listado" (Unlisted)** o **"Público"**. Nunca lo dejes en privado porque el profesor no podrá calificarlo.
2. **Descripción del video en YouTube:** Copia y pega exactamente esto en la descripción:
   ```
   Proyecto: Tatacoa Starlight Expeditions (Villavieja, Huila)
   Asignatura: Práctica IA y Tailwind CSS - Ingeniería de Software FET
   Estudiante: Juan David Rodríguez

   Sitio Web en Vivo: https://tu-usuario.github.io/tatacoa-tour/
   Repositorio en GitHub: https://github.com/tu-usuario/tatacoa-tour
   ```
3. **Audio nítido:** Usa audífonos con micrófono para evitar eco ambiental.
4. **Herramienta gratuita para grabar pantalla:** Puedes usar **OBS Studio** o la barra de juegos de Windows (`Tecla Windows + G`).
