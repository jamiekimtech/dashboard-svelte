<script>
	import NavItem from './NavItem.svelte';
	import { hamburgerOpen, toggleMenu } from '../../menuStore';

	export let width = '54';

	let color = 'var(--primary)';

	const navItems = [
		{
			items: [
				{
					href: '/',
					icon: 'la-home',
					label: 'Dashboard'
				},
				{
					href: '/templates',
					icon: 'ph:monitor',
					label: 'Templates'
				}
			]
		},
		{
			group: 'ADMIN PANELS',
			items: [
				{
					href: '/ecommerce',
					icon: 'la:shopping-cart',
					label: 'eCommerce'
				},
				{
					href: '/travel-booking',
					icon: 'la-plane',
					label: 'Travel & Booking'
				},
				{
					href: '/hospital',
					icon: 'la-stethoscope',
					label: 'Hospital'
				},
				{
					href: '/crypto',
					icon: 'la-bitcoin',
					label: 'Crypto'
				},
				{
					href: '/support-ticket',
					icon: 'la-tag',
					label: 'Support Ticket'
				},
				{
					href: '/bank',
					icon: 'ph:bank',
					label: 'Bank'
				}
			]
		},
		{
			group: 'APPS',
			items: [
				{
					href: '/todo',
					icon: 'la-check-square',
					label: 'ToDo'
				},
				{
					href: '/contacts',
					icon: 'la-users',
					label: 'Contacts'
				},
				{
					href: '/email',
					icon: 'la-envelope',
					label: 'Email'
				},
				{
					href: '/chat',
					icon: 'la-comments',
					label: 'Chat'
				},
				{
					href: '/kanban',
					icon: 'carbon:document',
					label: 'Kanban'
				},
				{
					href: '/project',
					icon: 'la-briefcase',
					label: 'Project'
				},
				{
					href: '/calendars',
					icon: 'la-calendar',
					label: 'Calendars'
				}
			]
		},
		{
			group: 'PAGES',
			items: [
				{
					href: '/news-feed',
					icon: 'icons8:news',
					label: 'News Feed'
				},
				{
					href: '/social-feed',
					icon: 'icons8:share',
					label: 'Social Feed'
				},
				{
					href: '/invoice',
					icon: 'la-clipboard',
					label: 'Invoice'
				},
				{
					href: '/timelines',
					icon: 'la-film',
					label: 'Timelines'
				},
				{
					href: '/account-setting',
					icon: 'la-user-plus',
					label: 'Account Setting'
				},
				{
					href: '/users',
					icon: 'la-user',
					label: 'Users'
				},
				{
					href: '/gallery',
					icon: 'la-image',
					label: 'Gallery'
				},
				{
					href: '/search',
					icon: 'la-search',
					label: 'Search'
				},
				{
					href: '/authentication',
					icon: 'la-unlock',
					label: 'Authentication'
				},
				{
					href: '/error',
					icon: 'ph:warning',
					label: 'Error'
				},
				{
					href: '/others',
					icon: 'ph:file-text-duotone',
					label: 'Others'
				},
				{
					href: '/pricing',
					icon: 'ph:money-light',
					label: 'Pricing'
				},
				{
					href: '/checkout',
					icon: 'la-credit-card',
					label: 'Checkout'
				},
				{
					href: '/faq',
					icon: 'la-question',
					label: 'FAQ'
				},
				{
					href: '/knowledge-base',
					icon: 'la-database',
					label: 'Knowledge Base'
				}
			]
		}
	];
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

	<nav class={$hamburgerOpen ? 'open' : ''}>
		<ul>
			{#each navItems as { group, items } (group)}
				{#if group}
					<li class="group-label">
						<span>{group}</span>
					</li>
				{/if}
				{#each items as item (item.href)}
					<NavItem href={item.href} icon={item.icon} label={item.label} on:click={toggleMenu} />
				{/each}
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
		font-size: 14px;
		font-weight: 400;
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
