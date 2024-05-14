<script lang="ts">
	import { t } from '$lib/i18n/i18n';
	import translations from './translations';
</script>

<div class="flex flex-col mx-8 lg:mx-32 my-32 gap-16">
	<div class="flex flex-col lg:flex-row gap-16 items-center">
		<div class="flex-1 flex flex-col gap-8">
			<header class="my-4">
				<h2 class="h2 font-medium text-6xl md:text-7xl text-surface-100">
					{$t(translations, 'title.one')} <br />
					<span class="uppercase font-bold text-secondary-500"
						>{$t(translations, 'title.two')}</span
					>
				</h2>
			</header>
			<article>
				<p class="leading-relaxed text-2xl text-surface-100">
					<span class="font-medium text-secondary-500"
						>{$t(translations, 'company.name')}</span
					>
					{$t(translations, 'paragraph.one')}
				</p>
			</article>
		</div>

		<hr
			class="hidden lg:block lg:my-0 my-8 border-0 lg:border-l lg:border-surface-100 border-t border-gray-300 w-full lg:w-px h-auto lg:h-64"
		/>

		<div class="flex-1">
			<article class="space-y-8">
				<p class="leading-relaxed text-2xl text-surface-100">
					<span class="font-medium text-secondary-500"
						>{$t(translations, 'company.name')}</span
					>
					{$t(translations, 'paragraph.two')}
				</p>
				<p class="leading-relaxed text-2xl text-surface-100">
					{$t(translations, 'paragraph.three.one')}
					<span class="font-medium text-secondary-500"
						>{$t(translations, 'paragraph.three.two')}</span
					>
					{$t(translations, 'paragraph.three.three')}
				</p>
			</article>
		</div>
	</div>
</div>
