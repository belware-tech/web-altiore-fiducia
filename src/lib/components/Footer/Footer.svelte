<script lang="ts">
	import type { ISocialLink } from '$lib/interfaces/socialLink.interface';
	import Icon from '$lib/components/Icon/Icon.svelte';

	export let follow: string;
	export let disclaimer: string;
	export let developer: string;
	export let socialLinks: ISocialLink[];
</script>

<div
	class="flex flex-col bg-primary-900 items-center justify-center text-center w-full gap-2 p-4"
>
	<div class="flex gap-8 justify-center items-center">
		<span class="text-surface-100 font-light text-xl">{follow}</span>
		<span class="divider-vertical h-8" />
		{#each socialLinks as links}
			<a
				href={links.linkTo}
				target="_blank"
				class="flex justify-center items-center"
			>
				<Icon
					name={links.icon}
					width="w-8"
					height="h-8"
					fill="fill-secondary-300"
				/>
			</a>
		{/each}
	</div>

	<span class="text-surface-700"
		>{disclaimer} |
		<a href="https://www.belwaretech.com" target="_blank">{developer}</a></span
	>
</div>
