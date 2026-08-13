# Imágenes pendientes de agregar

Este archivo reemplaza los 56 placeholders de imagen que existían en el sitio
(divs con borde punteado + texto "Placeholder imagen: ..."). Se eliminaron el
2026-08-12 para poder compilar y publicar esta versión sin bloques visuales de
"falta imagen" en producción. Esta es la lista para reinsertarlas cuando haya
material real (fotos, screenshots, trofeos).

**Patrón para reinsertar una imagen real:** reemplazar el placeholder por un
import real de asset + `<img src={variable.src} alt="..." />`, siguiendo el
patrón ya usado en `frc/robot-preparation/driver-station.mdx` y
`frc/programming/robot-programming/drivetrain-java.mdx` (los dos archivos que
ya tienen fotos reales). No usar el div punteado de nuevo salvo que se quiera
mantener un placeholder visible a propósito.

---

## FRC — Premios: Atributos de Equipo

- `frc/premios/atributos-de-equipo/engineering-inspiration.mdx` — trofeo del Engineering Inspiration Award
- `frc/premios/atributos-de-equipo/gracious-professionalism.mdx` — trofeo del Gracious Professionalism® Award
- `frc/premios/atributos-de-equipo/imagery.mdx` — trofeo del Imagery Award
- `frc/premios/atributos-de-equipo/judges-award.mdx` — trofeo del Judges' Award
- `frc/premios/atributos-de-equipo/rising-all-star.mdx` — trofeo del Rising All-Star Award
- `frc/premios/atributos-de-equipo/rookie-all-star.mdx` — trofeo del Rookie All-Star Award
- `frc/premios/atributos-de-equipo/team-spirit.mdx` — trofeo del Team Spirit Award
- `frc/premios/atributos-de-equipo/team-sustainability.mdx` — trofeo del Team Sustainability Award

## FRC — Premios: Máquina, Creatividad e Innovación

- `frc/premios/maquina-creatividad-innovacion/autonomous.mdx` — trofeo del Autonomous Award
- `frc/premios/maquina-creatividad-innovacion/creativity.mdx` — trofeo del Creativity Award
- `frc/premios/maquina-creatividad-innovacion/excellence-in-engineering.mdx` — trofeo del Excellence in Engineering Award
- `frc/premios/maquina-creatividad-innovacion/industrial-design.mdx` — trofeo del Industrial Design Award
- `frc/premios/maquina-creatividad-innovacion/innovation-in-control.mdx` — trofeo del Innovation in Control Award
- `frc/premios/maquina-creatividad-innovacion/quality.mdx` — trofeo del Quality Award

## FRC — Premios: Por Postulación

- `frc/premios/por-postulacion/digital-animation.mdx` — trofeo del Digital Animation Award
- `frc/premios/por-postulacion/first-impact-award.mdx` — trofeo del FIRST Impact Award
- `frc/premios/por-postulacion/first-leadership-award.mdx` — reconocimiento del FIRST Leadership Award
- `frc/premios/por-postulacion/safety-animation.mdx` — trofeo del Safety Animation Award
- `frc/premios/por-postulacion/woodie-flowers-finalist.mdx` — reconocimiento del Woodie Flowers Award

## FRC — Premios: Independientes

- `frc/premios/premios-independientes/finalist.mdx` — trofeo de Finalist
- `frc/premios/premios-independientes/winner.mdx` — trofeo de Winner

## FRC — Programación

- `frc/programming/robot-programming/drivetrain-labview.mdx` — diálogo "Create New FRC Robot Project"
- `frc/programming/robot-programming/drivetrain-labview.mdx` — diagrama de bloques con Get Joystick Values e Index Array
- `frc/programming/robot-programming/drivetrain-labview.mdx` — diagrama de bloques con Arcade Drive VI conectado
- `frc/programming/robot-programming/drivetrain-python.mdx` — terminal ejecutando "robotpy init"

## FRC — Preparación del Robot

- `frc/robot-preparation/radio-configuration.mdx` — navegador en radio.local / interfaz web de la radio

## FTC — Premios: Conexión y Alcance

- `ftc/premios/conexion-y-alcance/connect-award.mdx` — trofeo del Connect Award
- `ftc/premios/conexion-y-alcance/reach-award.mdx` — trofeo del Reach Award
- `ftc/premios/conexion-y-alcance/sustain-award.mdx` — trofeo del Sustain Award

## FTC — Premios: Desempeño en Campo

- `ftc/premios/desempeno-en-campo/finalist-alliance.mdx` — trofeo de Finalist Alliance
- `ftc/premios/desempeno-en-campo/winning-alliance.mdx` — trofeo de Winning Alliance

## FTC — Premios: Ingeniería y Diseño

- `ftc/premios/ingenieria-y-diseno/control-award.mdx` — trofeo del Control Award
- `ftc/premios/ingenieria-y-diseno/design-award.mdx` — trofeo del Design Award
- `ftc/premios/ingenieria-y-diseno/innovate-award.mdx` — trofeo del Innovate Award
- `ftc/premios/ingenieria-y-diseno/think-award.mdx` — trofeo del Think Award

## FTC — Premios: Premio Máximo

- `ftc/premios/premio-maximo/inspire-award.mdx` — trofeo del Inspire Award

## FTC — Premios: Opcionales

- `ftc/premios/premios-opcionales/compass-award.mdx` — reconocimiento del Compass Award
- `ftc/premios/premios-opcionales/judges-choice-award.mdx` — trofeo del Judges' Choice Award
- `ftc/premios/premios-opcionales/volunteer-award.mdx` — reconocimiento del Volunteer Award

## FTC — Premios: Reconocimiento Individual

- `ftc/premios/reconocimiento-individual/first-leadership-award.mdx` — reconocimiento del FIRST Leadership Award
- `ftc/premios/reconocimiento-individual/woodie-flowers-award.mdx` — reconocimiento del Woodie Flowers Award

## FTC — Instalación y herramientas

- `ftc/programming/installation-tools/android-studio-setup.mdx` — página de descarga de Android Studio
- `ftc/programming/installation-tools/android-studio-setup.mdx` — página de Releases de FtcRobotController en GitHub
- `ftc/programming/installation-tools/driver-station-app-setup.mdx` — REV Hardware Client detectando el dispositivo conectado
- `ftc/programming/installation-tools/offline-preparation.mdx` — carpeta USB con instaladores organizados

## FTC — Programación del robot

- `ftc/programming/robot-programming/corriendo-el-programa.mdx` — dropdown de TeleOp en Driver Station con el OpMode seleccionado
- `ftc/programming/robot-programming/drivetrain-blocks.mdx` — consola del Robot Controller con el enlace Blocks
- `ftc/programming/robot-programming/drivetrain-blocks.mdx` — estructura inicial de un OpMode nuevo en Blocks
- `ftc/programming/robot-programming/drivetrain-blocks.mdx` — bloques de inversión de motores dentro de la inicialización
- `ftc/programming/robot-programming/drivetrain-blocks.mdx` — bloques de matemáticas calculando la potencia de un motor
- `ftc/programming/robot-programming/drivetrain-java.mdx` — pantalla de Motor Configuration con los 4 motores nombrados

## FTC — Preparación del Robot

- `ftc/robot-preparation/control-hub-setup.mdx` — REV Hardware Client mostrando Hub Firmware como Up-to-Date
- `ftc/robot-preparation/driver-hub-setup.mdx` — pantalla de Wi-Fi Settings del Driver Hub mostrando la red FTC-XXXX
- `ftc/robot-preparation/driver-station.mdx` — pantalla principal de Driver Station conectada al robot
- `ftc/robot-preparation/network-configuration.mdx` — selector de canal en la página Manage
- `ftc/robot-preparation/phone-based-legacy.mdx` — pantalla de configuración del teléfono Robot Controller

---

**Total: 56 imágenes pendientes** en 49 archivos.
