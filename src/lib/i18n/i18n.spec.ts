import { describe, it, expect } from 'vitest';
import { translate } from './i18n';
import { mockTranslations } from '$lib/__mocks__/i18n.mock';

describe('translate function', () => {
	it('replaces variables in the template', () => {
		const result = translate('en', mockTranslations, 'greeting', {
			name: 'John',
		});
		expect(result).toBe('Hello, John!');
	});

	it('returns the key when translation is missing', () => {
		const result = translate('en', mockTranslations, 'farewell', {});
		expect(result).toBe('farewell');
	});

	it('returns the key when locale is missing', () => {
		const result = translate('en', mockTranslations, 'greetings', {
			name: 'John',
		});
		expect(result).toBe('greetings');
	});
});
