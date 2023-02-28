export const state = () => ({
	mainTags: [],
	selectedMainTag: 'no main tags loaded',
})

export const getters = {
	mainTags(state) {
		return state.mainTags
	},
	selectedMainTag(state) {
		return state.selectedMainTag
	}
}

export const mutations = {
	setMainTags(state, tags) {
		state.mainTags = tags
	},
	setSelectedMainTag(state, index) {
		state.selectedMainTag = state.mainTags[index].caption
	}
}

export const actions = {
	setSelectedMainTag(context, index) {
		context.commit('setSelectedMainTag', index)
	}
}
