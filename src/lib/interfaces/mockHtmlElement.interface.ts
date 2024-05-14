import type { Mock } from 'vitest';

export interface IMockHTMLElement extends HTMLElement {
	scrollIntoView: Mock;
}
