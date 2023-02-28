<template>
	<v-container>
		<v-row>
			<v-col >
				<br>
				<p>Normal</p>
				<div class="box">
					<div v-for="i in 3" :key="i" class="ma-1 bg-blue" style="height: 50px;">{{ '<div>' }}</div>
				</div>
			</v-col>
			
			<v-col class='text-truncate'>
				CSS style: <div>display:flex; justify-content: space-between;</div>
				<div class="box" style='display:flex; justify-content: space-between;' >
					<div v-for="i in 3" :key="i" class="ma-1 bg-blue" style="height: 50px">{{ '<div>' }}</div>
				</div>
			</v-col>
			
			<v-col class='text-truncate'>
				Vuetify class: <p>d-flex justify-space-between</p>
				<div class="box d-flex justify-space-between">
					<div v-for="i in 3" :key="i" class="ma-1 bg-blue" style="height: 50px">{{ '<div>' }}</div>
				</div>
			</v-col>
		</v-row>
		
		<v-row>
			<v-col >
				<p>Normal</p>
				<div class="box">
					<div v-for="i in 3" :key="i" class="ma-1 bg-blue" style="height: 50px;">{{ '<div>' }}</div>
				</div>
			</v-col>
			
			<v-col class='text-truncate'>
				<p>CSS style: <p>display:flex; <br> justify-content: space-between;</p></p>
				<div class="box" style='display:flex; justify-content: space-between; align-items: center;' >
					<div v-for="i in 3" :key="i" class="ma-1 bg-blue" style="height: 50px">{{ '<div>' }}</div>
				</div>
			</v-col>
			
			<v-col class='text-truncate'>
				<p>CVuetify class: <p>box d-flex <br> justify-space-between</p></p>
				<div class="box d-flex justify-space-between">
					<div v-for="i in 3" :key="i" class="ma-1 bg-blue" style="height: 50px">{{ '<div>' }}</div>
				</div>
			</v-col>
		</v-row>
	</v-container>
</template>

<style scoped>
	.box {
		border:1px dotted lightgray;
		height: 200px;
	}
</style>
