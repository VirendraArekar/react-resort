import React,{component, Component} from 'react';

export default class Contact extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div style={{border:'10px solid gray'}}>
                <div style={{width:'40%'}}>
                 <img src={require('../images/room-1.jpeg')} width="100%" height="800px"/>
                </div>
                <div style={{width:'60%'}}>
                  <h3>Virendra Arekar</h3>
                </div>
            </div>
        )
    }
}