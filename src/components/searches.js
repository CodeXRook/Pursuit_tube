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
        .then(res =>{
            console.log('in here', res.data.items)
            let queryCopy = [... res.data.items]
            console.log('new', queryCopy)
            this.setState({ videos: queryCopy })
            console.log('err', this.state.videos)
        })
    }

    componentDidMount(){
        let query = this.state.input
        this.loadVideos(query)
    }

componentDidUpdate(prevState, prevProps){

    console.log('updated', prevState)
    console.log('stateNow', this.state)
    }
  
    render(){
        return(
            <>

                <div className="row">
                <div className="col-2"></div>
                <div className="container">
                {this.state.videos.map((e, i) =>{
                    console.log('oneVid',e)
                    return<div>
                        {e.snippet.default}
                        {<img src={e.snippet.thumbnail.default.url} alt ='vid'/>}
                        {e.snippet.channelTitle}
                        </div>
                })
                }
                </div>
                <div className="col"></div>
                </div>

            </>
        );
     }
}


export default Search;