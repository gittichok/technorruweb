// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // เปลี่ยนเป็นโดเมนจริงเมื่องาน IT ตั้งค่าเรียบร้อย
  site: 'https://techno.rru.ac.th',
  i18n: {
    defaultLocale: 'th',
    locales: ['th', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  vite: { plugins: [tailwindcss()] },
});
