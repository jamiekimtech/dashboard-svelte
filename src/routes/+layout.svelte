<script>
	import Header from '../lib/components/Header.svelte';
	import { platform } from '../lib/components/MediaQuery.svelte';
	import { hamburgerOpen } from '../menuStore';
</script>

<main>
	{#if $platform == 'mobile'}
		<header>
			<Header />
		</header>
		<div class="container">
			<slot />
		</div>
	{:else}
		<header>
			<Header />
		</header>
		<div class:open={!$hamburgerOpen} class="large-container">
			<slot />
		</div>
	{/if}
	<div class="footer"><p>Copyright © 2023 PIXINVENT</p></div>
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400&family=Quicksand:wght@300;400&display=swap');

	:global(*) {
		font-family: 'Quicksand', sans-serif;
		font-weight: 400;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:root {
		--primary: #5b5b5b;
	}

	.container {
		margin: 70px 0 0 0;
		position: relative;
		width: 100%;
	}
	.large-container {
		margin-top: 65px;
		width: 100%;
		transition: 0.3s;
		padding: 32px;
	}

	.large-container.open {
		width: calc(100% - 130px);
		transform: translateX(130px);
	}
	main {
		/* background-color: #f3f4f9; */
		background-color: #abb3de;
	}

	header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		background-color: white;
		color: var(--primary);
		z-index: 10;
		position: fixed;
		top: 0;
		height: 70px;
		filter: drop-shadow(0px 0px 9px rgba(0, 0, 0, 0.15));
		width: 100%;
	}

	.footer {
		height: 40px;
		background-color: white;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	p {
		width: 100%;
		text-align: center;
		margin: 0;
	}
</style>
