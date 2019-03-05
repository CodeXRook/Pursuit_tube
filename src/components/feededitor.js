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
    const currentFeed = this.state.feed[idx]
    let array = [...this.state.feed]; 
    let index = array.indexOf(currentFeed)
    console.log(idx)
    if (idx !== -1) {
        array.splice(idx, 1);
        this.setState({ feed: array });
    }
    onFeedChange =(e) =>{
        console.log(e.target.value)
        this.setState({ input: e.target.value })
    }
    addFeeder = (e) =>{
        console.log('keystroke', e)
        e.preventDefault();
        if (this.state.feed.includes(this.state.input)){
            return alert(`Feed ${this.state.input} is already in list`)
        }
         //   LET NEWUSER = THIS.STATE.USERS.PUSH(THIS.STATE.INPUT)
         let copiedFeed = [...this.state.feed]
         this.setState({ feed: copiedFeed })

    }
        //BEFORE RENDERING AND AFTER THE FUNCTION
        componentWillUpdate(nextProps, nextState)
        localStorage.setItem('feed', JSON.stringify(nextState.feed))
  }

  render() {
      console.log(this.state)
      return(
          <>
           <div className='row'>
           
           <div className='col-6'>
           <div><h3>Create a New Explore Feed</h3></div>
           
           </div>
           
           </div>
          </>
      )
  }
}