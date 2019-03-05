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

  addNewUser = (e) => {
      console.log('keystroke', e)
      e.preventDeault();
      if (this.state.users.includes(this.state.input)) {
        return alert(`Username ${this.state.input} already exist`)
    }
    // LET NEWUSER = THIS.STATE.USER.PUSH(THIS.STATE.INPUT)
    let copiedUsers = [...this.state.users]
    copiedUsers.push(this.state.input)
    this.stetState({users: copiedUsers })
  }

//BEFORE RENDERING AND AFTER THE FUNCTION
componentWillUpdate(nextProps,nextState){
    localStorage.setItem('user',JSON.stringify(nextState.users))
}

render(){
    console.log(this.state)
    return(
        <>
       <div className='row'>
       <div><h3>Create a New User</h3>
       <input type='text' placeholder='name' onChange={this.onNameChange} /><button onClick={this.addNewUser}>add</button>
       </div>

       <div className='col-6'>
       <div><h3>User list</h3></div>
       <ul className= "list-group">
       {
           this.state.users.map((name, i) =>{
               let activeClass = "";
               if (name === this.state.currentUser) activeClass = "active"
               return <li key={i} className={"list-group-item" + activeClass} onClick={(e) => this.clickingUser(e, i)} style={{backgroundColor:this.state.bgColor}}>{name}</li>;
             })

         }
       </ul>
       </div>
       </div>
        </>
    )   
}

}

export default User;