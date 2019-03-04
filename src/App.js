import React, { Component } from 'react';
import { HashRouter, Route, Link } from 'react-router-dom'




class App extends Component {
  constructor(props){
    super(props);
    this.state={

      
    }
  }
  render() {
    return (

      //NAVR BAR LINK WILL DISPLAY ON ALL PAGES
    
    <>  
     <HashRouter>
     <>
     <Navbar />
     <Route path='/' exact component={Home} />
     <Route path='/user' component={User} />
     <Route path='/feededitor' component={FeedEditor} />
     <Route path='/searches' component={Search} />
     </>
     </HashRouter>
      </>
    );
  }
}

export default App;
