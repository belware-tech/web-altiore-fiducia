<script lang="ts">
	import { ProgressRadial } from '@skeletonlabs/skeleton';
	import { t } from '$lib/i18n/i18n';

	import translations from './translate';
</script>

<div class="flex flex-col h-screen w-screen justify-center items-center gap-8">
	<ProgressRadial
		stroke={30}
		meter="stroke-primary-500"
		track="stroke-primary-500/30"
		strokeLinecap="butt"
		value={undefined}
	/>
	<h3 class="h3 gradient-heading-primary">{$t(translations, 'loading')}</h3>
</div>
