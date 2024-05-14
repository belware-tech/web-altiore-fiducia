import type { INavigation } from '$lib/interfaces/navigation.interface';
import { vi } from 'vitest';

const navigationMock: INavigation[] = [
	{ name: 'Home', icon: 'home', onClick: vi.fn() },
	{ name: 'About', icon: 'about', onClick: vi.fn() },
];

export default navigationMock;
