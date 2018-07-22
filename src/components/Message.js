import React from "react";
import Draft from "./Draft";

import { findMessageById } from "../services/messageService";

export default class Message extends React.Component {
    constructor( props ) {
        super( props );

        this.state = {
            sender: ""
            , subject: ""
            , content: ""
            , time_sent: ""
        }
    }

    componentWillMount() {
        this.getMessage.call( this, this.props.params.messageId );
    }

    componentWillUpdate( nextProps, nextState ) {
        if ( nextProps.params.messageId !== this.props.params.messageId ) {
            this.getMessage.call( this, nextProps.params.messageId );
        }
    }

    getMessage( messageId ) {
        const message = findMessageById( messageId );

        this.setState( {
            sender: message.sender
            , subject: message.subject
            , content: message.message
            , time_sent: message.time_sent
        } );
    }

    render() {
        return (
            <div>
                <p>Sender:{ this.state.sender }</p>
                <p>Subject:{ this.state.subject }</p>
                <p>Content:{ this.state.content }</p>
                
            </div>
        );
    }
}
