<script lang="ts">
	import type { INavigation } from '$lib/interfaces/navigation.interface';

	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import { locale, t } from '$lib/i18n/i18n';

	import Icon from '../Icon/Icon.svelte';
	import translations from './translation';

	export let logo: string;
	export let navigation: INavigation[];

	const drawerStore = getDrawerStore();

	const handleLanguageChange = (): void => {
		locale.set($locale === 'en' ? 'es' : 'en');
		window.location.reload();
	};

	const handleClickOnItem = (item: INavigation): void => {
		drawerStore.close();
		item.onClick();
	};
</script>

<div class="flex flex-col h-full p-4 gap-8">
	<div class="flex">
		<img src={logo} alt="Logo" data-testid="logo-test-id" height="32px" />
	</div>

	<div class="flex flex-col w-full gap-4">
		{#each navigation as navigationItem, index}
			<button
				type="button"
				class="btn variant-ringed-secondary p-4"
				data-testid="button-test-{index}"
				on:click={() => handleClickOnItem(navigationItem)}
			>
				<div class="flex items-center gap-4 justify-between">
					<Icon
						name={navigationItem.icon}
						width="w-6"
						height="h-6"
						fill="fill-primary-400"
					/>
					<span class="text-left">{navigationItem.name}</span>
				</div>
			</button>
		{/each}
	</div>

	<button
		class="btn p-4 variant-ringed-primary uppercase justify-self-end"
		on:click={handleLanguageChange}
		>{$t(translations, 'language')} {$locale.toLowerCase()}</button
	>
</div>
