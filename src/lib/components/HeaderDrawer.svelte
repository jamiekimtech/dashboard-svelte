<script>
	export let open = false;
	export let toggleDrawer = () => {
		open = !open;
	};

	export let ariaLabel = 'toggle drawer';
	export let width = '60';
</script>

<button on:click={toggleDrawer} aria-expanded={open} aria-label={ariaLabel}>
	<svg
		class:open
		viewBox="0 0 100 100"
		fill="none"
		stroke="currentColor"
		stroke-width="5"
		{width}
		stroke-linecap="round"
	>
		<circle class="dot" cx="50" cy="33" r="4" />
		<circle class="dot" cx="50" cy="50" r="4" />
		<circle class="dot" cx="50" cy="67" r="4" />
	</svg>
</button>

<style>
	button {
		cursor: pointer;
		display: flex;
		align-items: center;
		overflow: hidden;
		border: none;
		background-color: transparent;
	}
</style>
