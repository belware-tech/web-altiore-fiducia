import { derived, writable } from 'svelte/store';

const createLocaleStore = () => {
	// First, try to get the value from localStorage
	const initialValue = localStorage.getItem('locale') || 'es';

	// Create a writable store with the initial value
	const { subscribe, set, update } = writable(initialValue);

	return {
		subscribe,
		set: (value: string) => {
			localStorage.setItem('locale', value); // Save new value to localStorage
			set(value); // Set the new value to the store
		},
		update,
	};
};

export const locale = createLocaleStore();

export const translate = (
	locale: string,
	translations: Record<string, Record<string, string>>,
	key: string,
	vars: Record<string, string>,
): string => {
	if (key.length < 1 || locale.length < 1) {
		return key;
	}

	let text = translations[locale][key];

	if (!text || text.length < 1) {
		return key;
	}

	Object.keys(vars).map((k) => {
		const regex = new RegExp(`{{${k}}}`, 'g');
		text = text.replace(regex, vars[k]);
	});

	return text;
};

export const t = derived(
	locale,
	($locale) =>
		(
			translations: Record<string, Record<string, string>>,
			key: string,
			vars = {},
		) =>
			translate($locale, translations, key, vars),
);
