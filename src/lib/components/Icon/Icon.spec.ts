import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';

import Icon from './Icon.svelte';

describe('Test <SvgIcon /> component', () => {
	it('Render the component properly', () => {
		render(Icon, { props: { title: 'User', name: 'user' } });

		expect(screen.queryByText('User')).toBeDefined();
		expect(screen.getByTestId('svg-icon-id')).toBeDefined();
	});
});
