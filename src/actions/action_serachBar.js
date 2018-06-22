const searchBar = (term) => {
    return {
        type: 'SEARCH_INPUT',
        term
    }
}

const searchInput = (term) => (dispatch) => {
    dispatch(searchBar(term));
}

export default searchInput;