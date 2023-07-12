<script>
	import Hamburger from '../lib/components/Hamburger.svelte';
	import NavBar from '../lib/components/NavBar.svelte';
	import HeaderDrawer from '../lib/components/HeaderDrawer.svelte';
	export let open = false;
	export let toggleMenu = () => {
		open = !open;
	};
	export let toggleDrawer = () => {
		open = !open;
	};
</script>

<main>
	<Hamburger {open} {toggleMenu} />
	<h3>Modern</h3>
	{#if open}
		<NavBar />
	{/if}
	<HeaderDrawer {open} {toggleDrawer} />
</main>

<style>
	main {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
</style>
