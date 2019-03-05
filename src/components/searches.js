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
            
        })
    }
}


export default Search;