// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import firsthubLogo from './src/assets/firsthub_logo_full.svg';
import { sidebarFTC, sidebarFRC } from './src/sidebar.mjs';
import { programa } from './src/programa.mjs';
import remarkEnlaces from './src/plugins/remark-enlaces.mjs';

/* =================================================
   DOS DOCUMENTACIONES, UN SOLO REPOSITORIO
   Este archivo genera FIRSTHub Docs FTC (/docs-ftc) o
   FIRSTHub Docs FRC (/docs-frc) según la variable de
   entorno DOCS_PROGRAM ("ftc" o "frc").
     npm run dev        → FTC en local
     npm run dev:frc    → FRC en local
     npm run build      → construye las dos (scripts/build.mjs)
   El contenido de cada una sale de src/content/docs/<programa>/
   más las carpetas compartidas (first, voluntarios, herramientas);
   ver src/content.config.ts.
   ================================================= */
const P = programa();
const NOMBRE = P.toUpperCase();

export default defineConfig({
  // Mismo dominio principal que el sitio: el apex redirige a www con un 308.
  site: 'https://www.firsthub.dev',
  base: `/docs-${P}`,
  outDir: `./dist/docs-${P}`,

  markdown: {
    // Convierte los enlaces /docs/... de las páginas a la documentación correcta
    remarkPlugins: [[remarkEnlaces, { programa: P }]],
  },

  integrations: [
    starlight({
      // El logo ya dice FIRSTHub: replacesTitle evita repetirlo en el
      // encabezado; el título queda en la pestaña del navegador.
      title: `FIRSTHub Docs ${NOMBRE}`,

      logo: {
        // @ts-ignore
        light: firsthubLogo,
        // @ts-ignore
        dark: firsthubLogo,
        alt: 'FIRSTHub',
        replacesTitle: true,
      },

      description:
        P === 'ftc'
          ? 'Documentación de FIRST Tech Challenge en español: Control Hub, programación, premios y portafolio.'
          : 'Documentación de FIRST Robotics Competition en español: WPILib, roboRIO, programación y premios.',

      customCss: ['./src/styles/custom.css'],

      components: {
        Head: './src/components/overrides/Head.astro',
        Footer: './src/components/overrides/Footer.astro',
        SocialIcons: './src/components/overrides/SocialIcons.astro',
        ThemeProvider: './src/components/overrides/ThemeProvider.astro',
        ThemeSelect: './src/components/overrides/ThemeSelect.astro',
      },

      social: [
        {
          icon: 'instagram',
          label: 'Instagram',
          href: 'https://www.instagram.com/_firsthub/',
        },
      ],

      sidebar: P === 'ftc' ? sidebarFTC : sidebarFRC,

      // Starlight agrega "src/content/docs/..." a esta base.
      editLink: {
        baseUrl: 'https://github.com/Regirex21/firsthub-docs/edit/main/',
      },
    }),
  ],
});
