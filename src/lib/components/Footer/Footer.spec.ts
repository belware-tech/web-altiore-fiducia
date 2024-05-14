import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import socialLinksMock from '$lib/__mocks__/socialLinks.mock';
import Footer from './Footer.svelte';

describe('Footer Component', () => {
	it('renders follow text, social links, and disclaimer correctly', () => {
		const { getByText, getAllByRole } = render(Footer, {
			props: {
				follow: 'Follow Us',
				disclaimer: 'All rights reserved.',
				developer: 'Belware Tech',
				socialLinks: socialLinksMock,
			},
		});

		expect(getByText('Follow Us')).toBeDefined();

		const links = getAllByRole('link');
		expect(links.length).toBe(socialLinksMock.length + 1);
		expect(links[0].getAttribute('href')).toBe('https://twitter.com');
		expect(links[1].getAttribute('href')).toBe('https://facebook.com');

		expect(links[links.length - 1].getAttribute('href')).toBe(
			'https://www.belwaretech.com',
		);
	});
});
