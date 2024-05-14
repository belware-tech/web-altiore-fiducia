import { render } from '@testing-library/svelte';
import Stepper from './Stepper.svelte';
import { describe, it, expect, vi } from 'vitest';
import objectivesMock from '$lib/__mocks__/objectives.mock';

vi.mock('@skeletonlabs/skeleton', async () => {
	const actual = await vi.importActual('@skeletonlabs/skeleton');
	return {
		Stepper: actual.Stepper,
		Step: actual.Step,
	};
});

describe('Stepper Component', () => {
	it('renders each step with objectives and images', () => {
		const { getByText } = render(Stepper, {
			props: { items: objectivesMock },
		});

		expect(getByText('Step 1')).toBeDefined();
		expect(getByText('Objective 1')).toBeDefined();
		expect(getByText('Objective 2')).toBeDefined();
	});
});
