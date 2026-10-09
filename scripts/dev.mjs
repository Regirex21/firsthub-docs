// Servidor local de una documentación: node scripts/dev.mjs ftc|frc
import { spawnSync } from 'node:child_process';

const programa = process.argv[2] || 'ftc';
spawnSync('npx', ['astro', 'dev', ...process.argv.slice(3)], {
  stdio: 'inherit',
  shell: true,
  env: { ...process.env, DOCS_PROGRAM: programa },
});
