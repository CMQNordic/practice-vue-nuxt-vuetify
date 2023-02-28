<template>
	<section>
		<h3>Chapters & Lessons Parent</h3>
		<!-- only defined when route syntax matches exactly -->
		<div>cId = {{ $route.params.cId ?? 'undefined' }}</div>
		<div>lId = {{ $route.params.lId ?? 'undefined' }}</div>
		<!-- For:www.xxx.con/chapter-1-lesson-2 -->
		<!-- cId = 1 -->
		<!-- lId = 2 -->

		<p>Nested child loads in this frame:</p>
	</section>

	<NuxtPage />
</template>
