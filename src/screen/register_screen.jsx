
/**
 * @description Register app page display
 * @author Yash
 * @module Screen
 * @since 12/11/2018
 * @version 2.2
 */
import React from 'react'
import Register_component from '../component/register_componenet'

/**
 * @description Class Component to render display option we want on page
 * @extends React Component to make it a component
 * @function render to display on webpage & to write html code
 */
class Register_Screen extends React.Component
{
    render() {
        return (
            <div className="centre-content">
                <br/><br/><br/>
                <img src = {require('../images/user_image.jpg')} alt="User Registration" id = "img-inline-div" />
                <Register_component />
            </div>
        );
    }
}

/**
 * @exports Register Class as Component in react tech
 */
export default Register_Screen;