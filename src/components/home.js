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
    
}