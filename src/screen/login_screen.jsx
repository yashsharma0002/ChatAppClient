
/**
 * @description login app page display
 * @author Yash
 * @module Screen
 * @since 12/11/2018
 * @version 2.5
 */
import React from 'react';
import LoginComponent from '../component/login_component'

/**
 * @description Class Component to render display option we want on page
 * @extends React Component to make it a component
 * @function render to display on webpage & to write html code
 */
class LoginScreen extends React.Component
{
    render() {
        return (
            <div className = "centre-content">
                <br/><br/><br/>
                <img src = {require('../images/user_image.jpg')} alt="User Registration" id = "img-top" /><br />
                <LoginComponent />
            </div>
        );
    }
}

/**
 * @exports Register Class as Component in react tech
 */
export default LoginScreen;