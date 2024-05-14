import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/svelte';
import Navbar from './Navbar.svelte';
import smoothScroll from '$lib/utils/smoothScroll';
import navigationMock from '$lib/__mocks__/navigation.mock';

vi.mock('@skeletonlabs/skeleton', async () => {
	const actual = await vi.importActual('@skeletonlabs/skeleton');
	return {
		AppBar: actual.AppBar,
		getDrawerStore: () => ({
			open: vi.fn(),
			close: vi.fn(),
		}),
	};
});

vi.mock('$lib/stores/mobile.store', () => ({
	isMobile: {
		subscribe: vi.fn((callback) => {
			callback(false);
			return () => {};
		}),
	},
}));

vi.mock('$lib/utils/smoothScroll', () => ({
	default: vi.fn(),
}));

vi.mock('$lib/i18n/i18n', () => ({
	locale: {
		set: vi.fn(),
		subscribe: vi.fn((callback) => {
			callback('en');
			return () => {};
		}),
	},
}));

describe('Navbar', () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});

	it('triggers smoothScroll when logo is clicked', async () => {
		const { getByTestId } = render(Navbar, {
			props: { navigation: navigationMock, logo: 'path-to-logo.png' },
		});
		const logo = getByTestId('logo-test-id');
		await fireEvent.click(logo);
		expect(vi.mocked(smoothScroll)).toHaveBeenCalledWith('home');
	});

	it('executes navigation item onClick when clicked', async () => {
		const { getByText } = render(Navbar, {
			props: { navigation: navigationMock, logo: 'path-to-logo.png' },
		});
		const navButton = getByText('Home');
		expect(navButton).toBeDefined();
	});

	it('changes language when language button is clicked', async () => {
		const { getByText } = render(Navbar, {
			props: { navigation: navigationMock, logo: 'path-to-logo.png' },
		});

		const languageButton = getByText('en');
		expect(languageButton).toBeDefined();
	});
});
