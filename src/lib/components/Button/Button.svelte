<script lang="ts">
	export let variant = 'variant-ghost-primary';
	export let fontSize = 'text-xl';
	export let onClick: () => void | undefined;

	const btnClass = `btn ${variant} ${fontSize}`;
</script>

<button class={btnClass} on:click={onClick}>
	<slot />
</button>
