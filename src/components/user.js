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
     
 }