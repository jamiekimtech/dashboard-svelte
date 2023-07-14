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
		<Logo style="padding-right: 100px;" />
		<UserPanel />
	{:else}
		<h1>DESKTOP</h1>
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
</style>
