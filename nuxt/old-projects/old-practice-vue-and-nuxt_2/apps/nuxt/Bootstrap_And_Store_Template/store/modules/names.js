export const state = () => ({
	fName: '',
	lName: ''
})

export const getters = {
	fName(state) {
		return state.fName
	},
	lName(state) {
		return state.lName
	},
	fullName(state) {
		return state.fName + ' ' + state.lName
	}
}

export const mutations = {
	setFName(state, name) {
		state.fName = name
	},
	setLName(state, name) {
		state.lName = name
	}
}

export const actions = {
	setFName(context, name) {
		context.commit('setFName', name)
	},
	setLName(context, name) {
		context.commit('setLName', name)
	}
}