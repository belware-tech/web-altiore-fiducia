<script lang="ts">
	import { t } from '$lib/i18n/i18n';

	import images from '$lib/assets/images';
	import objectives from '$lib/constants/objectives';
	import smoothScroll from '$lib/utils/smoothScroll';
	import socialLinks from '$lib/constants/socialLinks';
	import contacts from '$lib/constants/contacts';
	import locale from './translations';

	import Landing from '$lib/views/Landing/Landing.svelte';
	import AboutUs from '$lib/views/AboutUs/AboutUs.svelte';
	import Mission from '$lib/views/Mission/Mission.svelte';
	import Objectives from '$lib/views/Objectives/Objectives.svelte';
	import Footer from '$lib/components/Footer/Footer.svelte';
	import Contact from '$lib/views/Contact/Contact.svelte';

	import Button from '$lib/components/Button/Button.svelte';
</script>

<main>
	<section id="home">
		<Landing
			background={images.LANDING}
			title={$t(locale, 'landing.title')}
			subtitle={$t(locale, 'landing.subtitle')}
			paragraph={$t(locale, 'landing.paragraph')}
		>
			<Button
				onClick={() => smoothScroll('about-us')}
				variant="bg-primary-200 text-black"
				>{$t(locale, 'landing.btn.launch')}</Button
			>
			<Button
				onClick={() => smoothScroll('contact-us')}
				variant="variant-filled-secondary"
				>{$t(locale, 'landing.btn.explore')}</Button
			>
		</Landing>
	</section>
	<section id="about-us" class="flex flex-col bg-primary-500">
		<AboutUs />
	</section>
	<section id="mission-vision" class="flex flex-col bg-secondary-200">
		<Mission />
	</section>
	<section id="objectives" class="flex flex-col bg-white">
		<Objectives {objectives} />
	</section>
	<section id="contact-us" class="flex flex-col bg-primary-800">
		<Contact {contacts} />
	</section>

	<Footer
		{socialLinks}
		follow={$t(locale, 'footer.follow')}
		disclaimer={$t(locale, 'footer.disclaimer')}
		developer={$t(locale, 'footer.developer')}
	/>
</main>
