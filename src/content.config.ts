import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { programa, COMPARTIDAS } from './programa.mjs';

/* =================================================
   CONTENIDO DE CADA DOCUMENTACIÓN
   Docs FTC = src/content/docs/ftc/ + carpetas compartidas.
   Docs FRC = src/content/docs/frc/ + carpetas compartidas.
   La carpeta del programa se publica en la raíz:
     ftc/robot-preparation/control-hub-setup.mdx
       → /docs-ftc/robot-preparation/control-hub-setup/
     ftc/index.mdx → /docs-ftc/ (portada)
   Las compartidas conservan su carpeta:
     first/que-es-first.mdx → /docs-ftc/first/que-es-first/
   Archivos que empiezan con "_" no se publican.
   ================================================= */
const P = programa();
const EXT = '{md,mdx}';

const generateId = ({ entry }: { entry: string }) => {
  let id = entry.replace(/\\/g, '/').replace(/\.(md|mdx)$/, '');
  if (id.startsWith(`${P}/`)) id = id.slice(P.length + 1);
  // index.mdx de una carpeta = la carpeta misma; el de la raíz = "index"
  if (id !== 'index') id = id.replace(/\/index$/, '');
  return id.toLowerCase();
};

export const collections = {
  docs: defineCollection({
    loader: glob({
      base: './src/content/docs',
      pattern: [`${P}/**/[^_]*.${EXT}`, ...COMPARTIDAS.map((c) => `${c}/**/[^_]*.${EXT}`)],
      generateId,
    }),
    schema: docsSchema(),
  }),
};
