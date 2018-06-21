import _ from 'lodash';
import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import SerchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail';

const API_KEY = 'AIzaSyDpNZ-Z75Se87VP6awxtqG9N1mJZG9x0Oo';


export default class App extends Component {
  constructor(props){
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null 
    };

    this.videoSearch('imbanaco');

  }

  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos) => this.setState({videos, selectedVideo: videos[0]})); 
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
    
    return (
      <div className="container-fluid">      
        <div className="navbar navbar-expand-md navbar-danger fixed-top bg-danger justify-content-center shadow p-3 mb-5 rounded">
          <SerchBar onSearchTermChange={ videoSearch }/>
        </div>
        <div className="d-flex flex-row">
          <VideoDetail video={this.state.selectedVideo}/>
          <VideoList 
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
            videos={this.state.videos}/>
        </div>
      </div>
    );
  }
}
