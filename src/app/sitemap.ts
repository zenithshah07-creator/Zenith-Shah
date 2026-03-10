import { MetadataRoute } from 'next'

export const dynamic = 'force-static'
export const revalidate = false

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://zenith-shah.vercel.app'

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
        }
    ]
}
