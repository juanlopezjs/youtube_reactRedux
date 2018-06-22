 const video = (state = { videos: [], selectedVideo: null }, action ) => {
    switch (action.type) {
        case 'SEARCH_VIDEO':
            return Object.assign({}, state, {videos: action.videos})
        case 'SELECTED_VIDEO':
            return Object.assign({}, state, {selectedVideo: action.video})
        default:
            return state
    }
}
export default video;