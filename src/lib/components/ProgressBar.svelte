<script>
	export let progress = 0;
	export let rightColor;
	export let leftColor;
</script>

<div id="progress-bar">
	<div
		style="width: {progress * 100}%; background: linear-gradient(90deg, {rightColor}, {leftColor});"
	/>
</div>

<style>
	#progress-bar {
		width: 100%;
		height: 8px;
		background-color: #f3f3f3;
		border-radius: 50px;
		overflow: hidden;
		position: relative;
	}

	#progress-bar div {
		height: 100%;
		width: 0%;
		position: absolute;
		left: 0;
		top: 0;
		transition: width 500ms ease-in;
		will-change: width;
	}
</style>
