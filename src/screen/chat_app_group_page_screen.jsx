/**
 * @description chat app page display
 * @author Yash
 * @module Screen
 * @since 16/11/2018
 * @version 2.0
 */
import React, { Component } from 'react';
import ChatAppMessageDisplayComponent from '../component/chat_app_message_display_component';
import ChatAppMessageTypeComponent from '../component/chat_page_message_type_component';
import LogoutTopBarComponent from '../component/logout_topbar_component';
import UsersLoginComponent from '../component/users_login_component';
/**
 * @description Class Component to render display option we want on page
 * @extends React Component to make it a component
 * @function render to display on webpage & to write html code
 */
class ChatAppGroupPageScreen extends Component
{    
   
    render() {
        return (
            <div className = "centre-content">
                <LogoutTopBarComponent/>
                <UsersLoginComponent/>
                {/* <img src={require('../images/messaging_logo.jpg')} alt="User Registration" id = "img-top-chat-page" /><br/><br/> */}
                <ChatAppMessageDisplayComponent/>
                <ChatAppMessageTypeComponent/>
                
            </div>
        );
    }
}

/**
 * @exports Register Class as Component in react tech
 */
export default ChatAppGroupPageScreen;