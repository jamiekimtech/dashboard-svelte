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
	<div class="openedDrawer">
		<div>O-</div>
		<div class='rightDrawer'><div>Flag</div>
		<div>Bell</div>
		<div>Message</div>
		<div>Avatar</div>
	</div></div>
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

	.openedDrawer {
		display: flex;
		justify-content: space-between;
		position: absolute;
		top: 70px;
		left: 0;
		width: 100%;
		z-index: 10;
		padding: 10px;
		background-color: white;
		height: 62px;
	}

.rightDrawer {
	display: flex;
	gap: 10px;
}
</style>
