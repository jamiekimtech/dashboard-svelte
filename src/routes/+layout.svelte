<script>
	import Logo from '../lib/components/Logo.svelte';
	import NavBar from '../lib/components/NavBar.svelte';
	import Header from '../lib/components/Header.svelte';

	let hamburgerOpen = false;
	let drawerOpen = false;

	const toggleMenu = () => {
		hamburgerOpen = !hamburgerOpen;
	};

	const toggleDrawer = () => {
		drawerOpen = !drawerOpen;
	};
</script>

<main>
	<header>
		<NavBar />
		<Logo />
		<Header />
	</header>
	<div class="container">
		<slot />
	</div>
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
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		position: relative;
		z-index: 1;
	}

	main {
		background-color: #f3f4f9;
	}

	header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		background-color: white;
		color: var(--primary);
		padding: 5px 5px -1px 5px;
		z-index: 10;
		position: absolute;
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
