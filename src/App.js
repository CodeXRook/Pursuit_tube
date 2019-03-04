import React, { Component } from 'react';
import { HashRouter, Route, Link } from 'react-router-dom'




class App extends Component {
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

     </>
     </HashRouter>
      </>
    );
  }
}

export default App;
