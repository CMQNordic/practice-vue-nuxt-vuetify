<script setup>
	const drawer = ref(false);
	const brandingText = ref('Application branding text');
	const menuItems = [
		{ title: 'Home', route: '/', icon: 'mdi-home' },
		{ title: 'Contact', route: '/contact', icon: 'mdi-home' },
		{ title: 'Typography', route: '/typography', icon: 'mdi-home' },
		{ title: 'Layouts', route: '/layouts', icon: 'mdi-home' },
		{ title: 'Flex', route: '/flex', icon: 'mdi-home' },
	];

	function toggleDrawer() {
		drawer.value = !drawer.value;
	}
</script>

<template>
	<!-- Side navigation menu. Visibility controlled by hamburger icon. -->
	<v-navigation-drawer app temporary location="right" v-model="drawer" theme="light">
		<v-card flat>
			<div class="w-100 text-right">
				<v-btn flat icon="fas fa-times" size="x-large" @click.stop="toggleDrawer()" />
			</div>
			<template v-for="item in menuItems" key="item.title">
				<v-btn block variant="text" :to="item.route"> {{ item.title }} </v-btn>
			</template>
		</v-card>
	</v-navigation-drawer>

	<!-- Top level header bar with navigation links and actions -->
	<v-app-bar app density="default" elevation="0" class="bg-transparent">
		<!-- Icon and Branding. Resizing with screen. -->
		<v-container>
			<v-toolbar-title> {{ brandingText }} </v-toolbar-title>
		</v-container>

		<!-- Navigation menu for big screen. display:none by default and display:flex from "md screens" and up -->
		<v-toolbar-items class="d-none d-md-flex">
			<template v-for="item in menuItems" key="item.title">
				<v-btn :to="item.route"> {{ item.title }} </v-btn>
			</template>
		</v-toolbar-items>

		<!-- Dots icon controlling extra drawer.  -->
		<!-- Hamburger icon controlling menu drawer. For small screens only. display:none for "md screens" and up -->
		<v-app-bar-nav-icon class="d-md-none" @click.stop="toggleDrawer()" />
	</v-app-bar>
</template>

