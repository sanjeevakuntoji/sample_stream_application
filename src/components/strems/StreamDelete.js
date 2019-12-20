import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import Modal from '../modal'
import history from '../../history';
import { fetchStreams, deleteStream } from '../../action'
 
class StreamDelete extends Component {

    componentDidMount() {
        // console.log(this.props)
        this.props.fetchStreams(this.props.match.params.id)
    }
    renderActions() {
    return(
        <React.Fragment>
            <button onClick={()=>this.props.deleteStream(this.props.match.params.id)} className="ui button negative">Delete</button>
            <Link to="/" className="ui button" >Cancel</Link>
            </React.Fragment>
    )
    }
renderContent () {
    if(!this.props.stream) {
        return 'Are you sure you want to delete this stream?'
    }
    return `Are you sure you want to delete this stream title:${this.props.stream.title}`
}
    render() {
       
    return (
       
            <Modal 
                title="delete stream"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={()=> history.push('/')}
            />


    )
}
}

const mapStateToProps = (state, ownProps) => {
    return {stream: state.streams[ownProps.match.params.id]}
}
export default connect(mapStateToProps,{fetchStreams, deleteStream})(StreamDelete);