// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'FIRSTHub Docs',

      description:
        'Centro oficial de documentación de FIRSTHub para FRC, FTC, programación, liderazgo y desarrollo de equipos.',

      customCss: ['./src/styles/custom.css'],

      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/Regirex21',
        },
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



//npm run dev -- --host