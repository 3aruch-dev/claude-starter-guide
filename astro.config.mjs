// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';

// The public address of the site. GitHub Pages serves this repo at
// https://3aruch-dev.github.io/claude-starter-guide/
const site = 'https://3aruch-dev.github.io';
const base = '/claude-starter-guide';
const repo = 'https://github.com/3aruch-dev/claude-starter-guide';

const title = 'The Claude Code Starter Guide';
const description =
	'From zero to using AI better than 99% of your peers — for Mac and Windows. A free, beginner-friendly guide to Claude Code.';
const socialImage = `${site}${base}/og-image.png`;

// https://astro.build/config
export default defineConfig({
	site,
	base,
	trailingSlash: 'always',
	integrations: [
		starlight({
			title,
			description,
			logo: { src: './src/assets/logo.svg', alt: '' },
			favicon: '/favicon.svg',
			social: [{ icon: 'github', label: 'GitHub', href: repo }],
			editLink: { baseUrl: `${repo}/edit/main/` },
			lastUpdated: true,
			customCss: [
				'@fontsource-variable/inter',
				'@fontsource-variable/jetbrains-mono',
				'./src/styles/custom.css',
			],
			components: {
				Footer: './src/components/Footer.astro',
			},
			// Social preview (how the link looks when shared on LinkedIn and elsewhere).
			// Starlight already adds og:title, og:description, og:url and twitter:card.
			head: [
				{ tag: 'meta', attrs: { property: 'og:image', content: socialImage } },
				{ tag: 'meta', attrs: { property: 'og:image:width', content: '1200' } },
				{ tag: 'meta', attrs: { property: 'og:image:height', content: '630' } },
				{
					tag: 'meta',
					attrs: { property: 'og:image:alt', content: `${title} — for Mac and Windows` },
				},
				{ tag: 'meta', attrs: { name: 'twitter:image', content: socialImage } },
				{ tag: 'meta', attrs: { name: 'theme-color', content: '#c2522d' } },
			],
			sidebar: [
				{
					label: 'Start here',
					items: [
						{ label: 'Welcome', link: '/' },
						{ label: 'Part 0: Key words', slug: 'part-0-key-words' },
					],
				},
				{
					label: 'The Foundations',
					items: [
						{ label: 'Part 1: Set up your computer', slug: 'part-1-foundations' },
						{ label: 'Part 2: Install Claude Code', slug: 'part-2-claude-code' },
						{ label: 'Part 3: Work like the top 1%', slug: 'part-3-work-like-the-top-1' },
						{ label: 'Part 4: Extend Claude Code', slug: 'part-4-extend-claude-code' },
					],
				},
				{
					label: 'Beyond the basics',
					items: [
						{ label: 'Part 5: The wider AI toolkit', slug: 'part-5-wider-ai-toolkit' },
						{
							label: 'Part 6: The Living Toolkit',
							slug: 'part-6-living-toolkit',
							badge: { text: 'Updated weekly', variant: 'default' },
						},
					],
				},
				{
					label: 'Keep going',
					items: [
						{ label: 'Part 7: First-week checklist', slug: 'part-7-first-week-checklist' },
						{ label: 'Part 8: Getting unstuck', slug: 'part-8-getting-unstuck' },
					],
				},
			],
			// Fails the build if any link between pages is broken.
			plugins: [starlightLinksValidator()],
		}),
	],
});
