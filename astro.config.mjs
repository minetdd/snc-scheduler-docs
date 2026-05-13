// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'SNC Scheduler',
			description: 'Self-hosted scheduling — set your availability, share a booking link, let others pick a time.',
			logo: { src: './public/logo.png', alt: 'Sumo Ninja Creative' },
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/minetdd/snc-scheduler' },
			],
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{ label: 'Getting Started', slug: 'getting-started' },
				{ label: 'Client Experience', slug: 'client-experience' },
				{
					label: 'Admin Guide',
					items: [
						{ label: 'Dashboard', slug: 'admin/dashboard' },
						{ label: 'Availability', slug: 'admin/availability' },
						{ label: 'Services', slug: 'admin/services' },
						{ label: 'Bookings', slug: 'admin/bookings' },
						{ label: 'Settings', slug: 'admin/settings' },
					],
				},
				{
					label: 'Integrations',
					items: [
						{ label: 'Resend (Email)', slug: 'integrations/resend' },
						{ label: 'Google Calendar', slug: 'integrations/google-calendar' },
						{ label: 'Morning Summary Email', slug: 'integrations/morning-summary' },
					],
				},
				{ label: 'Embedding', slug: 'embedding' },
				{ label: 'API Reference', slug: 'reference/api' },
			],
		}),
	],
});
