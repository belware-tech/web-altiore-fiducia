import type { INavigation } from '$lib/interfaces/navigation.interface';

import { locale as language, translate } from '$lib/i18n/i18n';
import { get } from 'svelte/store';

import smoothScroll from '$lib/utils/smoothScroll';
import locale from './translations';

const navigation: INavigation[] = [
	{
		name: translate(get(language), locale, 'navigation.home', {}),
		icon: 'home',
		onClick: () => smoothScroll('home'),
	},
	{
		name: translate(get(language), locale, 'navigation.about-us', {}),
		icon: 'about',
		onClick: () => smoothScroll('about-us'),
	},

	{
		name: translate(get(language), locale, 'navigation.mission-vision', {}),
		icon: 'about',
		onClick: () => smoothScroll('mission-vision'),
	},

	{
		name: translate(get(language), locale, 'navigation.our-objectives', {}),
		icon: 'mission',
		onClick: () => smoothScroll('objectives'),
	},
	{
		name: translate(get(language), locale, 'navigation.contact-us', {}),
		icon: 'contact',
		onClick: () => smoothScroll('contact-us'),
	},
];

export default navigation;
