import { MetadataRoute } from 'next';
import { siteContent } from '@/content/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteContent.metadata.siteUrl.replace(/\/?$/, '');
  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
  ];
}
