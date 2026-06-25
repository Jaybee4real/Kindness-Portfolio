import { CASE_STUDIES } from '@/lib/links';
import { SITE_URL } from '@/lib/site';

export default function sitemap() {
  const lastModified = new Date();

  const core = [
    { path: '', priority: 1, changeFrequency: 'monthly' },
    { path: '/work', priority: 0.8, changeFrequency: 'monthly' },
  ].map((entry) => ({
    url: `${SITE_URL}${entry.path}`,
    lastModified,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));

  const cases = CASE_STUDIES.map((study) => ({
    url: `${SITE_URL}/work/${study.slug}`,
    lastModified,
    changeFrequency: 'yearly',
    priority: 0.7,
  }));

  return [...core, ...cases];
}
