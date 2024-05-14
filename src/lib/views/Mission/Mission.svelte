<script lang="ts">
	import { t } from '$lib/i18n/i18n';
	import translations from './translations';
	import images from '$lib/assets/images';
</script>

<div class="relative flex flex-col mx-8 lg:mx-32 my-32 gap-16">
	<div class="flex flex-col lg:flex-row gap-16 items-center h-auto lg:h-96">
		<div class="flex-1 flex flex-col gap-8 self-start z-10">
			<header>
				<h2 class="font-bold text-7xl text-primary-500">
					{$t(translations, 'mission.title')}
				</h2>
			</header>
			<article>
				<p class="leading-relaxed text-2xl text-surface-900">
					{$t(translations, 'mission.paragraph')}
				</p>
			</article>
		</div>

		<img
			src={images.BACK_IMAGES}
			alt="Back Logo"
			class="absolute inset-0 self-center justify-self-center lg:justify-self-end w-full lg:w-auto h-auto lg:h-full opacity-10 transform"
		/>

		<div class="flex-1 flex flex-col gap-8 self-end z-10">
			<header>
				<h2 class="font-bold text-7xl text-primary-500">
					{$t(translations, 'vision.title')}
				</h2>
			</header>
			<article>
				<p class="leading-relaxed text-2xl text-surface-900">
					{$t(translations, 'vision.paragraph')}
				</p>
			</article>
		</div>
	</div>
</div>
