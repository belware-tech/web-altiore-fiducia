export type ContactType = 'phone' | 'address' | 'email';

export interface IContact {
	type: ContactType;
	icon: string;
	title: string;
	description: string;
	value: string;
}
