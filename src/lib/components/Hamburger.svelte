<script>
	export let open = false;
	export let toggleMenu = () => {
		open = !open;
	};

	export let ariaLabel = 'toggle menu';
	export let width = '60';
</script>

<button on:click={toggleMenu} aria-expanded={open} aria-label={ariaLabel}>
	<svg
		class:open
		viewBox="0 0 100 100"
		fill="none"
		stroke="currentColor"
		stroke-width="5"
		{width}
		stroke-linecap="round"
	>
		<path class="line" d="M 30,37 h 42" />
		<path class="line" d="M 30,50 h 42" />
		<path class="line" d="M 30,63 h 42" />
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
