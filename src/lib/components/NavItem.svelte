<script>
	import { slide } from 'svelte/transition';
	import Icon from '@iconify/svelte';
	import { toggleMenu } from '../../menuStore';
	export let href = '';
	export let icon = '';
	export let label = '';
</script>

<li class="nav-item">
	<a {href} on:click={toggleMenu}
		><Icon {icon} height="1.5em" /><span class="nav-label">{label}</span></a
	>
</li>

<style>
	li {
		margin: 40px 0 0 40px;
	}
	li a {
		text-decoration: none;
		color: var(--primary);
		margin: 10px;
	}

	.nav-label {
		margin: 10px;
	}
</style>
