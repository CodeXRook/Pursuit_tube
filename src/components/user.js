import React from 'react';


class User extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            users: [],
            input: '',
            currentUser: ''
    }
}

 //DOES IT EXIST IN LOCAL STORAGE?, IF YES THEN SET IT TO STATE
 componentWillMount(){
    localStorage.getItem('users') && this.setState({
        users: JSON.parse(localStorage.getItem('users')),
        input: ''
    })
 }

  clickingUser =(e , index)=>{
      console.log(e.target.innerHTML)
      const currentUser =this.state.user[index]

      this.setState({
          currentUser,
      })

  }

  onNameChange =(e) => {
    console.log(e.target.value)
    this.setState({ input: e.target.value})
  }