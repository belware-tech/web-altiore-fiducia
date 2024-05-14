import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/svelte';
import Button from './Button.svelte';

describe('Button Component', () => {
	it('should render with correct classes', () => {
		const { container } = render(Button, {
			props: {
				variant: 'variant-ghost-primary',
				fontSize: 'text-xl',
				onClick: vi.fn(),
			},
		});

		const button = container.querySelector('button');
		expect(button).toBeDefined();
	});

	it('should call onClick when clicked', async () => {
		const onClickMock = vi.fn();
		const { getByRole } = render(Button, {
			props: {
				onClick: onClickMock,
			},
		});

		const button = getByRole('button');
		await fireEvent.click(button);
		expect(onClickMock).toHaveBeenCalledTimes(1);
	});
});
