import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, fireEvent } from '@testing-library/svelte';
import NavbarMobile from './NavbarMobile.svelte';
import { getDrawerStore } from '@skeletonlabs/skeleton';

vi.mock('@skeletonlabs/skeleton', () => {
	const close = vi.fn();
	return {
		getDrawerStore: () => ({
			close,
		}),
	};
});

describe('NavbarMobile Component', () => {
	beforeEach(() => {
		vi.resetAllMocks();
	});

	it('renders the logo', () => {
		const { getByTestId } = render(NavbarMobile, {
			props: {
				logo: 'logo-path.png',
				navigation: [],
			},
		});
		expect(getByTestId('logo-test-id')).toBeDefined();
	});

	it('renders navigation items and handles click', async () => {
		const onClickMock = vi.fn();
		const navigation = [
			{ name: 'Home', icon: 'home-icon', onClick: onClickMock },
		];
		const { getByTestId } = render(NavbarMobile, {
			props: { navigation, logo: 'logo-path.png' },
		});

		const button = getByTestId('button-test-0');
		await fireEvent.click(button);
		expect(onClickMock).toHaveBeenCalledTimes(1);

		const drawerStore = getDrawerStore();
		expect(drawerStore.close).toHaveBeenCalledTimes(1);
	});
});
