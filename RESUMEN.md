# Resumen de trabajo autónomo — noche del 2026-08-08/09

Todo el orden de trabajo asignado se completó. Build final limpio: **105 páginas, sin errores**, validado después de cada sub-hub (7 builds intermedios, todos verdes).

---

## Qué se hizo, en orden

### 0. Portafolio de Ingeniería FTC (interjección `/btw` a mitad de la noche)

Estructura aprobada en vivo: hub + 2 subpáginas.

- `ftc/portafolio-de-ingenieria/index.mdx`
- `ftc/portafolio-de-ingenieria/requisitos-oficiales.mdx` — verificado el límite de 15 páginas + portada y el requisito de PDF para eventos remotos contra búsqueda real de la temporada 2025-2026 (DECODE).
- `ftc/portafolio-de-ingenieria/consejos-y-organizacion.mdx` — marcada como contenido propio desde el inicio de la página.

Sidebar actualizado. Enganche con premios FTC completado más tarde en la noche (ver abajo).

### 1. Verificación del Safety Animation Award (FRC)

Solo investigación, sin ubicarlo en ningún lado — documentado en `PENDIENTES.md`. Es un premio real y activo, pero no aparece en las páginas oficiales de "lista completa" que sí verifiqué por fetch directo. Queda sin resolver.

### 2. Premios FRC — estructura completa de 3 niveles (27 páginas)

`frc/premios/` con 4 sub-hubs:

- **Máquina, Creatividad e Innovación** (6 premios) — corregido: Digital Animation Award NO va aquí (se movió a Por Postulación, confirmado con fetch directo).
- **Atributos de Equipo** (8 premios) — sin cambios respecto a lo acordado.
- **Por Postulación** (5 premios) — incluye Digital Animation Award (reubicado) y **The Allaire Medal**, un premio encontrado durante la verificación que no estaba en la lista original aprobada. Se agregó con fuente sólida, pero **necesita tu confirmación explícita** (ver Pendientes #3).
- **Premios Independientes** (renombrado desde "Desempeño en Campo", 3 premios: Winner, Finalist, Volunteer of the Year). Founder's Award **no se incluyó** — se encontró que existe pero sin descripción oficial confiable de su propósito.

Cada premio: propósito en palabras propias, Aside de fuente, Aside de "cambia por temporada", placeholder de trofeo, link a la fuente oficial.

Sidebar actualizado con el árbol completo.

### 3. Astro.config.mjs — sidebar FRC premios

Hecho como parte del punto 2.

### 4. Premios FTC — misma estructura (22 páginas)

`ftc/premios/` con 6 sub-hubs, **explícitamente marcados como agrupamiento propio, no oficial de FIRST** (a diferencia de FRC, no encontré categorías oficiales para FTC):

- **Premio Máximo** — Inspire Award.
- **Ingeniería y Diseño** — Innovate, Design, Control, Think.
- **Conexión y Alcance** — Connect, Reach, Sustain. *Corrección importante encontrada al re-verificar:* el **Motivate Award fue retirado** esta temporada (2025-2026, DECODE) y reemplazado por Reach + Sustain. Mi propuesta de estructura de hace dos turnos todavía tenía Motivate Award — quedó corregido antes de escribir.
- **Reconocimiento Individual** — FIRST Leadership Award (Dean's List), Woodie Flowers Award (fuente más débil que el resto, marcado en la página).
- **Desempeño en Campo** — Winning Alliance, Finalist Alliance.
- **Premios Opcionales** — Compass Award y Volunteer Award (ambos con fuente parcial, marcados explícitamente), Judges' Choice Award (bien sourceado).

Sidebar actualizado con el árbol completo.

**Enganche Portfolio ↔ Premios completado:** el hub de premios FTC tiene aviso destacado hacia el Portfolio; Inspire Award y Think Award enlazan de vuelta.

### Extra (no ordenado explícitamente, pero de bajo riesgo y ya planeado)

- `first/premios.mdx`: re-apunté "Listas oficiales completas" hacia `/frc/premios/` y `/ftc/premios/` en vez de a firstinspires.org directo, y corregí la mención desactualizada de "Motivate Award" en la nota de premios sin equivalente. Es exactamente el plan que ya te había descrito para "cuando existan estas páginas".

---

## Qué quedó en PENDIENTES.md (6 puntos, ninguno bloquea el build)

1. **Safety Animation Award (FRC)** — estatus ambiguo, no ubicado en ningún lado. Necesita que alguien lea directamente `firstinspires.org/resources/library/safety` o el Game Manual para resolver.
2. ~~Enganche Portfolio↔Premios FTC~~ — resuelto esta noche.
3. **The Allaire Medal (FRC)** — agregado fuera del alcance original aprobado, con fuente sólida. Necesita tu confirmación de que estuvo bien agregarlo.
4. **Founder's Award (FRC)** — encontrado pero NO agregado, por falta de descripción confiable.
5. Nota informativa (no requiere decisión): relación Woodie Flowers Finalist / Championship WFA, ya resuelta y documentada dentro de la página.
   - 5b. Woodie Flowers Award (FTC) — fuente más débil, ya marcado en la página.
   - 5c. Compass Award y Volunteer Award (FTC) — fuente parcial, ya marcado en ambas páginas.

---

## Dónde retomar en la mañana

1. **Primero:** revisa los puntos 1, 3 y 4 de PENDIENTES.md — son las únicas decisiones reales pendientes (Safety Animation Award, Allaire Medal, Founder's Award). Todo lo demás ya está resuelto o es solo advertencia de confianza dentro de la página misma.
2. Todo lo que **no se tocó**, tal como pediste: Engineering Notebook FRC, Manual de Marca FRC, y no se avanzó nada de eso.
3. El repo compila limpio (`npm run build` → 105 páginas, 0 errores) — seguro para que revises visualmente sin sorpresas.
4. `PENDIENTES.md` y este `RESUMEN.md` están en la raíz del proyecto, sin commitear (mismo estado que el resto de los cambios de la noche — nada se hizo `git commit` ni `git push`).
