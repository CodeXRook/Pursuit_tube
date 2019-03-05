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
              let nextLoad = this.state.data.concat(videoListData)
              let obj = {vids: nextLoad};
              let suggestions = JSON.parse(localStorage.getItem('suggestions'));
              if (!suggestions)
              localStorage.setItem('suggestions',JSON.stringify(obj))
            }
            else{
                suggestions.vids = suggestions.vids.concat(obj.vids)
                localStorage.setItem('suggestions',JSON.stringify(suggestions))
            }
                this.setState({isLoading:false,data:nextLoad,pageToken:response.data.nextPageToken})
           })
        }
            componentDidMount(){
                this.getVideoList(this.props.match.params.search_term)
                window.addEventListener('scroll', this.handleOnScroll(this.props.match.params.search_term))
                window.addEventListener('scroll', this.handleOnScroll);
            }

            componentWillReceiveProps(newProps){
                this.setState({data:[]})
                this.getVideoList(newProps.match.params.search_term)
                window.addEventListener('scroll', this.handleOnScroll)
            }

            handleOnScroll =()=> {
                const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
                const scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
                const clientHeight = document.documentElement.clientHeight || window.innerHeight;
                const scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;
            }
        }

        render(){
            if(this.state.isLoading) return <div className="spinner-border text-info" role="status">
             <span className="sr-only">Loading...</span>
             </div>
             else{
                 return<>
                  <div className="jumbotron">
                  <div style={{marginLeft:'10%'}}>
                  {this.state.data.map((vid, i)=>{
                      return <div className='hover row' key={i}>
                        <div className='col-4'>
                        <Link to={`/video/${vid.video_id}`}><img onClick={e=>this.addHistory(vid)} src={vid.img} alt={vid.img} /></Link>
                    </div>
                    <div className='col-6'>
                    <Link className='link_name' to={`/video/${vid.video_id}`}>{vid.title}</Link>
                    <p>{vid.channel_title}</p>
                    <p>{vid.descrip}</p>
                    
                  </div>
                  </div>

             }

        }
    }
}