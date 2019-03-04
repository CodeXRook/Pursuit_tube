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
                feedCopy[0].videos[0].id = data.items[0].id.
                this.setState({ feedlist: feedCopy })
             })

    }
                //NOW WE MOUNT
    componentDidMount(){
        let query = this.state.feedlist[0].query
        this.getVideos(query)
    }

    render() {
        return(
            <>
                    <div className= 'Container'>
                        <div className='Jumbo'>
                        <div className="jumbotron jumbotron-fluid">
                        <h1 className="display-4">User's Playlist </h1>
                     </div>
                    </div>

                    <div className="container">
                    <div className="row feed">
                    <div className="col-2">

                    <h1>Feed list</h1>
                    <div className="list-group">
                    <a href="#" className="list-group-item list-group-item-action">ESPN First Take</a>
                    <a href="#" className="list-group-item list-group-item-action">Drake</a>
                    <a href="#" className="list-group-item list-group-item-action">Coldfusion</a>
                    </div>                   
                    </div>

                    <div className="feedList">
                    <div className="col-10"> 

                    <div className='title' className="main">

                    </div>
                    
                    
                    </div>

                   </div>

            </>
        )
    }

}