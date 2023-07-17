<script>
	import { browser } from '$app/environment';
	import { revenue } from '$lib/data/chartObj.json';
	import { onMount } from 'svelte';
	import { Chart, registerables } from 'chart.js';

	Chart.register(...registerables);

	let barChartElement;
	const chartData = {
		labels: revenue.map(({ framework }) => framework),
		datasets: [
			{
				data: revenue.map(({ score }) => score),
				borderColor: ['#ff4961'],
				borderWidth: 4
			}
		]
	};

	onMount(() => {
		if (browser) {
			new Chart(barChartElement, {
				type: 'line',
				data: chartData,
				options: {
					plugins: {
						legend: {
							display: false
						}
					},
					scales: {
						x: {
							grid: {
								color: 'hsl(43 100% 52% / 0%)'
							},
							ticks: { color: '#000' }
						},
						y: {
							beginAtZero: true,
							ticks: { color: '#000', font: { size: 13 }, stepSize: 5000, max: 20000 },

							grid: {
								color: 'hsl(0, 1%, 89%)'
							}
						}
					}
				}
			});
		}
	});
</script>

<main>
	<div class="card">
		<h5>Revenue</h5>
		<br />
		<div class="card-data">
			<div>
				<h6>Current Week</h6>
				<h2>$82,124</h2>
			</div>
			<div>
				<h6>Previous Week</h6>
				<h2>$52,502</h2>
			</div>
		</div>
		<canvas bind:this={barChartElement} />
	</div>
</main>

<style>
	main {
		color: var(--primary);
	}
	.card {
		padding: 20px;
	}
	canvas {
		background-color: #fff;
		padding: 10px;
	}

	.card-data {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 60%;
	}
</style>
