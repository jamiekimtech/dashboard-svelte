<script>
	import Logo from './Logo.svelte';
	import NavBar from './NavBar.svelte';
	import UserPanel from './UserPanel.svelte';
	import Icon from '@iconify/svelte';
	import { platform } from './MediaQuery.svelte';
</script>

<main>
	{#if $platform == 'mobile'}
		<NavBar />
		<Logo />
		<UserPanel />
	{:else if $platform == 'tablet'}
		<span><NavBar /><Icon icon="lucide:search" width="1.4em" /></span>
		<Logo />
		<UserPanel />
	{:else}
		<span class="desktop-user-panel"
			><NavBar /><Icon icon="lucide:maximize" width="1.4em" /><span>Mega</span><Icon
				icon="lucide:search"
				width="1.4em"
			/></span
		>
		<Logo />

		<UserPanel />
	{/if}
</main>

<style>
	main {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		padding: 10px;
	}
	span {
		display: flex;
		align-items: center;
	}
	.desktop-user-panel {
		gap: 10px;
	}
</style>
