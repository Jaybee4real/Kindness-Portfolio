import { SITE } from '@/lib/site';

export default function manifest() {
  return {
    name: SITE.title,
    short_name: 'Kindness Ukandu',
    description: SITE.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#f8fbff',
    theme_color: '#f8fbff',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
