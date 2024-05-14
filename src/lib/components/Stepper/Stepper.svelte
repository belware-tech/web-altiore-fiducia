<script lang="ts">
	import type { IObjective } from '$lib/interfaces/objective.interface';

	import { t } from '$lib/i18n/i18n';
	import { Step, Stepper } from '@skeletonlabs/skeleton';

	import translations from './translations';

	export let items: IObjective[];
</script>

<Stepper
	stepTerm=""
	buttonBack="variant-ghost text-xl"
	buttonBackLabel={$t(translations, 'btn.back')}
	buttonNext="variant-filled text-xl"
	buttonNextLabel={$t(translations, 'btn.next')}
	buttonCompleteLabel=""
	buttonComplete="bg-transparent cursor-default"
>
	{#each items as item, index}
		<Step stepTerm={item.title}>
			<svelte:fragment slot="header">
				<header><h3 class="h3 text-4xl my=8">{item.title}</h3></header>
			</svelte:fragment>
			<div class="flex flex-col md:flex-row w-full justify-between mb-16 gap-8">
				<article>
					<ul class="list-disc px-8">
						{#each items[index].objectives as obj}
							<li class="text-2xl font-light leading-relaxed">{obj}</li>
						{/each}
					</ul>
				</article>
				<img src={item.imageSrc} alt={item.title} class="md:max-h-60" />
			</div>
		</Step>
	{/each}
</Stepper>
