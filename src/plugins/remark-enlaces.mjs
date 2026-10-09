/* =================================================
   ENLACES ENTRE PÁGINAS
   En los .md/.mdx los enlaces internos se siguen escribiendo
   con la forma de siempre (/docs/ftc/..., /docs/frc/...,
   /docs/first/...). Al construir, este plugin los convierte:
     /docs/ftc/x         → /docs-ftc/x
     /docs/frc/x         → /docs-frc/x
     /docs/first/x       → /docs-<programa actual>/first/x
     (igual voluntarios y herramientas)
   Así una página compartida enlaza a la versión de la
   documentación en la que se está leyendo.
   Cubre enlaces Markdown, componentes (href="...") y HTML.
   ================================================= */
import { COMPARTIDAS } from '../programa.mjs';

export function convertir(url, programa) {
  if (typeof url !== 'string' || !url.startsWith('/docs/')) return url;
  const resto = url.slice('/docs/'.length); // ftc/x, first/x, ...
  const [primero] = resto.split(/[/#?]/);
  if (primero === 'ftc' || primero === 'frc') {
    return `/docs-${primero}/` + resto.slice(primero.length).replace(/^\//, '');
  }
  if (COMPARTIDAS.includes(primero)) {
    return `/docs-${programa}/${resto}`;
  }
  return url;
}

const HREF = /(href\s*=\s*["'])(\/docs\/[^"']*)(["'])/g;

export default function remarkEnlaces({ programa }) {
  const visitar = (nodo) => {
    if (!nodo || typeof nodo !== 'object') return;
    if ((nodo.type === 'link' || nodo.type === 'definition') && nodo.url) {
      nodo.url = convertir(nodo.url, programa);
    }
    if ((nodo.type === 'mdxJsxFlowElement' || nodo.type === 'mdxJsxTextElement') && Array.isArray(nodo.attributes)) {
      for (const a of nodo.attributes) {
        if (a.type === 'mdxJsxAttribute' && (a.name === 'href' || a.name === 'link') && typeof a.value === 'string') {
          a.value = convertir(a.value, programa);
        }
      }
    }
    if (nodo.type === 'html' && typeof nodo.value === 'string') {
      nodo.value = nodo.value.replace(HREF, (_, a, u, b) => a + convertir(u, programa) + b);
    }
    if (Array.isArray(nodo.children)) nodo.children.forEach(visitar);
  };
  return (arbol) => visitar(arbol);
}
