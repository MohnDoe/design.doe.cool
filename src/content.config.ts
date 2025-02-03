import { file } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const workList = defineCollection({
  loader: file("src/content/work/work.json", {
    parser: (text) => JSON.parse(text).work,
  }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      description: z.string(),
      color: z.string(),
      tags: z.array(z.string()),
      image: image(),
    }),
});

export const collections = { workList };
