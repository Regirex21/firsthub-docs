// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import firsthubLogo from './src/assets/firsthub_logo_full.svg';

export default defineConfig({
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
          label: 'FRC',
          items: [
            { label: 'FRC Hub', link: '/frc/' },
            { label: '¿Qué es FRC?', link: '/frc/que-es-frc/' },
            { label: 'Temporada FRC', link: '/frc/season-overview/' },
            { label: 'Kickoff', link: '/frc/kickoff/' },
            { label: 'Eventos', link: '/frc/events/' },
            { label: 'Roles de equipo', link: '/frc/team-roles/' },

            {label: 'Programación Y Electrónica',
              items: [
              { label: 'programming Hub', link: '/frc/programming/' },

              {
                label: 'Instalación y herramientas',
                items: [
                  { label: 'Overview', link: '/frc/programming/installation-tools/' },
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
        { label: 'Overview', link: '/frc/robot-preparation/' },
        { label: 'roboRIO 2 Imaging', link: '/frc/robot-preparation/roborio-imaging/' },
        { label: 'roboRIO 1 Imaging', link: '/frc/robot-preparation/roborio1-imaging/' },
        { label: 'Radio Configuration', link: '/frc/robot-preparation/radio-configuration/' },
        { label: 'OpenMesh (Legacy)', link: '/frc/robot-preparation/openmesh-om5p/' },
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