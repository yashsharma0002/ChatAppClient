/**
 * @description this is for login page component
 * @author  Yash
 * @since   11/11/2018
 * @version 1.5.
 * @module axios, react, material-ui
 */
import React,{Component} from 'react';
import { Button, TextField, FormLabel } from '@material-ui/core';
import user_service from '../services/user_service';
/**
 * @description Class Component to render display option we want on page
 * @extends React Component to make it a component
 * @function render to display on webpage & to write html code
 */
class Chat_App_Message_type_Component extends Component
{
    /**
     * @description setting value of any text field to some object element declared in constructor
     * @param {Object.props} props 
     * @constructor to set values to object element
     */
    constructor(props) {
        super(props);
        this.state = {
            'message' : ''
        };
        this.setting_message_value_function = this.setting_message_value_function.bind(this);
        this.message_send_function = this.message_send_function.bind(this);
    }

    setting_message_value_function(event)
    {
        this.setState({
            message : event.target.value
        });
        console.log(this.state.message);
        
    }

    message_send_function(event)
    {
        event.preventDefault();
    }

    render() {
       
         return (
            <div display = "inline-block" >
                <br/>
                <Button><img src = {require('../images/message_send_arrow.jpg')} alt="User Registration" id = "chat-send-image" onClick={this.message_send_function}/></Button>
                <TextField label="Text Message" inputProps={{ maxLength: 25 }} type = "TextField"  value = {this.state.message} onChange={this.setting_message_value_function}></TextField>
            </div>   
        );
    }
}

/**
 * @exports Chat_App_Message_type_Component Class as Component in react tech
 */

export default Chat_App_Message_type_Component;