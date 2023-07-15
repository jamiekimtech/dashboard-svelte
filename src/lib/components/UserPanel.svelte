<script>
	import { slide } from 'svelte/transition';
	import { platform } from './MediaQuery.svelte';
	import Icon from '@iconify/svelte';
	let drawerOpen = false;

	function toggleDrawer() {
		drawerOpen = !drawerOpen;
	}

	export let width = '38';

	let color = 'var(--primary)';
</script>

<header>
	{#if $platform == 'mobile'}
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
	{:else if $platform == 'tablet'}
		<div class="tablet-user-panel">
			<img src="./icon/flag-us.svg" alt="flag" />
			<Icon icon="mdi:bell-outline" width="1.4em" /><Icon
				icon="mdi:envelope-outline"
				width="1.4em"
			/>
			<Icon icon="radix-icons:avatar" width="2em" />
		</div>
	{:else}
		<h1>DESKTOP</h1>
	{/if}
</header>
{#if drawerOpen}
	<div class="openedDrawer" transition:slide|global>
		<Icon icon="lucide:search" width="1.4em" />
		<div class="rightDrawer">
			<img src="./icon/flag-us.svg" alt="flag" />
			<Icon icon="mdi:bell-outline" width="1.4em" /><Icon
				icon="mdi:envelope-outline"
				width="1.4em"
			/>
			<Icon icon="radix-icons:avatar" width="2em" />
		</div>
	</div>
{/if}

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
		align-items: center;
		position: absolute;
		top: 60px;
		left: 0;
		width: 100%;
		z-index: 10;
		padding: 20px;
		background-color: white;
		height: 75px;
	}
	img {
		width: 25px;
	}
	.rightDrawer {
		display: flex;
		gap: 20px;
		align-items: center;
	}
	header {
		position: relative;
	}
	.tablet-user-panel {
		position: absolute;
		right: 10px;
		top: -15px;
		width: 230px;
		display: flex;
		align-items: center;

		justify-content: space-around;
	}
</style>
