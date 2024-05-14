import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render } from '@testing-library/svelte';
import Landing from './Landing.svelte';

vi.mock('$lib/stores/mobile.store', () => {
	const isMobile = {
		subscribe: vi.fn((callback) => {
			callback(false);
			return () => {};
		}),
	};
	return { isMobile };
});

describe('Landing', () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});

	it('renders with the correct background image', () => {
		const { container } = render(Landing, {
			props: {
				background: 'url-to-background.jpg',
				title: 'Main Title',
				subtitle: 'Sub Title',
				paragraph: 'Test paragraph content.',
			},
		});

		expect(container.querySelector('div')?.style.backgroundImage).toContain(
			'url-to-background.jpg',
		);
	});

	it('displays different polygon points based on mobile state', async () => {
		const { container } = render(Landing, {
			props: {
				background: 'url-to-background.jpg',
				title: 'Main Title',
				subtitle: 'Sub Title',
				paragraph: 'Test paragraph content.',
			},
		});
		const svg = container.querySelector('polygon');
		expect(svg).toBeDefined();
		expect(svg?.getAttribute('points')).toBe('0,0 10,0 10,0 0,100');
	});

	it('renders additional elements only when not in mobile mode', () => {
		const { queryByTestId } = render(Landing, {
			props: {
				background: 'url-to-background.jpg',
				title: 'Main Title',
				subtitle: 'Sub Title',
				paragraph: 'Test paragraph content.',
			},
		});

		expect(queryByTestId('non-mobile-element')).toBe(null);
	});
});
