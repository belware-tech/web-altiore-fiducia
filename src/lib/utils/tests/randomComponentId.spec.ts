import { describe, it, expect } from 'vitest';

import randomComponentId from '../randomComponentId';

describe('Test generateComponentId util', () => {
	it('Return default value when no params are passed', () => {
		const result = randomComponentId();

		expect(result).toHaveLength(5);
	});

	it('Return default value when number is passed', () => {
		const result = randomComponentId(undefined, 10);

		expect(result).toHaveLength(10);
	});

	it('Return value when name is passed but no number', () => {
		const result = randomComponentId('test');

		expect(result).toHaveLength(10);
	});

	it('Return value when name and number are passed', () => {
		const result = randomComponentId('test', 10);

		expect(result).toHaveLength(15);
	});
});
