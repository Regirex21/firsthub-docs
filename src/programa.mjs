// Programa que se está construyendo: "ftc" o "frc".
// Lo fija la variable de entorno DOCS_PROGRAM (ver scripts/build.mjs).
export function programa() {
  const p = (process.env.DOCS_PROGRAM || 'ftc').toLowerCase();
  if (p !== 'ftc' && p !== 'frc') {
    throw new Error(`DOCS_PROGRAM debe ser "ftc" o "frc", no "${p}"`);
  }
  return p;
}

// Carpetas de src/content/docs que se publican en las dos documentaciones
export const COMPARTIDAS = ['first', 'voluntarios', 'herramientas'];
