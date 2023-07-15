<!-- Copied from REPL(https://svelte.dev/repl/cbe4c4f262d44b31b39688eb9561c4c4?version=3.35.0) -->
<script lang="ts" context="module">
	import { readable, derived } from 'svelte/store';

	export const breakpoint = readable('l', (set) => {
		if (typeof window !== 'undefined') {
			const breakpoints = [
				{ value: 'mobile', mediaquery: window.matchMedia('(max-width:  767px)') },
				{
					value: 'tablet',
					mediaquery: window.matchMedia('(min-width:  768px) and (max-width:  991px)')
				},
				{ value: 'desktop', mediaquery: window.matchMedia('(min-width:  992px)') }
			];

			for (let key in breakpoints) {
				let breakpoint = breakpoints[key];

				//set the current breakpoint
				if (breakpoint.mediaquery.matches === true) {
					set(breakpoint.value);
				}
				breakpoint.mediaquery.addEventListener('change', (event) => {
					if (event.matches === true) {
						set(breakpoint.value);
					}
				});
			}
		}
	});

	export const platform = derived(breakpoint, ($breakpoint) => {
		if ($breakpoint == 'mobile') {
			return 'mobile';
		} else if ($breakpoint == 'tablet') {
			return 'tablet';
		} else {
			return 'desktop';
		}
	});
</script>
