import React from 'react';


class FeedEditor extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            feed: ['espn', 'drake'],
            input: '',
            currentFeed: ''
        }
    }
//DOES IT EXIST IN LOCAL STORAGE?, IF YES THEN SET IT TO STATE
componentWillMount() {
    localStorage.getItem('feed') && this.setState({
        feed: JSON.parse(localStorage.getItem('feed')),
        input: ''
    })
}

clickingFeed = (e, idx) =>{
    
}