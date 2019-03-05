import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import Home from '/home';
import Home from '/home.css';
import Header from './header';


class Search extends Component {
    constructor(props){
        super(props)
        this.state= { isLoading:true, data:[],pageToken:'', hover:false}
    }

    getVideoList = (query,pageToken='')=>{
        axios({
            method: 'get',
            url: 'https://www.googleapis.com/youtube/v3/search',
            params:{
                part: 'snippet',
                maxResults: 5,
                videoDefinition: 'high',
                type: 'video',
                videoEmbeddable: 'true',
                key: 'AIzaSyAqwvNBfv73cn5RuP-VoRrMpekbCqStUTY',
                q: query,
                pageToken: pageToken
            }
        })
        .then(response =>{
            const videoListData = []
            response.data.items.forEach(vid=>{
                let currentLoad = {}
                currentLoad.video_id = vid.id.videoId  //VIDEO ID
                currentLoad.img = vid.snippet.thumbnails.medium.url //IMG URL
                currentLoad.title = vid.snippet.title //TITLE
                currentLoadLoad.channel_title =vid.snippet.channel_Title
                currentLoad.descrip = vid.snippet.description
                currentLoad.date = vid.snippet.publishedAt
                videoListData.push(currentLoad)
              })

            }
        })

    }

}