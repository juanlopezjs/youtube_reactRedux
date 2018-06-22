import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyDpNZ-Z75Se87VP6awxtqG9N1mJZG9x0Oo';

const searchVideos = (videos) => {
    return {
        type: 'SEARCH_VIDEO',
        videos
    }
}

const selectedVideo = (video) => {
    return{
        type: 'SELECTED_VIDEO',
        video
    }
}

export const videoSelected = (video) => (dispatch) =>{
    dispatch(selectedVideo(video))
}

export const videoSearch = (term) => (dispatch) => {
    YTSearch({key: API_KEY, term: term}, (videos) => {
        dispatch(searchVideos(videos));
        videoSelected(videos[0])(dispatch);
    })
}

