import React, {Component} from 'react';

import { Consumer } from 'components/HOC/withProfile';

import Styles from './styles.m.css';

export default class Composer extends Component {
    render () {
    return (
        <Consumer>
            {(context) => (
                <section className = {Styles.composer}>
                    <img src = {context.avatar} />
                    <from>  
                        <textarea placeholder = {`What's on your mind, ${context.currentUserFirstName}?`} />
                        <input  type = 'submit' value = 'post' />
                    </from>
                </section>
            )}
        </Consumer>                
        );
    } 
}