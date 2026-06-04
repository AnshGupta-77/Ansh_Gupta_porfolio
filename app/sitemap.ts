import { MetadataRoute } from 'next';
import { getPublicProjects } from '@/config/projects';

const BASE_URL = 'https://stackbyansh.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = getPublicProjects();

  const projectRoutes = projects.map(project => ({
    url: `${BASE_URL}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: project.featured ? 0.9 : 0.7,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...projectRoutes,
  ];
}
