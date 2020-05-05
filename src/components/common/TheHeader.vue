<template>
	<header class="l-header" role="banner">
		<div class="c-container">
			<div class="l-header-container">
				<h1>
					<a href="/">SORA.LOG</a>
				</h1>
			</div>
		</div>
	</header>
</template>

<style lang="scss" scoped>
	.l-header {
		position: relative;
		top: 0;
		left: 0;
		z-index: 9999;
		width: 100%;
		padding: 30px 0;
		h1 {
			font-size: 2.6rem;
			font-weight: 800;
			font-family: Spectral;
			@include mq('max') {
				font-size: 2rem;
			}
		}
	}

	.l-header-container {
		display: flex;
		align-items: center;
		justify-content: center;
	}

</style>