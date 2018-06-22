import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

/*Components*/
import SerchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail';
/*Actions*/
import { videoSearch, videoSelected } from '../actions/action_searchVideo'


class App extends Component {

  constructor(props){
    super(props);
    props.videoSearch('imbanaco');

  }

  render() {
    const searchVideo = _.debounce((term) => { this.props.videoSearch(term) }, 300);

    return (
      <div className="container-fluid">      
        <div className="navbar navbar-expand-md navbar-danger fixed-top bg-danger justify-content-center shadow p-3 mb-5 rounded">
          <SerchBar onSearchTermChange={ searchVideo }/>
        </div>
        <div className="d-flex flex-row">
          <VideoDetail video={this.props.selectedVideo}/>
          <VideoList 
            onVideoSelect={selectedVideo => this.props.videoSelected(selectedVideo)}
            videos={this.props.videos}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    videos: state.video.videos,
    selectedVideo: state.video.selectedVideo
  }
}

export default connect(
  mapStateToProps, 
  {
    videoSearch,
    videoSelected
  }
)(App);