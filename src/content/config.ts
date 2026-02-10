import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date : z.string(),
        difficulty : z.string().optional(),
        coverImage: z.string().optional(),
        coverImageAlt: z.string().optional(),
        tags: z.array(z.string()).optional()
    })
})

export const collections = {
    posts: postsCollection,
}