import type { Lang } from '../i18n/ui';

/** ทุกหน้าสร้างสองภาษา: ไทยที่ราก (/) และอังกฤษที่ /en */
export function langPaths() {
  return [{ params: { lang: undefined } }, { params: { lang: 'en' } }];
}

export function langFromParam(param: string | undefined): Lang {
  return param === 'en' ? 'en' : 'th';
}

/** แปลงเส้นทางปัจจุบันไปเป็นอีกภาษา */
export function switchPath(pathname: string, to: Lang): string {
  const bare = pathname.replace(/^\/en(?=\/|$)/, '') || '/';
  if (to === 'th') return bare;
  return bare === '/' ? '/en/' : `/en${bare}`;
}

export function formatDate(d: Date, lang: Lang): string {
  return d.toLocaleDateString(lang === 'th' ? 'th-TH' : 'en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

const roleEn: Record<string, string> = {
  'ประธานสาขาวิชา': 'Program Chair',
  'เลขานุการ': 'Program Secretary',
  'อาจารย์ผู้รับผิดชอบหลักสูตร': 'Responsible Lecturer',
  'อาจารย์ผู้รับผิดชอบหลักสูตร (จากสถานประกอบการ)': 'Responsible Lecturer (industry)',
  'อาจารย์ประจำหลักสูตร': 'Program Lecturer',
};
export function roleLabel(role: string, lang: Lang): string {
  return lang === 'en' ? roleEn[role] ?? role : role;
}
