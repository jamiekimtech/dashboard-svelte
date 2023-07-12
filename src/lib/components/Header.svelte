<script>
	let drawerOpen = false;

	function toggleDrawer() {
		drawerOpen = !drawerOpen;
	}

	export let width = '38';

	let color = 'var(--primary)';
</script>

<header>
	<button on:click={toggleDrawer}>
		<svg
			viewBox="0 0 100 100"
			fill="none"
			stroke="currentColor"
			stroke-width="3.5"
			{width}
			{color}
			stroke-linecap="round"
		>
			<circle class="dot" cx="50" cy="33" r="2" />
			<circle class="dot" cx="50" cy="50" r="2" />
			<circle class="dot" cx="50" cy="67" r="2" />
		</svg>
	</button>
	{#if drawerOpen}
		<h1>Drawer is open</h1>
	{/if}
</header>

<style>
	button {
		cursor: pointer;
		display: flex;
		align-items: center;
		overflow: hidden;
		border: none;
		background-color: transparent;
	}
	header {
		position: sticky;
		z-index: 100;
	}
</style>
