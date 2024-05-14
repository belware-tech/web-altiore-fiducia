import randomString from './randomString';

const componentId = (name?: string, length?: number): string => {
	if (!name || name.length < 1) {
		return randomString(length);
	}

	return `${name.toLowerCase().replace(' ', '-')}-${randomString(length)}`;
};

export default componentId;
