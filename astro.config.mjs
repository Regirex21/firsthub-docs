// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import firsthubLogo from './src/assets/firsthub_logo_full.svg';

export default defineConfig({
  site: 'https://firsthub.dev',
  base: '/docs',
  outDir: './dist/docs',

  integrations: [
    starlight({
      title: '',

      logo: {
        // @ts-ignore
        light: firsthubLogo,
        // @ts-ignore
        dark: firsthubLogo,
        alt: 'FIRSTHub',
      },

      description:
        'Centro oficial de documentación de FIRSTHub para FRC, FTC, programación, liderazgo y desarrollo de equipos.',

      customCss: ['./src/styles/custom.css'],

      components: {
        Head: './src/components/overrides/Head.astro',
      },

      social: [
        {
          icon: 'instagram',
          label: 'Instagram',
          href: 'https://www.instagram.com/_firsthub/',
        },
      ],

      sidebar: [
        {
          label: 'Inicio',
          items: [{ label: 'FIRSTHub Docs', link: '/' }],
        },

        {
          label: 'FIRST',
          items: [
            { label: 'FIRST Hub', link: '/first/' },
            { label: '¿Qué es FIRST?', link: '/first/que-es-first/' },
            { label: 'Valores Fundamentales', link: '/first/valores-fundamentales/' },
            { label: 'Premios', link: '/first/premios/' },
          ],
        },

        {
          label: 'FRC',
          items: [
            { label: 'FRC Hub', link: '/frc/' },
            { label: '¿Qué es FRC?', link: '/frc/que-es-frc/' },
            { label: 'Temporada FRC', link: '/frc/season-overview/' },
            { label: 'Kickoff', link: '/frc/kickoff/' },
            { label: 'Eventos', link: '/frc/events/' },
            { label: 'Roles de equipo', link: '/frc/team-roles/' },

            {
              label: 'Premios',
              items: [
                { label: 'Resumen', link: '/frc/premios/' },
                {
                  label: 'Máquina, Creatividad e Innovación',
                  items: [
                    { label: 'Resumen', link: '/frc/premios/maquina-creatividad-innovacion/' },
                    { label: 'Autonomous Award', link: '/frc/premios/maquina-creatividad-innovacion/autonomous/' },
                    { label: 'Creativity Award', link: '/frc/premios/maquina-creatividad-innovacion/creativity/' },
                    { label: 'Excellence in Engineering Award', link: '/frc/premios/maquina-creatividad-innovacion/excellence-in-engineering/' },
                    { label: 'Industrial Design Award', link: '/frc/premios/maquina-creatividad-innovacion/industrial-design/' },
                    { label: 'Innovation in Control Award', link: '/frc/premios/maquina-creatividad-innovacion/innovation-in-control/' },
                    { label: 'Quality Award', link: '/frc/premios/maquina-creatividad-innovacion/quality/' },
                  ]
                },
                {
                  label: 'Atributos de Equipo',
                  items: [
                    { label: 'Resumen', link: '/frc/premios/atributos-de-equipo/' },
                    { label: 'Engineering Inspiration Award', link: '/frc/premios/atributos-de-equipo/engineering-inspiration/' },
                    { label: 'Gracious Professionalism® Award', link: '/frc/premios/atributos-de-equipo/gracious-professionalism/' },
                    { label: 'Imagery Award', link: '/frc/premios/atributos-de-equipo/imagery/' },
                    { label: "Judges' Award", link: '/frc/premios/atributos-de-equipo/judges-award/' },
                    { label: 'Rising All-Star Award', link: '/frc/premios/atributos-de-equipo/rising-all-star/' },
                    { label: 'Rookie All-Star Award', link: '/frc/premios/atributos-de-equipo/rookie-all-star/' },
                    { label: 'Team Spirit Award', link: '/frc/premios/atributos-de-equipo/team-spirit/' },
                    { label: 'Team Sustainability Award', link: '/frc/premios/atributos-de-equipo/team-sustainability/' },
                  ]
                },
                {
                  label: 'Por Postulación',
                  items: [
                    { label: 'Resumen', link: '/frc/premios/por-postulacion/' },
                    { label: 'FIRST Impact Award', link: '/frc/premios/por-postulacion/first-impact-award/' },
                    { label: 'FIRST Leadership Award', link: '/frc/premios/por-postulacion/first-leadership-award/' },
                    { label: 'Woodie Flowers Finalist Award', link: '/frc/premios/por-postulacion/woodie-flowers-finalist/' },
                    { label: 'Digital Animation Award', link: '/frc/premios/por-postulacion/digital-animation/' },
                    { label: 'Safety Animation Award', link: '/frc/premios/por-postulacion/safety-animation/' },
                  ]
                },
                {
                  label: 'Premios Independientes',
                  items: [
                    { label: 'Resumen', link: '/frc/premios/premios-independientes/' },
                    { label: 'Winner', link: '/frc/premios/premios-independientes/winner/' },
                    { label: 'Finalist', link: '/frc/premios/premios-independientes/finalist/' },
                  ]
                },
              ]
            },

            {label: 'Programación Y Electrónica',
              items: [
              { label: 'Centro de Programación', link: '/frc/programming/' },

              {
                label: 'Instalación y herramientas',
                items: [
                  { label: 'Resumen', link: '/frc/programming/installation-tools/' },
                  { label: 'Instalación offline', link: '/frc/programming/installation-tools/offline-preparation/' },
                  { label: 'LabVIEW', link: '/frc/programming/installation-tools/labview-setup/' },
                  { label: 'Game Tools', link: '/frc/programming/installation-tools/game-tools/' },
                  { label: 'WPILib', link: '/frc/programming/installation-tools/wpilib-setup/' },
                  { label: 'Python', link: '/frc/programming/installation-tools/python-setup/' },
                  { label: 'Siguientes pasos', link: '/frc/programming/installation-tools/next-steps/' },
                ]
              },

                           {
      label: 'Preparación del Robot',
      items: [
        { label: 'Resumen', link: '/frc/robot-preparation/' },
        { label: 'roboRIO 2 Imaging', link: '/frc/robot-preparation/roborio-imaging/' },
        { label: 'roboRIO 1 Imaging', link: '/frc/robot-preparation/roborio1-imaging/' },
        { label: 'Configuración de Radio', link: '/frc/robot-preparation/radio-configuration/' },
        { label: 'OpenMesh (Legacy)', link: '/frc/robot-preparation/openmesh-om5p/' },
        { label: 'Driver Station', link: '/frc/robot-preparation/driver-station/'},
      ]
    },

     {
      label: 'Programación del robot',
      items: [
        { label: 'Resumen', link: '/frc/programming/robot-programming/' },
        { label: 'Drivetrain Java', link: '/frc/programming/robot-programming/drivetrain-java/' },
        { label: 'Drivetrain Python', link: '/frc/programming/robot-programming/drivetrain-python/' },
        { label: 'Drivetrain LabVIEW', link: '/frc/programming/robot-programming/drivetrain-labview/' },
        { label: 'Correr el programa', link: '/frc/programming/robot-programming/corriendo-el-programa/' },
      ]
    }
            ]
           
             },

  ],
},

        

        {
          label: 'FTC',
          items: [
            { label: 'FTC Hub', link: '/ftc/' },
            { label: '¿Qué es FTC?', link: '/ftc/que-es-ftc/' },
            { label: 'Temporada FTC', link: '/ftc/season-overview/' },
            { label: 'Kickoff', link: '/ftc/kickoff/' },

            {
              label: 'Programación',
              items: [
                { label: 'Centro de Programación', link: '/ftc/programming/' },

                {
                  label: 'Instalación y herramientas',
                  items: [
                    { label: 'Resumen', link: '/ftc/programming/installation-tools/' },
                    { label: 'Configuración de Android Studio', link: '/ftc/programming/installation-tools/android-studio-setup/' },
                    { label: 'Configuración de la App Driver Station', link: '/ftc/programming/installation-tools/driver-station-app-setup/' },
                    { label: 'Instalación offline', link: '/ftc/programming/installation-tools/offline-preparation/' },
                    { label: 'Siguientes pasos', link: '/ftc/programming/installation-tools/next-steps/' },
                  ]
                },

                {
                  label: 'Programación del robot',
                  items: [
                    { label: 'Resumen', link: '/ftc/programming/robot-programming/' },
                    { label: 'Drivetrain Java', link: '/ftc/programming/robot-programming/drivetrain-java/' },
                    { label: 'Drivetrain Blocks', link: '/ftc/programming/robot-programming/drivetrain-blocks/' },
                    { label: 'Correr el programa', link: '/ftc/programming/robot-programming/corriendo-el-programa/' },
                  ]
                },

                {
                  label: 'Preparación del Robot',
                  items: [
                    { label: 'Resumen', link: '/ftc/robot-preparation/' },
                    { label: 'Configuración del Control Hub', link: '/ftc/robot-preparation/control-hub-setup/' },
                    { label: 'Configuración del Driver Hub', link: '/ftc/robot-preparation/driver-hub-setup/' },
                    { label: 'Configuración de Red', link: '/ftc/robot-preparation/network-configuration/' },
                    { label: 'Driver Station', link: '/ftc/robot-preparation/driver-station/' },
                    { label: 'Sistema Legacy (2 teléfonos)', link: '/ftc/robot-preparation/phone-based-legacy/' },
                  ]
                },
              ]
            },

            {
              label: 'Engineering Portfolio',
              items: [
                { label: 'Resumen', link: '/ftc/portafolio-de-ingenieria/' },
                { label: 'Requisitos oficiales', link: '/ftc/portafolio-de-ingenieria/requisitos-oficiales/' },
                { label: 'Consejos y organización', link: '/ftc/portafolio-de-ingenieria/consejos-y-organizacion/' },
              ]
            },

            {
              label: 'Premios',
              items: [
                { label: 'Resumen', link: '/ftc/premios/' },
                {
                  label: 'Premio Máximo',
                  items: [
                    { label: 'Resumen', link: '/ftc/premios/premio-maximo/' },
                    { label: 'Inspire Award', link: '/ftc/premios/premio-maximo/inspire-award/' },
                  ]
                },
                {
                  label: 'Ingeniería y Diseño',
                  items: [
                    { label: 'Resumen', link: '/ftc/premios/ingenieria-y-diseno/' },
                    { label: 'Innovate Award', link: '/ftc/premios/ingenieria-y-diseno/innovate-award/' },
                    { label: 'Design Award', link: '/ftc/premios/ingenieria-y-diseno/design-award/' },
                    { label: 'Control Award', link: '/ftc/premios/ingenieria-y-diseno/control-award/' },
                    { label: 'Think Award', link: '/ftc/premios/ingenieria-y-diseno/think-award/' },
                  ]
                },
                {
                  label: 'Conexión y Alcance',
                  items: [
                    { label: 'Resumen', link: '/ftc/premios/conexion-y-alcance/' },
                    { label: 'Connect Award', link: '/ftc/premios/conexion-y-alcance/connect-award/' },
                    { label: 'Reach Award', link: '/ftc/premios/conexion-y-alcance/reach-award/' },
                    { label: 'Sustain Award', link: '/ftc/premios/conexion-y-alcance/sustain-award/' },
                  ]
                },
                {
                  label: 'Reconocimiento Individual',
                  items: [
                    { label: 'Resumen', link: '/ftc/premios/reconocimiento-individual/' },
                    { label: 'FIRST Leadership Award', link: '/ftc/premios/reconocimiento-individual/first-leadership-award/' },
                    { label: 'Woodie Flowers Award', link: '/ftc/premios/reconocimiento-individual/woodie-flowers-award/' },
                  ]
                },
                {
                  label: 'Desempeño en Campo',
                  items: [
                    { label: 'Resumen', link: '/ftc/premios/desempeno-en-campo/' },
                    { label: 'Winning Alliance', link: '/ftc/premios/desempeno-en-campo/winning-alliance/' },
                    { label: 'Finalist Alliance', link: '/ftc/premios/desempeno-en-campo/finalist-alliance/' },
                  ]
                },
                {
                  label: 'Premios Opcionales',
                  items: [
                    { label: 'Resumen', link: '/ftc/premios/premios-opcionales/' },
                    { label: 'Compass Award', link: '/ftc/premios/premios-opcionales/compass-award/' },
                    { label: "Judges' Choice Award", link: '/ftc/premios/premios-opcionales/judges-choice-award/' },
                    { label: 'Volunteer Award', link: '/ftc/premios/premios-opcionales/volunteer-award/' },
                  ]
                },
              ]
            },
          ],
        },
      ],

      editLink: {
        baseUrl:
          'https://github.com/Regirex21/firsthub-docs/edit/main/src/content/docs/',
      },
    }),
  ],
});