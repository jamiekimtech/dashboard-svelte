<script>
	import Icon from '@iconify/svelte';
	import { slide } from 'svelte/transition';

	import { hamburgerOpen, toggleMenu } from '../../menuStore';
	import { navItems } from '../../navItems';
	import NavItem from './NavItem.svelte';

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

<nav class:open={!$hamburgerOpen}>
	<ul>
		{#each navItems as { group, subGroups, items }, groupIndex}
			<li class="group-label" transition:slide|global>
				<button on:click={() => toggleGroup(groupIndex)}>
					<div class="group-container">
						<img src={'icon/' + group.svg} alt={group.label} />
						<div class="label-container">{group.label}</div>
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
						<li class="subgroup-label" transition:slide>
							<button class="subgroup-button" on:click={() => toggleSubgroup(subgroupIndex)}>
								<div class="subgroup-container">
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

<style>
	nav {
		position: absolute;
		top: 66px;
		left: 0;
		width: 130px;
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
		background-color: transparent;
		height: calc(100vh - 66px);
		padding: 0;
		display: flex;
		flex-direction: column;
		overflow-y: scroll;
		align-items: center;
	}
	li {
		width: 100%;
		border-bottom: 1px solid blue;
	}
	.group-label {
		font-size: 15px;
		display: flex;
	}
	.subgroup-label {
		margin: 30px 0 -15px 12px;
		font-size: 17px;
		font-weight: 400;
	}

	.subgroup-label span {
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
		margin: auto;
	}
	.group-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 21px 0 21.5px 0;
	}
	.subgroup-button {
		width: 72%;
		margin: 10px 30px 0 40px;
	}
	img {
		width: 35%;
		margin-bottom: 10px;
	}

	.subgroup-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		position: relative;
	}

	.label-container {
		width: 100px;
	}
	.arrow-container {
		width: 10%;
		text-align: right;
	}
</style>
