const search = (state = { term: '' }, action ) => {
    switch (action.type) {
        case 'SEARCH_INPUT':
            return Object.assign({}, state, {term: action.term})
        default:
            return state
    }
}
export default search;