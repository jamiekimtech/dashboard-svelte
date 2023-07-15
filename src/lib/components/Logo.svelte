<script>
	import { platform } from './MediaQuery.svelte';
</script>

<main>
	{#if $platform == 'mobile'}
		<a href="/"
			><div class="logo">
				<img alt="modern admin logo" src="img/logo.png" />
				<h4>Modern</h4>
			</div></a
		>
	{:else}
		<a href="/"
			><div class="logo">
				<img class="tablet-desktop-logo" alt="modern admin logo" src="img/logo.png" />
				<h4>Modern</h4>
			</div></a
		>
	{/if}
</main>

<style>
	main {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		background-color: white;
		color: var(--primary);
		padding: 5px 5px -1px 5px;
	}
	.logo {
		display: flex;
		align-items: center;
		justify-content: center;
		letter-spacing: 0.5px;
	}
	a {
		text-decoration: none;
		color: inherit;
	}
	h4 {
		margin: 0;
		font-weight: 600;
	}
	img {
		width: 35px;
		margin-right: 8px;
	}

	.tablet-desktop-logo {
		margin-left: -120%;
	}
</style>
