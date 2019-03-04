import React from 'react';
import axios from 'axios'; //TO MAKE API CALL

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            feedlist:[ 
                {
                    query: 'ESPN FIRST TAKE',
                    videos:[
                        {
                            title: 'Lebron James',
                            thumbnail: '',
                            channel: '',
                            posted: '',
                            id: '',
                        },

                    ]
                }
            ]

        }
    }
    getVideos =(query) => {
        axios({
            method: 'get',
            url: 'https://www.googleapis.com/youtube/v3/search',
            params:{
                part: 'snippet',
                maxResults: 8,
                videoDefinition: 'high',
                type: 'video',
                videoEmbeddable: 'true',
                key: 'AIzaSyBqsTC2uJ5zklkPcEDeLpAz4B6UktMYuPo',
                q: query,
                pageToken:''
                
            }
        })
    }

}