<template>
	<footer class="l-footer" role="contentinfo">
		<div class="c-container">
			<p class="l-footer-credit"><small lang="en">© Produced by SORA NISHIMOTO</small></p>
		</div>
	</footer>
</template>
<style lang="scss" scoped>
	.l-footer {
		padding: 30px 0;
		text-align: center;
		color: #fff;
		background: #191919;
		 @include mq('max') {
			padding: 15px 0;
		}
	}
	.l-footer-credit {
		display: block;
		font-size: 1rem;
		font-weight: 800;
		font-family: Spectral;
	}
</style>