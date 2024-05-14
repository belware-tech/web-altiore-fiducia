import type { IObjective } from '$lib/interfaces/objective.interface';

import { locale as language, translate } from '$lib/i18n/i18n';
import { get } from 'svelte/store';

import locale from './translations';
import images from '$lib/assets/images';

const objectives: IObjective[] = [
	{
		index: 1,
		title: translate(get(language), locale, 'objectives.short.title', {}),
		objectives: [
			translate(get(language), locale, 'objectives.short.obj.one', {}),
			translate(get(language), locale, 'objectives.short.obj.two', {}),
			translate(get(language), locale, 'objectives.short.obj.three', {}),
			translate(get(language), locale, 'objectives.short.obj.four', {}),
		],
		imageSrc: images.SHORT_TERM,
	},
	{
		index: 2,
		title: translate(get(language), locale, 'objectives.medium.title', {}),
		objectives: [
			translate(get(language), locale, 'objectives.medium.obj.one', {}),
			translate(get(language), locale, 'objectives.medium.obj.two', {}),
			translate(get(language), locale, 'objectives.medium.obj.three', {}),
			translate(get(language), locale, 'objectives.medium.obj.four', {}),
		],
		imageSrc: images.MEDIUM_TERM,
	},
	{
		index: 3,
		title: translate(get(language), locale, 'objectives.long.title', {}),
		objectives: [
			translate(get(language), locale, 'objectives.long.obj.one', {}),
			translate(get(language), locale, 'objectives.long.obj.two', {}),
			translate(get(language), locale, 'objectives.long.obj.three', {}),
			translate(get(language), locale, 'objectives.long.obj.four', {}),
		],
		imageSrc: images.LONG_TERM,
	},
];

export default objectives;
