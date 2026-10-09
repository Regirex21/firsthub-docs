// Construye las dos documentaciones, una después de la otra:
//   dist/docs-ftc  y  dist/docs-frc
// Vercel publica la carpeta dist completa.
import { spawnSync } from 'node:child_process';
import { rmSync } from 'node:fs';

rmSync('dist', { recursive: true, force: true });

for (const programa of ['ftc', 'frc']) {
  console.log(`\n=== FIRSTHub Docs ${programa.toUpperCase()} ===\n`);
  const r = spawnSync('npx', ['astro', 'build'], {
    stdio: 'inherit',
    shell: true,
    env: { ...process.env, DOCS_PROGRAM: programa },
  });
  if (r.status !== 0) process.exit(r.status ?? 1);
}
