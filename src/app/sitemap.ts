import { MetadataRoute } from 'next'

import { projects } from '@/assets/assets'
import { slugify } from '@/utils/slugify'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://zenith-shah.vercel.app'

    const projectEntries = projects.map((project) => ({
        url: `${baseUrl}/projects/${slugify(project.title)}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/projects`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        ...projectEntries
    ]
}
