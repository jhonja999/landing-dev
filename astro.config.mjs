import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import keystatic from "@keystatic/astro";
import netlify from "@astrojs/netlify";
import sitemap from "@astrojs/sitemap";
import compress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
	site: "https://landing-dev.vercel.app", //cambiar dominio por el de robots.txt
	adapter: netlify({
		imageCDN: false,
	}),
	redirects: {
		"/admin": "/keystatic",
	},
	integrations: [
		react(),
		keystatic(),
		sitemap(),
		compress({
			HTML: true,
			JavaScript: true,
			CSS: true,
			Image: false, // astro:assets handles this. Enabling this can dramatically increase build times
			SVG: false, // astro-icon handles this
		}),
	],

	vite: {
		plugins: [tailwindcss()],
		// stop inlining short scripts to fix issues with ClientRouter: https://github.com/withastro/astro/issues/12804
		build: {
			assetsInlineLimit: 0,
		},
	},
	image: {
		domains: [
		  "images.unsplash.com",
		  "i.imgur.com",
		  "res.cloudinary.com" // ✅ Decloudinary
		],
		remotePatterns: [
		  { protocol: "https", hostname: "**.unsplash.com" },
		  { protocol: "https", hostname: "**.imgur.com" },
		  { protocol: "https", hostname: "**.cloudinary.com" } // ✅ wildcard por subdominio si aplica
		]
	  }
	  ,
});
