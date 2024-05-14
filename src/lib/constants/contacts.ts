import type { IContact } from '$lib/interfaces/contact.interface';

import { locale as language, translate } from '$lib/i18n/i18n';
import { get } from 'svelte/store';

import locale from './translations';

const contacts: IContact[] = [
	{
		type: 'phone',
		icon: 'phone',
		title: translate(get(language), locale, 'contact.phone.title', {}),
		description: translate(
			get(language),
			locale,
			'contact.phone.description',
			{},
		),
		value: '+593 99 123 4567',
	},
	{
		type: 'email',
		icon: 'email',
		title: translate(get(language), locale, 'contact.email.title', {}),
		description: translate(
			get(language),
			locale,
			'contact.email.description',
			{},
		),
		value: 'info@altiorefiducia.com',
	},
	{
		type: 'address',
		icon: 'address',
		title: translate(get(language), locale, 'contact.address.title', {}),
		description: translate(
			get(language),
			locale,
			'contact.address.description',
			{},
		),
		value: 'Av. La Calle Departamento 8, Ambato, Ecuador.',
	},
];

export default contacts;
