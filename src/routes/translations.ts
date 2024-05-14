const locale: Record<string, Record<string, string>> = {
	es: {
		'landing.title': 'Respaldo seguro',
		'landing.subtitle': 'para tus sueños empresariales',
		'landing.paragraph':
			'Ayudamos a que los negocios e instituciones se mantengan operando y reconstruyan sus activos.',
		'landing.btn.launch': 'Acerca de nosotros',
		'landing.btn.explore': 'Contáctanos',

		'footer.follow': 'Siguenos en nuestras redes sociales',
		'footer.disclaimer':
			'Todos los derechos reservados a @Altiore Fiducia '.concat(
				new Date().getFullYear().toString(),
			),
		'footer.developer': 'Desarrollado por BelwareTech',
	},
	en: {
		'landing.title': 'Secure support',
		'landing.subtitle': 'for your business dreams',
		'landing.paragraph':
			'We help businesses and institutions keep operating and rebuild their assets.',
		'landing.btn.launch': 'About Us',
		'landing.btn.explore': 'Contact Us',

		'footer.follow': 'Follow us on our social media',
		'footer.disclaimer': 'All rights reserved to @Altiore Fiducia '.concat(
			new Date().getFullYear().toString(),
		),
		'footer.developer': 'Developed by BelwareTech',
	},
};

export default locale;
