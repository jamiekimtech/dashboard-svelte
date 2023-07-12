<script>
	import Header from './Header.svelte';
	import NavBar from '../lib/components/NavBar.svelte';
</script>

<Header />
<slot />

<style>
	@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i%7CQuicksand:300,400,500,700');

	:global(*) {
		font-family: 'Open Sans';
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		text-decoration: none;
		--primary: #7c8697;
		color: var(--primary);
	}
</style>
