<script lang="ts">
	import { isMobile } from '$lib/stores/mobile.store';

	export let background: string;
	export let title: string;
	export let subtitle: string;
	export let paragraph: string;

	$: polygonPoints = $isMobile ? '0,0 0,0 100,0 0,20' : '0,0 10,0 10,0 0,100';
</script>

<div
	class="relative bg-cover bg-center bg-no-repeat"
	style="background-image: url('{background}');"
>
	<div class="flex flex-wrap">
		<div
			class="w-full md:w-1/2 flex flex-col justify-center items-start space-y-8 bg-primary-500 bg-opacity-80 px-8 py-32 lg:p-32"
		>
			<div class="flex flex-col space-y-8 md:space-y-4">
				<h1 class="h1 text-white font-bold text-6xl uppercase">{title}</h1>
				<h1 class="h2 text-secondary-300 font-semibold text-4xl">
					{subtitle}
				</h1>
			</div>
			<p class="text-paragraph text-surface-100">{paragraph}</p>
			<div class="flex space-x-4 self-center md:self-end">
				<slot />
			</div>
		</div>

		{#if !$isMobile}
			<div
				class="w-full md:w-1/2 flex justify-center items-center fill-primary-500 opacity-80"
			>
				<svg
					class="inset-0 h-full w-full"
					viewBox="0 0 100 100"
					preserveAspectRatio="none"
				>
					<polygon points={polygonPoints} />
				</svg>
			</div>
		{/if}
	</div>
</div>
