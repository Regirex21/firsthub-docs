# Pendientes de verificación y decisiones

Este archivo acumula todo lo que quedó sin verificar contra fuente oficial, o
decisiones que normalmente se consultarían, durante trabajo autónomo. Formato:
página afectada + qué falta + qué se encontró.

---

## 1. Safety Animation Award (FRC) — RESUELTO: ubicado en Por Postulación

**Página afectada:** `frc/premios/por-postulacion/safety-animation.mdx` (creada).

**Cómo se resolvió:** se hizo fetch directo a `firstinspires.org/resources/library/safety` (la página que anoche no había podido confirmar) y esta vez sí devolvió contenido completo: confirma que es un Submitted Award real, patrocinado por UL Solutions, abierto a FRC y FTC, con requisitos concretos (video animado, máximo 40 segundos). Se agregó como quinto premio de `por-postulacion/`, mismo patrón que Digital Animation Award. Sidebar actualizado.

**Nota sobre por qué antes no aparecía:** las dos páginas de "lista completa" que verifiqué anoche (`/frc/awards` y `/frc/submitted-awards`) siguen sin mostrarlo — parece que FIRST lo administra en su propia página de Safety en vez de junto al resto de Submitted Awards, no que esté desactualizado o no exista. Confirmado, no es un caso de fuente contradictoria.

---

## 1b. Digital Animation Award (FRC) — decisión revertida: SE QUEDA, no se elimina

En la ronda de auditoría anterior lo marqué como candidato a eliminar (razón: se juzga de forma remota por WPI, sin ceremonia en un evento específico). El usuario revirtió esa recomendación explícitamente: al ser un Submitted Award oficial real (confirmado con fuente), se queda en `por-postulacion/` junto con Safety Animation Award. No se tocó el archivo, solo se descarta la sugerencia de eliminarlo.

---

## 2. Enganche cruzado Portfolio ↔ Premios FTC — RESUELTO

Al construir `ftc/premios/` esta misma noche, se completó el enganche pendiente:
- Hub de premios FTC (`ftc/premios/index.mdx`) tiene el aviso destacado con link al Portfolio.
- `Inspire Award` y `Think Award` tienen link de vuelta hacia `/ftc/portafolio-de-ingenieria/`.

Sin acción pendiente.

---

## 3. The Allaire Medal — RESUELTO: eliminado a pedido explícito

**Estado:** eliminado. Se borró `frc/premios/por-postulacion/allaire-medal.mdx`, su entrada en el index de `por-postulacion/`, y su línea en el sidebar de `astro.config.mjs`.

**Re-verificación hecha antes de borrar (fetch real, no de memoria):** se re-confirmó que el premio SÍ aparece literalmente en `firstinspires.org/resources/library/frc/submitted-awards`, con cita textual completa y detalle adicional (nombrado en honor a Paul A. Allaire, lo selecciona el equipo ganador del FIRST Impact Award, incluye beca de hasta $10,000 USD). No fue un error de verificación de la corrida nocturna — es un premio real, pero de alcance muy reducido (solo relevante a nivel del equipo ganador del Impact Award en Championship), lo cual explica por qué no es un premio visible en la experiencia típica de un equipo.

Se eliminó de todas formas, por decisión explícita, independiente del resultado de la verificación.

---

## 6. Volunteer of the Year Award (FRC) — movido fuera de Premios

**Archivo:** movido de `src/content/docs/frc/premios/premios-independientes/volunteer-of-the-year.mdx` a `_pendiente-secciones-futuras/voluntarios/frc-volunteer-of-the-year.mdx` (fuera de la colección de contenido, no se renderiza).

**Motivo (decidido por el usuario):** no es un premio de robot/equipo en competencia, es reconocimiento a una persona — no encaja conceptualmente en la sección de Premios.

**Destino futuro:** una sección de Voluntarios que todavía no existe en el sitio. Cuando se construya esa sección, mover el archivo de vuelta a `src/content/docs/` en la ubicación correspondiente y agregarlo al sidebar.

**Nota relacionada, no accionada:** FTC tiene un premio análogo — `ftc/premios/premios-opcionales/volunteer-award.mdx` ("Volunteer Award") — con el mismo problema de fondo (reconoce a una persona, no a un equipo). No se movió porque el usuario solo pidió específicamente el de FRC. Esa página FTC todavía hace referencia en su propio texto a "el Volunteer of the Year Award de FRC" como comparación — no es un link roto (no tiene href), pero la comparación queda un poco huérfana ahora que ese premio salió de Premios en FRC. Decisión pendiente: ¿mover también el de FTC cuando se apruebe la lista de la Tarea 3?

---

## 4. Founder's Award — encontrado, NO se creó página (a diferencia del Allaire Medal)

**Página afectada:** ninguna — no se creó `frc/premios/premios-independientes/founders-award.mdx`.

**Qué se encontró:** la página principal de premios confirma que "Founder's Award" existe y es standalone (fuera de las 4 categorías, junto a Volunteer of the Year). Pero, a diferencia del Allaire Medal, **no encontré texto de propósito verbatim confiable** en ninguna fuente que pude leer directamente — solo confirmación de que el nombre existe. Podría ser un premio especial de entrega muy poco frecuente (no en cada evento).

**Por qué NO lo agregué:** aquí sí aplica la Regla de Oro — no tengo con qué escribir su propósito sin inventar. Queda fuera de `premios-independientes/` hasta poder confirmar su descripción oficial.

---

## 5b. Woodie Flowers Award (FTC) — fuente más débil que el resto de la sección

**Página afectada:** `ftc/premios/reconocimiento-individual/woodie-flowers-award.mdx`

No encontré una página oficial de FTC dedicada a este premio (a diferencia de Inspire, Think, Connect, etc., que sí tienen texto de propósito verbatim de `firstinspires.org/robotics/ftc/awards`). Se escribió con confianza razonable (confirmado que se entrega en eventos reales, descripción general del concepto compartido entre programas), pero es la página con la fuente menos directa de toda la sección de premios FTC. Ya quedó marcado explícitamente dentro de la propia página — solo lo anoto aquí también para que sea fácil de encontrar en la revisión.

---

## 5c. Compass Award y Volunteer Award (FTC) — fuente parcial

**Páginas afectadas:** `ftc/premios/premios-opcionales/compass-award.mdx` y `ftc/premios/premios-opcionales/volunteer-award.mdx`

Ambos existen y se entregan en eventos reales, pero no encontré descripciones oficiales completas de su propósito específicas para FTC:
- **Compass Award**: solo confirmé que es para coaches/mentores y que afecta puntos de avance si lo recibe un coach — no un propósito completo.
- **Volunteer Award**: solo confirmé que existe: usé la descripción general de FIRST para "voluntario destacado" sin verificar 1 a 1 contra una fuente FTC específica.

Ambas páginas incluyen su propio Aside de advertencia. Se recomienda revisar el Competition Manual directamente para completar estas dos antes de considerarlas 100% fiables.

---

## 5. Woodie Flowers: relación Finalist vs. Award (Championship) — RESUELTO, no requiere decisión

Nota informativa, no pendiente de decisión: confirmé que "Woodie Flowers Finalist Award" (por evento) y "Woodie Flowers Award" / "Championship WFA" (uno solo, elegido entre los finalistas de la temporada, entregado en el FIRST Championship) son dos niveles del mismo premio, no dos premios distintos con nombres inconsistentes como pensaba en la auditoría anterior. Documenté ambos dentro de `woodie-flowers-finalist.mdx`, sin crear un archivo aparte para la versión Championship.

---
