// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// CONFIGURACIÓN LIMPIA Y COMPATIBLE
export default defineConfig({
	integrations: [
		starlight({
			// =====================================
			// BRANDING
			// =====================================
			title: 'FIRSTHub Docs',
			description:
				'Centro oficial de documentación de FIRSTHub para FRC, FTC, programación, liderazgo y desarrollo de equipos.',

			// CSS PERSONALIZADO (COLORES)
			customCss: ['./src/styles/custom.css'],

			// =====================================
			// LINKS SUPERIORES
			// =====================================
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

			// =====================================
			// SIDEBAR SIMPLE (SIN ERRORES)
			// SOLO PÁGINAS QUE EXISTAN
			// =====================================
			sidebar: [
				{
					label: 'Inicio',
					items: [
						{ slug: 'index' },
					],
				},
			],

			// =====================================
			// EDIT LINK
			// =====================================
			editLink: {
				baseUrl: 'https://github.com/Regirex21/firsthub-docs/edit/main/src/content/docs/',
			},
		}),
	],
});