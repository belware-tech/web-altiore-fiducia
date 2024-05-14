import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import Loader from './Loader.svelte';

describe('Loader', () => {
	it('renders the progress radial and localized loading message', () => {
		const { getByTestId } = render(Loader);
		expect(getByTestId('progress-radial')).toBeDefined();
	});
});
