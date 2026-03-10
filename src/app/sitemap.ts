import { MetadataRoute } from 'next'

export const dynamic = 'force-static'
export const revalidate = false

import { projects } from '@/assets/assets'
import { slugify } from '@/utils/slugify'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://zenith-shah.vercel.app'

    const projectEntries = projects.map((project) => ({
        url: `${baseUrl}/projects/${slugify(project.title)}`,
        lastModified: '2024-01-01',
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    return [
        {
            url: baseUrl,
            lastModified: '2024-01-01',
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/projects`,
            lastModified: '2024-01-01',
            changeFrequency: 'weekly',
            priority: 0.85,
        },
        ...projectEntries
    ]
}
