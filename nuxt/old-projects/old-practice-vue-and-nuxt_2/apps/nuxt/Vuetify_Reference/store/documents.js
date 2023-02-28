export const state = () => ({
	documents: [
		Nuxt
	]
})

export const getters = {
	selected(state) {
		return state.documents.findIndex(elem => elem.document.isSelected === true)
	},
	document(state, getters) {
		return state.documents[getters.selected].document
	},
	chapters(state, getters) {
		return state.documents[getters.selected].chapters
	},
	documents(state) {
		return state.documents.map(elem => elem.document)
	}
}

const Nuxt = {
	document: { title: 'Nuxt', to: '/to_doc', subtitle: 'A bit longer text here', isSelected: true },
	chapters: [
		{ title: 'Playground', to: '/playground', subtitle: 'a bit linger text here' },
		{ title: 'Grid', to: '/grid', subtitle: 'a bit linger text here' },
		{ title: 'Buttons', to: '/buttons', subtitle: 'a bit linger text here' },
		{ title: 'Spacing', to: '/spacing', subtitle: 'a bit linger text here' },
		{ title: 'Typography', to: '/typography', subtitle: 'a bit linger text here' }
	]
}

