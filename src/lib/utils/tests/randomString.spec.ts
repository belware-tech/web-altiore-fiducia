import { describe, it, expect } from 'vitest';

import randomString from '../randomString';

describe('Test generateRandomString util', () => {
	it('Return by default a 5 chars string', () => {
		const result = randomString();

		expect(result).toHaveLength(5);
	});

	it('Return 10 chars string when param is 10', () => {
		const result = randomString(10);

		expect(result).toHaveLength(10);
	});
});
