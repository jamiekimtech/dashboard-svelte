<script>
	import Icon from '@iconify/svelte';
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
				<li class="group-label">
					<button type="button" on:click={() => toggleGroup(groupIndex)}>
						<span>
							<img src={'icon/' + group.svg} alt={group.label} />
							{group.label}!!

							{#if activeGroupIndex === groupIndex}
								<Icon icon="ep:arrow-down" />
							{:else}
								<Icon icon="ep:arrow-right" />
							{/if}
						</span>
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
							<li class="group-label">
								<button type="button" on:click={() => toggleSubgroup(subgroupIndex)}>
									<span>
										<Icon icon={subGroup.icon} />
										{subGroup.label}! {#if activeSubgroupIndex === subgroupIndex}
											<Icon icon="ep:arrow-down" />
										{:else}
											<Icon icon="ep:arrow-right" />
										{/if}
									</span>
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
		font-size: 16px;
		letter-spacing: 0.2px;
		z-index: 5;
	}
	nav {
		display: flex;
		flex-direction: column;
		position: absolute;
		top: 70px;
		left: 0;
		width: 285px;
		height: 100vh;
		background: white;
		transform: translateX(-100%);
		transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
		opacity: 0;
		}
	nav.open {
		transform: translateX(0);
		opacity: 1;
		position: absolute;
		z-index: 1;
	}
	ul {
		list-style: none;
		margin: -8px 0 0 -7px;
		background-color: transparent;
		height: 100vh;
		overflow: auto;
	}
	.group-label {
		margin: 30px 0 -15px 12px;
		font-size: 17px;
		font-weight: 400;
	}
	li {
		margin: 27px 0;
	}
	button {
		cursor: pointer;
		display: flex;
		align-items: center;
		overflow: hidden;
		border: none;
		background-color: transparent;
	}

	svg {
		color: var(--primary);
	}
</style>
