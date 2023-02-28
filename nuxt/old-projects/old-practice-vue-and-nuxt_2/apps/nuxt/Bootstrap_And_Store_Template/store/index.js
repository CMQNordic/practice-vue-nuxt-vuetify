export const state = () => ({
	debugOn: true,
})
export const getters = {
	debugOn(state) {
		return state.debugOn
	}
}
export const mutations = {
	setDebugOn(state, bOn) {
		state.debugOn = bOn
	}
}

export const actions = {
	async nuxtServerInit({ commit, dispatch }) {
		// This is executes only ONCE on the SERVER
		new Promise((resolve, reject) => {
			// Set initial tag values
			commit('modules/tags/setMainTags', staticMainTags)
			commit('modules/tags/setSelectedMainTag', staticMainTags.findIndex((tag) => { return tag.activated === true }))
		})
	}
}


const subTags_A = [
	{ caption: 'All A items', activated: true },
	{ caption: 'sub_A_A', activated: false },
	{ caption: 'sub_A_B', activated: false },
	{ caption: 'sub_A_C', activated: false },
	{ caption: 'sub_A_D', activated: false },
	{ caption: 'sub_A_F', activated: false },
	{ caption: 'sub_A_G', activated: false },
	{ caption: 'sub_A_H', activated: false },
	{ caption: 'sub_A_I', activated: false },
	{ caption: 'sub_A_J', activated: false }
]

const subTags_B = [
	{ caption: 'All B items', activated: true },
	{ caption: 'sub_B_X', activated: false },
	{ caption: 'sub_B_Y', activated: false },
	{ caption: 'sub_B_Z', activated: false },
	{ caption: 'sub_B_TMP', activated: false },
	{ caption: 'sub_B_TMP_LOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOONG_END', activated: false }
]

const subTags_C = [
	{ caption: 'All C items', activated: true },
	{ caption: 'sub_C_Z', activated: false },
	{ caption: 'sub_C_Y', activated: false }
]

const subTags = [
	{ caption: 'All items', activated: true },
	{ caption: 'sub_1', activated: false },
	{ caption: 'sub_2', activated: false }
]

const subTagsAll = [
	{ caption: 'All items', activated: true },
	{ caption: 'sub_A_A', activated: false },
	{ caption: 'sub_A_B', activated: false },
	{ caption: 'sub_A_C', activated: false },
	{ caption: 'sub_A_D', activated: false },
	{ caption: 'sub_A_F', activated: false },
	{ caption: 'sub_A_G', activated: false },
	{ caption: 'sub_A_H', activated: false },
	{ caption: 'sub_A_I', activated: false },
	{ caption: 'sub_A_J', activated: false },
	{ caption: 'sub_B_X', activated: false },
	{ caption: 'sub_B_Y', activated: false },
	{ caption: 'sub_B_Z', activated: false },
	{ caption: 'sub_B_TMP', activated: false },
	{ caption: 'sub_C_Z', activated: false },
	{ caption: 'sub_C_Y', activated: false }
]

// Static data that shall be loaded from
const staticMainTags = [
	{ caption: 'All items', activated: true, subTags: subTagsAll },
	{ caption: 'tag_A', activated: false, subTags: subTags_A },
	{ caption: 'tag_B', activated: false, subTags: subTags_B },
	{ caption: 'tag_C', activated: false, subTags: subTags_C },
	{ caption: 'tag_D', activated: false, subTags: subTags },
	{ caption: 'tag_E', activated: false, subTags: subTags },
	{ caption: 'tag_F', activated: false, subTags: subTags },
	{ caption: 'tag_G', activated: false, subTags: subTags },
	{ caption: 'tag_H', activated: false, subTags: subTags },
	{ caption: 'tag_I', activated: false, subTags: subTags }
]

