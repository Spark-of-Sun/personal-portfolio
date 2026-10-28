import { MetadataRoute } from 'next';
import { siteContent } from '@/content/site';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteContent.metadata.siteUrl.replace(/\/?$/, '');
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
