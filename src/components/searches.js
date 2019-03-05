import React from 'react';
import VideoPlayer from './video';
import axios from 'axios';
import './home.css';
import moment from 'moment'; //NEED TO GO OVER MOMENT;

class Search extend React.Component {
construcor(props){
    super(props)
    this.state ={
        input: 'Bethel',
        videos: [],
    }
 }

    loadVideos = (query) => {
        axios({
            method: 'get',
            url: 'https://www.googleapis.com/youtube/v3/search',
            params:{
                part: 'snippet',
                maxResults: 10,
                videoDefintion: 'high',
                type: 'video',
                videoEmbeddable: 'true',
                key: 'AIzaSyAL6JKGb4TLsmM4MKvk0f85Bu4QpaJvgEs',
                q: query,
                pageToken: ''
            }
        })


        
    }
}


export default Search;