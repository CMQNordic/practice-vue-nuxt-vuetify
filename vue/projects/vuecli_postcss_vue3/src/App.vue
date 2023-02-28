<template>
	<TheHeader />
	<a href="./html/index.html">index</a>
	<main class="app-main">
		<div id="hero">
			<div class="hero__content">
				<h1 class="hero__text">
					<span class="hero__title">Cabarete - Surf camps &amp; Yoga retreats</span>
					<span class="hero__subtitle"><b>Good Times</b> &amp; Amazing Experiences</span>
				</h1>
				<p><a class="hero_button" href="#">Read more!</a></p>
			</div>
			<img class="hero__image" src="./assets/images/hero/hero--large-hi-dpi.jpg" />
		</div>
	</main>
	<TheFooter />
</template>

<script>
	import TheHeader from './components/TheHeader';
	import TheFooter from './components/TheFooter';
	export default {
		components: {
			TheHeader,
			TheFooter,
		},
	};
</script>

