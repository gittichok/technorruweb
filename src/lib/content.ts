import { getCollection, getEntry, render } from 'astro:content';
import type { Lang } from '../i18n/ui';

export async function getPage(lang: Lang, slug: string) {
  const entry = (await getEntry('pages', `${lang}/${slug}`)) ?? (await getEntry('pages', `th/${slug}`));
  if (!entry) throw new Error(`missing page content: ${lang}/${slug}`);
  const { Content } = await render(entry);
  return { entry, Content };
}

/** ข่าวของภาษาที่กำหนด เรียงล่าสุดก่อน; slug คือชื่อไฟล์โดยไม่มีโฟลเดอร์ภาษา */
export async function getNews(lang: Lang) {
  const all = await getCollection('news', (e) => e.id.startsWith(`${lang}/`) && !e.data.draft);
  return all
    .map((e) => ({ ...e, slug: e.id.split('/').slice(1).join('/') }))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
