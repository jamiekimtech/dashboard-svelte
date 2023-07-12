<script>
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
		margin: 27px 0;
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
