import type { IMockHTMLElement } from '$lib/interfaces/mockHtmlElement.interface';
import { describe, it, expect, vi } from 'vitest';

import smoothScroll from '../smoothScroll';

describe('smoothScroll', () => {
	it('should call scrollIntoView on the correct element', () => {
		const mockElement: Partial<IMockHTMLElement> = {
			scrollIntoView: vi.fn(),
		};

		vi.spyOn(document, 'getElementById').mockReturnValue(
			mockElement as HTMLElement,
		);

		smoothScroll('test-section');

		expect(document.getElementById).toHaveBeenCalledWith('test-section');

		expect(mockElement.scrollIntoView).toHaveBeenCalledWith({
			behavior: 'smooth',
		});

		vi.restoreAllMocks();
	});

	it('should not fail if element is not found', () => {
		vi.spyOn(document, 'getElementById').mockReturnValue(null);

		smoothScroll('nonexistent-section');

		expect(document.getElementById).toHaveBeenCalledWith('nonexistent-section');

		vi.restoreAllMocks();
	});
});
