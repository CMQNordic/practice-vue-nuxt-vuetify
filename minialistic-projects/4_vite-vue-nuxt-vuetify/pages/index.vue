<template>
	<div>
		<h1>This is an home page</h1>
		<v-app>
			<v-container class='bg-green'>
				<v-card class="text-center py-5 bg-red">
					<div><b>This is a bold text.</b></div>
					<v-btn to="/about">press</v-btn>
				</v-card>
			</v-container>
		</v-app>
	</div>
</template>

<style  scoped>
	.c {
		color: #ff0000;
	}
</style>
