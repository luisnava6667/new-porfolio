export default function sitemap() {
  return [
    {
      url: 'https://luisnavarro.vercel.app/',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1
    }
  ]
}
