# CLAUDE.md — Reglas del proyecto FIRSTHub Docs

> **ESTADO: BORRADOR — no final.** Este archivo está en revisión. No asumas
> que algo aquí es definitivo hasta que se quite este aviso.

Este archivo existe para que las reglas de este proyecto no vivan solo en el
historial de chat. Cualquier sesión (supervisada o no) debe leer esto antes
de tocar contenido, estructura de sidebar, o `astro.config.mjs`.

Archivos compañeros de este documento:
- **`PENDIENTES.md`** — registro de hallazgos fuera de alcance, fuentes
  no verificadas, y conflictos de fuente sin resolver. Es el lugar donde
  el agente escribe en vez de decidir por su cuenta.
- **`RESUMEN.md`** — bitácora de handoff al final de sesiones largas o
  autónomas (qué se hizo, qué quedó en PENDIENTES.md, dónde retomar).
- **`IMAGENES-PENDIENTES.md`** — inventario de dónde iban los placeholders de
  imagen que se quitaron para poder publicar (2026-08-12). Es la lista para
  reinsertar imágenes reales cuando haya material; no volver a usar el div
  punteado salvo que se quiera un placeholder visible a propósito.

---

## 1. Estándar de fidelidad — qué es traducción fiel y qué es contenido propio

Dos categorías de contenido en este sitio, y no deben mezclarse dentro de
una misma página sin marcarlo explícitamente:

- **Traducción fiel**: todo hecho/nombre/requisito técnico debe rastrearse
  a una fuente oficial (`firstinspires.org`, `ftc-docs.firstinspires.org`,
  `docs.revrobotics.com`, Game Manual / Competition Manual vigente). Se
  resume y parafrasea, **nunca se reproduce 1:1 un criterio de juzgamiento
  completo** (son documentos con copyright de FIRST, y cambian por
  temporada). Cada página así lleva un Aside "Fuente" con el link exacto.
- **Contenido propio**: consejos, estrategia, buenas prácticas, redacción
  de marca. No necesita fuente oficial, pero debe estar marcado como tal
  cuando conviva en una sección que de otro modo se espera sourceada
  (ver checklist de `consejos-y-organizacion.mdx` como ejemplo del patrón).

### Estado actual, página por página (al momento de escribir esto)

**Traducción fiel — verificado y en buen estado:**
| Sección | Notas |
|---|---|
| `ftc/robot-preparation/*` (5 subpáginas) | Reescritas específicamente para fidelidad estricta, cada una con cita directa |
| `ftc/portafolio-de-ingenieria/requisitos-oficiales.mdx` | Verificado contra temporada vigente |
| `ftc/programming/robot-programming/drivetrain-java.mdx` | Basado en el sample oficial `BasicOmniOpMode_Linear.java`, verificado línea por línea |
| `frc/premios/*`, `ftc/premios/*` | Auditado dos veces; ver tabla de pendientes abajo para los pocos casos de fuente parcial |
| `first/que-es-first.mdx`, `first/valores-fundamentales.mdx`, `first/premios.mdx` | Citas directas de firstinspires.org |

**Traducción fiel — con pendientes conocidos, NO tratar como confiable al 100% todavía:**
| Sección | Problema conocido |
|---|---|
| `frc/programming/robot-programming/drivetrain-labview.mdx`, `corriendo-el-programa.mdx` | Escritas antes de fijar la regla de fidelidad estricta; tienen secciones de troubleshooting no sourceadas mezcladas con contenido sí sourceado, sin marcar la diferencia. |
| `ftc/programming/robot-programming/drivetrain-blocks.mdx` | La tabla de fórmulas está marcada como adaptación propia (correcto), pero confirma que no existe sample oficial de mecanum en Blocks — no es "pendiente", es un límite real de la fuente. |
| `ftc/premios/reconocimiento-individual/woodie-flowers-award.mdx`, `premios-opcionales/volunteer-award.mdx` | Fuente parcial, ya marcado en la página con Aside propio. |

**Resuelto 2026-08-12 (sesión de limpieza pre-publicación):**
- `frc/robot-preparation/radio-configuration.mdx` — los 3 puntos confirmados incorrectos (conector Weidmuller no "barrel jack"; DIP switch 3 es condicional, no incondicional; banda principal 6GHz/WiFi 6E no 5GHz) ya están corregidos en el archivo, verificado contra `docs.wpilib.org` y `frc-radio.vivid-hosting.net`.
- `frc/programming/robot-programming/drivetrain-java.mdx`, `drivetrain-python.mdx` — código actualizado al patrón `SparkMaxConfig` + `.configure(config, ResetMode, PersistMode)` de REVLib 2025+, verificado contra `docs.revrobotics.com` y `robotpy.readthedocs.io`. Se agregó un Aside en ambas páginas advirtiendo que REVLib cambia esta API cada temporada, para que una futura auditoría no asuma que esto queda fijo para siempre.

**Contenido propio, marcado explícitamente — no está sujeto a esta regla:**
- `frc/kickoff.mdx`, `frc/events.mdx`, `frc/team-roles.mdx`
- `ftc/kickoff.mdx`
- `ftc/portafolio-de-ingenieria/consejos-y-organizacion.mdx`
- Todos los hubs de navegación puros (`*/index.mdx` de programas y categorías) — organización nuestra, no traducción, salvo cuando citan un hecho puntual (ese hecho puntual sí necesita su propio Aside de fuente).

Cuando se audite o toque cualquiera de estas páginas, no asumir que "ya está bien" solo porque está en la lista de arriba — la lista es un punto de partida, no una garantía permanente.

---

## 2. Política de traducción

- Contenido oficial: se traduce del inglés al español de forma fiel, no
  literal palabra por palabra, pero fiel en significado y alcance.
- **Términos que NO se traducen**, se mantienen en inglés dentro del texto
  en español: `Gracious Professionalism`, `Coopertition`, `Build Season`,
  y **todos los nombres propios de premios** (`FIRST Impact Award`,
  `Inspire Award`, `Rookie All-Star Award`, etc. — nunca "Premio de
  Impacto FIRST" ni variantes traducidas). También términos de hardware/
  software propios: `Control Hub`, `Driver Hub`, `Engineering Portfolio`,
  `Engineering Notebook`, nombres de clases/métodos de código.
- **Cuando un término no tiene traducción establecida ni precedente en
  este sitio**: se deja en inglés en su primera aparición, opcionalmente
  con una glosa breve en español entre paréntesis o en un Aside. No se
  inventa una traducción propia sin dejar constancia de que es una
  decisión nuestra, no un término oficial en español.

### Regla permanente: verificar fuente no es lo mismo que verificar traducción

Confirmar que una fuente oficial existe y dice X **no confirma que nuestro
texto en español diga lo mismo que X**. Un dato puede estar perfectamente
sourceado (link correcto, cita real) y aun así estar mal traducido — y
ninguna verificación de "¿existe la fuente?" atrapa ese error, porque
la fuente sí existe. Son dos fallas distintas con dos verificaciones
distintas.

Por eso, toda auditoría de fidelidad de una página traducida debe incluir
un paso aparte: **releer el texto en inglés de la fuente y contrastarlo
contra el sentido del texto en español**, no solo confirmar que el link
de la fuente resuelve y que el nombre del premio coincide. Esto aplica
en cada auditoría futura, no solo la primera vez que se escribe la
página — una página puede pasar la verificación de "la fuente existe"
hoy y seguir teniendo una traducción incorrecta desde el día en que se
escribió.

---

## 3. Regla de desempate — cuando la fuente oficial se contradice a sí misma

Ya pasó (Woodie Flowers Award vs. Woodie Flowers Finalist Award; estatus
del Motivate Award). La política:

1. Cuando una página general tipo `/awards` y una página dedicada de
   `firstinspires.org` **difieran entre sí** sobre el mismo premio,
   **se documentan AMBAS variantes en la página del sitio**, citando de
   dónde sale cada una, y **se marca explícitamente la discrepancia**.
   Nunca se elige una en silencio ni se descarta la otra sin dejar rastro.
2. Cualquier conflicto de fuente que **no** se pueda resolver documentando
   ambas variantes con claridad (por ejemplo: no se sabe cuál es la
   vigente, o las fuentes se contradicen sobre si algo existe o no) **se
   anota en `PENDIENTES.md` para decisión del usuario — el agente no lo
   resuelve por su cuenta.**

Precedente ya aplicado: `frc/premios/por-postulacion/woodie-flowers-finalist.mdx`
documenta ambos niveles del premio FRC (Finalist por evento, Award a
nivel Championship) en vez de elegir uno. El caso de Safety Animation
Award (no aparecía en las páginas de lista general pero sí en su página
dedicada) se registró en `PENDIENTES.md` hasta poder confirmar con una
fuente adicional, en vez de asumir cuál lista estaba desactualizada.

> **Aclaración para no confundir esto con un conflicto de fuente:**
> existen dos archivos de Woodie Flowers, uno por programa, y eso es
> intencional, no una inconsistencia de nombre:
> - `frc/premios/por-postulacion/woodie-flowers-finalist.mdx` (FRC) —
>   confirmado con dos niveles (Finalist por evento / Award a nivel
>   Championship), fuente sólida.
> - `ftc/premios/reconocimiento-individual/woodie-flowers-award.mdx` (FTC) —
>   premio análogo pero de FTC, **sin la misma estructura de dos niveles
>   confirmada** (la página lo marca con su propio Aside de "fuente
>   parcial" — no asumir que funciona igual que en FRC sin verificarlo).
>
> Si en el futuro se encuentra que FTC sí tiene la misma estructura de
> dos niveles, eso se actualiza en `ftc/.../woodie-flowers-award.mdx`
> directamente — no se renombra para que coincida con el nombre del
> archivo de FRC. Los nombres de archivo pueden diferir legítimamente
> entre programas; lo que no puede pasar es que diverjan sin que quede
> claro por qué.

---

## 4. Checklist obligatorio — página nueva de premio

Toda página de premio nuevo debe tener, sin excepción:

- [ ] Frontmatter: `title` + `description`
- [ ] Import de componentes Starlight usados (`Aside`, etc. — sin imports sobrantes)
- [ ] Aside **"Fuente"** con el link exacto a la página oficial usada
- [ ] Aside de temporada ("Cambia por temporada" o equivalente) — **en la
      página del premio individual, no solo en el index de su categoría**
      (la auditoría encontró inconsistencia real aquí: varios index de FTC
      no lo tenían, y las páginas de puro desempeño en campo tampoco lo
      tenían en ninguno de los dos programas — a partir de ahora es
      obligatorio en ambos niveles, sin excepción por "parece que no va a
      cambiar")
- [ ] Sección "Propósito" **parafraseada en palabras propias** — nunca el
      criterio de juzgamiento completo copiado/traducido 1:1
- [ ] Placeholder de trofeo/reconocimiento (`<div style="...dashed...">`)
- [ ] Sección "Para el criterio completo" con link a la guía oficial de
      jueces / manual vigente
- [ ] Entrada en el `index.mdx` de su sub-hub (LinkCard)
- [ ] Entrada correspondiente en el sidebar de `astro.config.mjs`
- [ ] Si algo no se pudo confirmar contra fuente real: el marcador
      **literal** `⚠️ PENDIENTE DE VERIFICACIÓN: [qué falta confirmar]`
      visible en el cuerpo de la página, y la misma nota duplicada en
      `PENDIENTES.md`.

**Sobre el último punto:** la auditoría de la corrida nocturna encontró que
este marcador exacto **nunca se usó** — en su lugar se usaron títulos de
Aside distintos cada vez ("Fuente parcial", "Confianza de fuente menor",
etc.). La sustancia (advertencia visible + registro en PENDIENTES.md) sí
se cumplió, pero no el formato. A partir de este archivo, el string
`⚠️ PENDIENTE DE VERIFICACIÓN` es obligatorio y debe quedar grepeable tal
cual — no parafrasearlo, no reemplazarlo por un título de Aside distinto.

---

## 5. Límite de alcance — el agente no expande la estructura por su cuenta

Esto es lo que se violó con The Allaire Medal durante la corrida nocturna
(se agregó un premio real, bien verificado, pero fuera de la lista de
archivos explícitamente aprobada).

**Regla:** el agente no agrega premios, páginas, secciones o categorías
más allá de lo explícitamente aprobado por el usuario — **incluso si los
encuentra confirmados en la fuente oficial mientras investiga otra cosa.**

**Criterio operativo de qué cuenta como "aprobado":** antes de cualquier
corrida de construcción — y sobre todo antes de una corrida nocturna o
sin supervisión — se fija por escrito la lista explícita de
archivos/páginas a crear. Esa lista es el límite de alcance.

> **"Dentro de alcance" significa "está en la lista aprobada por
> escrito". No significa "me pareció relacionado", "es del mismo tipo
> que los demás", ni "lo encontré en la misma página de la fuente
> oficial".** Un premio real, bien verificado, que no esté en la lista
> sigue estando fuera de alcance.

Cuando se encuentre algo fuera de esa lista (esté o no confirmado en la
fuente oficial):
1. **No se crea el archivo.**
2. Se documenta el hallazgo en `PENDIENTES.md`: qué se encontró, con qué
   fuente, y por qué no se agregó.
3. Se espera aprobación explícita antes de construirlo — lo cual
   significa que se agrega a una lista aprobada nueva, no que se asume
   luz verde por falta de objeción.

Esto aplica incluso durante sesiones autónomas/nocturnas sin supervisión
— de hecho, aplica *especialmente* ahí.

---

## 6. Consistencia estructural entre FRC y FTC

Ambos programas deben seguir:
- **El mismo orden de secciones de nivel superior** en el sidebar
  (introducción → temporada/eventos → premios → contenido técnico).
- **El mismo patrón interno** de sub-hubs dentro de cada sección
  compartida (por ejemplo, el orden Instalación → Preparación del Robot
  → Programación del robot debe ser idéntico en ambos programas).

Cuando se construye una sección nueva para un programa que ya existe en
el otro, **se revisa la estructura del programa existente antes de
construir la nueva** — no se construyen ambas por separado y se
reconcilian después. Así fue como el orden de FRC y FTC divergió sin que
nadie lo decidiera a propósito.

> **Nota:** el reordenamiento específico de sidebar propuesto para
> alinear FRC y FTC (Premios antes de Programación en ambos; Engineering
> Portfolio junto a Premios en FTC) fue **propuesto pero todavía no
> aprobado** al momento de escribir esto. No asumir que ya se aplicó —
> confirmar el estado actual de `astro.config.mjs` antes de dar por
> hecho el orden.

---

## No emprender sin decisión explícita del usuario

Esto no es una lista de preguntas abiertas para que el agente elija —
es una lista de cosas que **no se empiezan a construir** hasta que el
usuario decida explícitamente que sí:

- **Migrar de "página por premio escrita a mano" a un modelo de datos
  canónico** (una fuente estructurada por premio, páginas generadas).
  No se empieza esta migración, ni siquiera parcialmente o "solo para
  probar", sin que primero se calcule y se muestre al usuario el costo
  real de migrar las ~60 páginas de premios ya escritas a mano (nota:
  infiero "~60 páginas" del contexto de la conversación — el mensaje
  original se cortó en "sin calcular primero el costo de migrar las
  ~60", confirmar si se refería a esto exactamente).
- **Política de re-verificación por cambio de temporada** (hoy no existe
  ningún mecanismo que detecte que una página quedó desactualizada
  después de escrita) — no se implementa ningún mecanismo automático de
  esto sin que el usuario apruebe el enfoque primero.
