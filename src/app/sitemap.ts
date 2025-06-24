import { MetadataRoute } from 'next';
import { routing } from '../i18n/routing';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.appitect.eu';
  const currentDate = new Date().toISOString();

  // Generate entries for each locale
  const routes = routing.locales.map((locale) => {
    return {
      url: `${baseUrl}/${locale}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: locale === routing.defaultLocale ? 1 : 0.9,
    };
  });

  // Add the default route
  routes.push({
    url: baseUrl,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 1,
  });

  return routes;
}
