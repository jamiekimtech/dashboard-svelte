<script>
	import { browser } from '$app/environment';
	import { revenue } from '$lib/data/chartObj.json';
	import { onMount } from 'svelte';
	import { Chart, registerables } from 'chart.js';
	import Icon from '@iconify/svelte';

	Chart.register(...registerables);

	let lineChartElement;
	let pieChartElement1;
	let pieChartElement2;

	const chartData1 = {
		labels: revenue.map(({ day }) => day),
		datasets: [
			{
				data: revenue.map(({ score }) => score),
				borderColor: ['#ff4961'],
				borderWidth: 4
			}
		]
	};
	const chartData2 = {
		datasets: [
			{
				data: [18, 82],
				backgroundColor: ['#28d094', '#ff4961'],
				borderColor: ['#ffffff'],
				borderWidth: 1
			}
		]
	};
	const chartData3 = {
		datasets: [
			{
				data: [24, 76],
				backgroundColor: ['#ff7b8c', '#ffffff'],
				borderColor: ['transparent']
			}
		]
	};

	onMount(() => {
		if (browser) {
			new Chart(lineChartElement, {
				type: 'line',
				data: chartData1,
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
							}
						},
						y: {
							beginAtZero: true
						}
					}
				}
			});

			new Chart(pieChartElement1, {
				type: 'doughnut',
				data: chartData2,
				options: {
					borderRadius: '10',
					responsive: true,
					cutout: '93%',
					spacing: 3
				}
			});

			new Chart(pieChartElement2, {
				type: 'doughnut',
				data: chartData3,
				options: {
					borderRadius: '10',
					responsive: true,
					cutout: '93%',
					spacing: 3
				}
			});
		}
	});
</script>

<main>
	<div class="card">
		<h6>Revenue</h6>
		<div class="card-data">
			<div>
				<h7>Current Week</h7>
				<h2 class="red">$82,124</h2>
			</div>
			<div>
				<h7>Previous Week</h7>
				<h2>$52,502</h2>
			</div>
		</div>
		<canvas bind:this={lineChartElement} />
	</div>
	<div class="card">
		<h6>
			Hit Rate <span class="red">-12%</span>
		</h6>
		<h1 class="red">82%</h1>
		<canvas bind:this={pieChartElement1} />
	</div>
	<div class="card red-bg">
		<h6>Deals -55%</h6>
		<h1 class="red-bg">76%</h1>
		<canvas bind:this={pieChartElement2} />
	</div>
	<div class="card">
		<div class="flex">
			<div>
				<h7>Order Value</h7>
				<h3>$ 88,568</h3>
			</div>
			<Icon icon="simple-line-icons:trophy" width="45px" color="#28d094" />
		</div>
	</div>
	<div class="card">
		<div class="flex">
			<div>
				<h7>Calls</h7>
				<h3>3,568</h3>
			</div>
			<Icon icon="basil:phone-in-outline" width="50px" color="red" />
		</div>
	</div>
</main>

<style>
	main {
		color: var(--primary);
		padding: 22px;
	}
	.card {
		padding: 20px;
		margin: 15px 0 30px 0;
		box-shadow: 0px 14px 39px -17px rgba(0, 0, 0, 0.15);
	}

	.card h6 {
		font-weight: 800;
		letter-spacing: 0.5px;
	}

	.card h1 {
		font-weight: 900;
		font-size: 35px;
		letter-spacing: 1px;
		position: absolute;
		top: 50%;
		left: 45%;
	}
	canvas {
		padding: 10px;
	}

	.card-data {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 95%;
		margin-top: 10px;
	}

	.red {
		color: #ff4961;
	}

	.green {
		color: #28d094;
	}

	.red-bg {
		color: white;
		background-color: #ff4961;
	}

	.flex {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
