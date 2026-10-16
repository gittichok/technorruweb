import type { UiKey } from '../i18n/ui';

export interface NavItem {
  key: UiKey;
  href: string;
  external?: boolean;
  children?: NavItem[];
}

// โครงเมนูตามเอกสาร "ส่วนประกอบเมนู" ของคณะ
export const nav: NavItem[] = [
  { key: 'nav.home', href: '/' },
  {
    key: 'nav.about',
    href: '/about/history',
    children: [
      { key: 'nav.about.history', href: '/about/history' },
      { key: 'nav.about.facilities', href: '/about/facilities' },
      { key: 'nav.about.deans', href: '/about/deans' },
      { key: 'nav.about.executives', href: '/about/executives' },
      { key: 'nav.about.faculty', href: '/about/faculty' },
      { key: 'nav.about.staff', href: '/about/staff' },
    ],
  },
  {
    key: 'nav.education',
    href: '/education/programs',
    children: [
      { key: 'nav.education.why', href: '/education/why-us' },
      { key: 'nav.education.programs', href: '/education/programs' },
      { key: 'nav.education.handbook', href: '/education/handbook' },
    ],
  },
  { key: 'nav.admissions', href: '/admissions' },
  { key: 'nav.info', href: '/info-systems' },
  {
    key: 'nav.services',
    href: '/services/students',
    children: [
      { key: 'nav.services.students', href: '/services/students' },
      { key: 'nav.services.staff', href: '/services/staff' },
      { key: 'nav.services.forms', href: '/services/forms' },
    ],
  },
  { key: 'nav.quality', href: '/quality' },
  { key: 'nav.news', href: '/news' },
  { key: 'nav.contact', href: '/contact' },
];
