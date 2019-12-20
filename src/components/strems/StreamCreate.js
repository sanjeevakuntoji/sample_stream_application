import React, { Component } from 'react';
import {connect } from 'react-redux';
import { createStream } from '../../action'
import StreamForm from './streamForm';
class StreamCreate extends Component {

   onSubmit =(formValues) =>{
    this.props.createStream(formValues)
   }
    render() {
         return (
            <div>
                <h3>Create a atream</h3>
                <StreamForm onSubmit={this.onSubmit} />
            </div>
         )
    }
}

export default connect(null,{createStream})(StreamCreate);