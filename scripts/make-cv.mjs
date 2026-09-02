/**
 * 用本机 Chrome 无头模式把 scripts/cv.html 渲染成 public/cv/GaoBoyuan-CV.pdf。
 * 需要本机安装 Chrome / Chromium，并能访问 Google Fonts。
 * 用法：npm run cv
 */
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { platform } from 'node:os';

const html = fileURLToPath(new URL('./cv.html', import.meta.url));
const outDir = fileURLToPath(new URL('../public/cv/', import.meta.url));
const out = fileURLToPath(new URL('../public/cv/GaoBoyuan-CV.pdf', import.meta.url));
const profile = fileURLToPath(new URL('./chrome-prof', import.meta.url));

if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

const candidates = {
  win32: [
    'C:/Program Files/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  ],
  darwin: ['/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'],
  linux: ['/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser'],
};

const chrome =
  (candidates[platform()] || []).find((p) => existsSync(p)) ||
  process.env.CHROME_PATH;

if (!chrome) {
  console.error('找不到 Chrome，请设置环境变量 CHROME_PATH');
  process.exit(1);
}

execFileSync(chrome, [
  '--headless',
  '--no-sandbox',
  '--disable-gpu',
  '--no-pdf-header-footer',
  '--virtual-time-budget=10000',
  `--user-data-dir=${profile}`,
  `--print-to-pdf=${out}`,
  `file://${html}`,
]);

console.log('wrote', out);
