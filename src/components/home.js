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
            .then(res => res.data)
            .then((data)=>{
                let feedCopy = [...this.state.feedlist]
                feedCopy[0].videos[0].title = data.items[0].snippet.title
                feedCopy[0].videos[0].thumbnail = data.items[0].snippet.thumbnails.medium.url
                feedCopy[0].videos[0].channel = data.items[0].snippet.channelTitle
                feedCopy[0].videos[0].posted = data.items[0].snippet.publishedAt
            })

    }

}