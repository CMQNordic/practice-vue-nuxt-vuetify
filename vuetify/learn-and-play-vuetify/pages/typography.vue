<script setup>
import { mdiHome, mdiFacebook, mdiInstagram, mdiAlertOutline, mdiEmail } from '@mdi/js';
const viewMode = ref();
</script>

<template>
	<p>TEXTS & FONTS</p>
	<v-container>
		<v-row class="flex-nowrap">
			<v-col cols="4">
				<a href="https://next.vuetifyjs.com/en/styles/text-and-typography/" target="_blank">.text-{sm|md|lg|xl}-{value}</a>
				<br />
				<h1 class="text-h3">.text-h3</h1>
				<h1 class="text-h6">.text-h6</h1>
				<h1 class="text-subtitle-1">.text-subtitle-1</h1>
				<h1 class="text-subtitle-2">.text-subtitle-2</h1>
				<h1 class="text-body-1">.text-body-1</h1>
				<h1 class="text-body-2">.text-body-2</h1>
				<p class="text-caption">.caption</p>
				<p class="text-button">.text-button</p>
				<p class="text-overline">.text-overline</p>
				<span></span>
			</v-col>
			<v-col :cols="4">
				<p class="font-weight-black">.font-weight-black</p>
				<p class="font-weight-bold">.font-weight-bold</p>
				<p class="font-weight-regular">.font-weight-regular</p>
				<p class="font-weight-light">.font-weight-light</p>
				<p class="font-weight-thin">.font-weight-thin</p>
				<br />
				<p class="text-decoration-none">.text-decoration-none</p>
				<p class="text-decoration-overline">.text-decoration-overline</p>
				<p class="text-decoration-line-through">.text-decoration-line-through</p>
				<br />
				<p class="text-capitalize">.text-capitalize</p>
				<p class="text-uppercase">.text-uppercase</p>
				<p class="text-lowercase">.text-lowercase</p>
			</v-col>

			<v-col :cols="4" class="border">
				<p class="text-disabled">.text-disabled</p>
				<br />
				<div class="text-right"><span>.text-right on parent</span></div>
				<div class="text-center"><span>.text-center on parent</span></div>

				<br />
				<p class="text-truncate">
					.text-truncate - Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nostrum laborum perspiciatis
				</p>

				<br />
				<p>text opacity (emphasis) - <a href="https://next.vuetifyjs.com/en/styles/text-and-typography/#opacity">here</a></p>

				<br />
				<div>
					<span class="text-justify">
						.text-justify - Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nostrum laborum perspiciatis quidem. Modi
						iusto eligendi voluptatem? Delectus temporibus blanditiis obcaecati impedit corrupti? Quas molestias ex debitis unde,
						harum voluptates!
					</span>
				</div>
			</v-col>
		</v-row>
	</v-container>

	<div class="d-flex">
		<span class="text-h5 text">Icons</span>
		<span class="text-caption flex-grow-1 flex-sm-grow-0 text-center bg-grey-lighten-5">
			See all free fontawesome icons
			<nuxt-link to="https://fontawesome.com/search?o=r&m=free&s=regular%2Csolid" target="_blank">here</nuxt-link>
		</span>
	</div>

	<v-container>
		<v-row no-gutters>
			<v-col class="bg-green">
				<v-layout>
					<v-app-bar>
						<v-spacer></v-spacer>
						<span>Default icon used by {{'<v-app-bar-nav-icon />'}} </span>
						<v-app-bar-nav-icon />
					</v-app-bar>
					<v-main> </v-main>
				</v-layout>
			</v-col>
		</v-row>

		<!-- ICONS -->
		<v-row no-gutters>
			<!-- ALIASES-->
			<v-col cols="2" class="bg-red text-no-wrap text-truncate">
				<div><strong>ALIASES</strong></div>
				<div><v-icon icon="$fas-mug-hot" color="blue" /> $myCustAlias</div>
				<div><v-icon icon="$menu" /> $menu</div>
				<div><v-icon icon="$delimiter" /> $delimiter</div>
				<div><v-icon icon="$collapse" /> "$collapse</div>
				<div><v-icon icon="$cancel" /> $cancel</div>
				<div><v-icon icon="$close" /> $close</div>
				<div><v-icon icon="$delete" /> $delete</div>
				<div><v-icon icon="$clear" /> $clear</div>
				<div><v-icon icon="$info" /> $info</div>
				<div><v-icon icon="$warning" /> $warning</div>
				<div><v-icon icon="$error" /> $error</div>
				<div><v-icon icon="$prev" /> "$prev</div>
				<div><v-icon icon="$next" /> $next</div>
				<div><v-icon icon="$checkboxOn" /> $checkboxOn</div>
				<div><v-icon icon="$checkboxOff" /> $checkboxOff</div>
				<div><v-icon icon="$checkboxIndeterminate" /> $checkboxIndeterminate</div>
				<div><v-icon icon="$sort" /> $sort</div>
				<div><v-icon icon="$expand" /> $expand</div>
				<div><v-icon icon="$subgroup" /> $subgroup</div>
				<div><v-icon icon="$dropdown" /> $dropdown</div>
				<div><v-icon icon="$radioOn" /> $radioOn</div>
				<div><v-icon icon="$radioOff" /> $radioOff</div>
				<div><v-icon icon="$ratingEmpty" /> $ratingEmpty</div>
				<div><v-icon icon="$ratingFull" /> $ratingFull</div>
				<div><v-icon icon="$ratingHalf" /> $ratingHalf</div>
				<div><v-icon icon="$loading" /> $loading</div>
				<div><v-icon icon="$first" /> $first</div>
				<div><v-icon icon="$last" /> $last</div>
				<div><v-icon icon="$unfold" /> $unfold</div>
				<div><v-icon icon="$file" /> $file</div>
				<div><v-icon icon="$plus" /> $plus</div>
				<div><v-icon icon="$minus" /> $minus</div>
			</v-col>

			<!-- MDI -->
			<v-col>
				<div><strong>MDI SVG</strong></div>
				<!-- <div><v-icon :icon="mdiHome" /> icon="mdiHome"</div> -->
				<div><v-icon :icon="mdiHome" /> :icon="mdiHome"</div>
				<div><v-icon :icon="mdiFacebook" color="blue" /> :icon="mdiFacebook" color="blue"</div>
				<div><v-icon :icon="mdiEmail" size="large" /> :icon="mdiEmail" size="large</div>
				<div><v-icon :icon="mdiInstagram" color="red" class="fa-spin" /> :icon="mdiInstagram" color="red" class="fa-spin"</div>
				<div>
					<v-icon :icon="mdiAlertOutline" size="small" color="red" class="fa-bounce" />
					:icon="mdiAlertOutline" size="small" color="red" class="fa-bounce"
				</div>
			</v-col>

			<!-- FA -->
			<v-col class="bg-grey">
				<div><strong> FA-SVG </strong></div>
				<!-- <div><font-awesome-icon icon=" fas fa-user"></font-awesome-icon> icon="fas fa-user"</div>
            <div><font-awesome-icon icon=" far fa-user"></font-awesome-icon> icon="fas fa-user"</div> -->
				<div><v-icon key="" icon="fa:fas fa-user" /> icon="far fa-user"</div>
				<div><v-icon key="" icon="fa:far fa-user" /> icon="far fa-user"</div>
				<div><v-icon icon="fa:fas fa-info-circle" /> icon="fas fa-info-circle"</div>
				<div><v-icon icon="fa:fas fa-angle-double-right" /> icon="fas fa-angle-double-right"</div>
				<div><v-icon icon="fa:fas fa-chevron-up" /> icon="fas fa-chevron-up"</div>
				<div><v-icon icon="fa:fas fa-chevron-down" /> icon="fas fa-chevron-down"</div>
				<div>
					<v-icon icon="fa:fas fa-bars" class="fa-bounce" color="blue" size="small" /> icon="fas fa-bars" class="fa-bounce"
					color="blue" size="small"
				</div>
				<div>
					<v-icon icon="fa:fab fa-facebook" color="blue-lighten-1" class="fa-spin-pulse" /> icon="fa-brands fa-facebook"
					color="blue-lighten-1" class="fa-spin-pulse"
				</div>
				<div><v-icon icon="fa:fab fa-facebook" class="fa-beat text-blue" /> icon="fab fa-facebook" class="fa-beat text-blue"</div>
				<div><v-icon icon="fa:fab fa-whatsapp" color="green" /> icon="fab fa-whatsapp" color="green"</div>
				<div><v-icon icon="fa:fab fa-instagram" color="red" /> icon="fab fa-instagram" color="red"</div>
				<div><v-icon icon="fa:fab fa-instagram" size="large" /> icon="fab fa-instagram" size="large"</div>
				<div><v-icon icon="fa:fab fa-instagram" size="x-large" /> icon="fab fa-instagram" size="x-large"</div>
				<div><v-icon icon="fa:fas fa-mug-hot" /></div>
			</v-col>
		</v-row>

		<!-- BUTTON ICONS -->
		<v-row class="mt-7">
			<v-col>
				<v-btn variant="outlined" class="mb-3" @click="viewMode = viewMode ? null : 'd-flex'">Change direction</v-btn>
				More about Vuetify 3 buttons <nuxt-link to="https://next.vuetifyjs.com/en/components/buttons/" target="_blank">here</nuxt-link>
				<div :class="viewMode">
					<div>
						<v-btn to="#">home<font-awesome-icon icon="fa:fas fa-house" /></v-btn>
						<div>
							{{ '<v-btn to="#"><v-icon icon="fas fa-house" /></v-btn>' }}
						</div>
					</div>

					<div>
						<v-btn to="#" icon="fa:fas fa-house" />
						<div>{{ '<v-btn to="#" icon="fas fa-house" />' }}</div>
					</div>

					<div>
						<v-btn to="#"><v-icon icon="fa:fas fa-house" class="fa-beat text-blue" /></v-btn>
						<div>
							{{ '<v-btn to="#"><v-icon icon="fas fa-house" class="fa-beat text-blue" /></v-btn>' }}
						</div>
					</div>

					<div>
						<v-btn to="#" icon><v-icon icon="fa:fas fa-house" class="fa-beat text-blue" /></v-btn>
						<div>
							{{ '<v-btn to="#" icon><v-icon icon="fas fa-house" class="fa-beat text-blue" /></v-btn>' }}
						</div>
					</div>

					<div>
						<v-btn to="#" variant="plain" icon><v-icon icon="fa:fas fa-house" class="fa-beat text-blue" /></v-btn>
						<div>
							{{ '<v-btn to="#" variant="plain" icon><v-icon icon="fas fa-house" class="fa-beat text-blue" /></v-btn>' }}
						</div>
					</div>

					<div>
						<v-btn to="#" icon="fa:fas fa-house" class="fa-beat text-blue"></v-btn>
						<div>{{ ' <v-btn to="#" icon="fas fa-house" class="fa-beat text-blue"></v-btn> ' }}</div>
					</div>
				</div>
			</v-col>
		</v-row>
	</v-container>

	<p class="text-h5 mt-7">Fonts</p>
	Vuetify colors defined
	<nuxt-link to="https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/styles/settings/_colors.scss">here</nuxt-link>
	<v-sheet>
		<h1 class="bB">normal h1 text</h1>
		<h2 class="bB">normal h2 text</h2>
		<h1 class="text-h6 bg-grey text-blue bB">h1 class="text-h6 bg-grey text-blue"</h1>
		<p class="text-h6 bg-grey-darken-2 text-blue-lighten-3 bB">p class="text-h6 bg-grey-darken-2 text-blue-lighten-3"</p>
		<p class="bB">normal p text</p>
		<p class="text-caption bB">p class="text-caption"</p>
		<p class="text-subtitle-1 bB">p class="text-subtitle-1"</p>
		<p class="text-body-1 bB">p class="text-body-1"</p>
		<span class="d-block bB">span class="d-block"</span>
		<div>
			<span class="text-body-1 bB">span class="text-body-1"</span>
			<span class="text-body-2 bB">span class="text-body-2"</span>
		</div>
		<p class="text-overline bB">p class="text-overline"</p>
		<p class="text-button bB">p class="text-button"</p>
		<div class="font-weight-thin bB">text-h5 text in div</div>
	</v-sheet>

	<v-sheet class="mt-5">
		<p class="font-italic">font-italic</p>
	</v-sheet>

	<v-sheet class="mt-5">
		<a href="#" class="d-block text-decoration-none">class="text-decoration-none"</a>
		<span class="d-block text-decoration-underline">class="text-decoration-underline"</span>
		<span class="d-block text-decoration-line-through">class="text-decoration-line-through</span>
		<span class="d-block text-capitalize">class="text-capitalize"</span>
	</v-sheet>

	<v-sheet class="mt-5">
		<p class="text-high-emphasis">text-high-emphasis</p>
		<p class="text-medium-emphasis">text-medium-emphasis</p>
		<p class="text-disabled">text-disabled</p>
	</v-sheet>

	<v-sheet class="mt-5">
		<p class="font-weight-black">font-weight-black</p>
		<p class="font-weight-bold">font-weight-bold</p>
		<p class="font-weight-medium">font-weight-medium</p>
		<p class="font-weight-regular">font-weight-regular</p>
		<p class="font-weight-light">font-weight-light</p>
		<p class="font-weight-thin">font-weight-thin</p>
	</v-sheet>
</template>
