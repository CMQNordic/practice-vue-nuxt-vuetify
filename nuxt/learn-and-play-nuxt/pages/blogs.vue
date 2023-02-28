<template>
	<!-- Always shown for blog and its children -->
	<header>
		<h1>All blogs</h1>
		<p>id = {{ $route.params.id ?? 'undefined' }}</p>
		<!-- for www.xxx.com/blogs => id = undefined -->
		<!-- for www.xxx.com/blog-123 => id = 123 -->
      
		<br />
		<p>This page contain nested frame to display nested content.</p>
		<div>Child loads HERE:</div>
	</header>

	<NuxtPage />  <!-- loads child -->
</template>
