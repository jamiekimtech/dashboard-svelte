<script>
	import Icon from '@iconify/svelte';
	import { slide } from 'svelte/transition';
	import { hamburgerOpen, toggleMenu } from '../../menuStore';
	import { navItems } from '../../navItems';
	import NavItem from './NavItem.svelte';

	export let width = '54';
	let color = 'var(--primary)';

	let activeGroupIndex = null;
	let activeSubgroupIndex = null;

	function toggleGroup(groupIndex) {
		if (activeGroupIndex === groupIndex) {
			activeGroupIndex = null;
		} else {
			activeGroupIndex = groupIndex;
			activeSubgroupIndex = null;
		}
	}

	function toggleSubgroup(subgroupIndex) {
		if (activeSubgroupIndex === subgroupIndex) {
			activeSubgroupIndex = null;
		} else {
			activeSubgroupIndex = subgroupIndex;
		}
	}
</script>

<div class="navbar">
	<button on:click={toggleMenu}>
		<svg
			viewBox="0 0 100 100"
			fill="none"
			stroke="currentColor"
			stroke-width="4.2"
			{width}
			{color}
			stroke-linecap="round"
		>
			<path class="line" d="M 30,37 h 42" />
			<path class="line" d="M 30,50 h 42" />
			<path class="line" d="M 30,63 h 42" />
		</svg>
	</button>

	<nav class:open={$hamburgerOpen}>
		<ul>
			{#each navItems as { group, subGroups, items }, groupIndex}
				<li class="group-label" transition:slide|global>
					<button on:click={() => toggleGroup(groupIndex)}>
						<div class="menu-container">
							<img src={'icon/' + group.svg} alt={group.label} />
							<span class="label-container">{group.label}</span>
							<span class="arrow-container">
								{#if activeGroupIndex === groupIndex}
									<Icon icon="ep:arrow-down" />
								{:else}
									<Icon icon="ep:arrow-right" />
								{/if}
							</span>
						</div>
					</button>
				</li>

				{#if items && activeGroupIndex === groupIndex}
					{#each items as item (item.label)}
						<NavItem href={item.href} icon={item.icon} label={item.label} on:click={toggleMenu} />
					{/each}
				{/if}

				{#if subGroups}
					{#each subGroups as subGroup, subgroupIndex}
						{#if activeGroupIndex === groupIndex}
							<li class="group-label" transition:slide>
								<button class="subgroup-button" on:click={() => toggleSubgroup(subgroupIndex)}>
									<div class="menu-container">
										<Icon icon={subGroup.icon} style="margin-right: 5px; width: 30px;" />
										<span class="label-container">{subGroup.label}</span>
										<span class="arrow-container">
											{#if activeSubgroupIndex === subgroupIndex}
												<Icon icon="ep:arrow-down" />
											{:else}
												<Icon icon="ep:arrow-right" />
											{/if}</span
										>
									</div>
								</button>
							</li>
							{#if activeSubgroupIndex === subgroupIndex}
								{#each subGroup.items as item}
									<NavItem
										href={item.href}
										icon={item.icon}
										label={item.label}
										on:click={toggleMenu}
									/>
								{/each}
							{/if}
						{/if}
					{/each}
				{/if}
			{/each}
		</ul>
	</nav>
</div>

<style>
	.navbar {
		font-weight: 100;
		font-size: 15px;
		letter-spacing: 0.2px;
		z-index: 5;
	}
	nav {
		display: flex;
		flex-direction: column;
		position: absolute;
		top: 67px;
		left: 0;
		width: 285px;
		height: 100vh;
		background: white;
		transform: translateX(-100%);
		transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
		opacity: 0;
		margin-left: -10px;
	}
	nav.open {
		transform: translateX(0);
		opacity: 1;
		position: absolute;
		z-index: 1;
	}
	ul {
		list-style: none;
		margin: -8px 0 0 -9px;
		background-color: transparent;
		height: 100vh;
		overflow: auto;
	}
	.group-label {
		margin: 30px 0 -15px 12px;
		font-size: 17px;
		font-weight: 400;
	}

	.group-label span {
		font-size: 16px;
		letter-spacing: 0.5px;
	}
	button {
		cursor: pointer;
		display: flex;
		align-items: center;
		overflow: hidden;
		border: none;
		background-color: transparent;
		width: 88%;
	}

	.subgroup-button {
		width: 72%;
		margin: 10px 30px 0 40px;
	}
	img {
		width: 14%;
		margin-right: 15px;
	}
	svg {
		color: var(--primary);
	}

	.menu-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		position: relative;
	}

	.menu-container img {
		width: 11%;
	}
	.label-container {
		width: 150px;
		text-align: left;
	}
	.arrow-container {
		width: 10%; /* adjust as needed */
		text-align: right;
	}
</style>
