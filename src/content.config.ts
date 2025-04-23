import { z, defineCollection } from "astro:content";
import { glob, file } from "astro/loaders";

const bioCollection = defineCollection({
	loader: glob({ pattern: "**/[^_]*{md,mdx}", base: "./src/data/bio" }),
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			theme: z.enum(["dark", "light"]),
			blur: z.enum(["no blur", "blur"]),
			avatar: image(),
			background: image(),
		}),
});

const socialsCollection = defineCollection({
	loader: glob({ pattern: "**/[^_]*.{yml,yaml}", base: "./src/data/socials" }),
	schema: z.object({
		title: z.string(),
		url: z.string(),
		order: z.number(),
		icon: z.enum([
			"github",
			"twitter",
			"bluesky",
			"mastodon",
			"linkedin",
			"instagram",
			"threads",
			"facebook",
			"youtube",
			"twitch",
			"tiktok",
			"snapchat",
			"reddit",
			"pinterest",
			"medium",
			"dev",
			"dribbble",
			"behance",
			"buymeacoffee",
			"codepen",
			"producthunt",
			"discord",
			"slack",
			"whatsapp",
			"telegram",
			"email",
		]),
	}),
});

const linksCollection = defineCollection({
	loader: glob({ pattern: "**/[^_]*.{yml,yaml}", base: "./src/data/links" }),
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		url: z.string(),
		order: z.number(),
	}),
});


const projectsCollection = defineCollection({
	loader: glob({ pattern: "**/[^_]*.{yml,yaml}", base: "./src/data/projects" }),
	schema: ({ image }) => z.object({
	  title: z.string(),
	  description: z.string().optional(),
	  url: z.string(),
	  // Usa el helper image() para imágenes locales
	  image: z.union([
		image(), // Para imágenes locales
		z.string().url() // Para URLs remotas
	  ]),
	  order: z.number(),
	  tags: z.array(z.string()).optional(),
	}),
  });
  
  export const collections = {
	socials: socialsCollection,
	bio: bioCollection,
	links: linksCollection,
	projects: projectsCollection,
  };