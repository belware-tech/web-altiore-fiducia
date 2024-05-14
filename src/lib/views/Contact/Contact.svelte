<script lang="ts">
	import type {
		ContactType,
		IContact,
	} from '$lib/interfaces/contact.interface';

	import Icon from '$lib/components/Icon/Icon.svelte';
	import { t } from '$lib/i18n/i18n';
	import translations from './translations';

	const getLinkToContact = (value: string, type: ContactType): string => {
		switch (type) {
			case 'phone':
				return 'tel:'.concat(value);
			case 'email':
				return 'mailto:'.concat(value);
			default:
				return 'https://www.google.com/maps';
		}
	};

	export let contacts: IContact[];
</script>

<div class="flex flex-col mx-8 lg:mx-32 my-32 gap-16 text-center">
	<header>
		<h2 class="h2 text-5xl md:text-7xl font-bold text-primary-200">
			{$t(translations, 'title')}
		</h2>
	</header>

	<div class="flex flex-col lg:flex-row gap-16 items-center justify-center">
		{#each contacts as contact}
			<div
				class="card card-hover variant-ghost-surface flex flex-col justify-center items-center p-8 text-center border gap-4 w-full h-full"
			>
				<Icon
					name={contact.icon}
					width="w-32"
					height="h-32"
					fill="fill-secondary-300"
				/>
				<header>
					<h4 class="h4 font-bold text-2xl text-primary-200">
						{contact.title}
					</h4>
				</header>
				<article><p class="text-primary-300">{contact.description}</p></article>
				<a
					class="text-wrap break-all font-semibold text-secondary-200"
					href={getLinkToContact(contact.value, contact.type)}
					target="_blank"
				>
					{contact.value}
				</a>
			</div>
		{/each}
	</div>
</div>
