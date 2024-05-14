<script lang="ts">
	import type { IObjective } from '$lib/interfaces/objective.interface';

	import { t } from '$lib/i18n/i18n';

	import Stepper from '$lib/components/Stepper/Stepper.svelte';
	import translations from './translations';

	export let objectives: IObjective[];
</script>

<div
	class="flex flex-col mx-8 lg:mx-32 my-32 gap-16 justify-center items-center"
>
	<header>
		<h2 class="h2 text-7xl font-semibold">
			{$t(translations, 'title.one')}
			<span class="font-bold">{$t(translations, 'title.two')}</span>
		</h2>
	</header>
	<Stepper items={objectives} />
</div>
