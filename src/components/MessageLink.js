import React from "react";
import moment from 'moment';





export default class MessageLink extends React.Component {
	render() {
		const styles= this.getStyles();

		return (
			<div style={ styles.wrapper }>
   
	<div>
		<button onClick={() => props.removeItem(index)}>X</button>
		<p>Sender:{ this.props.sender }</p>
		<p> Subject: { this.props.subject } </p>
		<p>{new moment(this.props.time_sent).format('ddd D MMM, HH:mm')}</p>
		 

		
	</div>  
</div>
		);
	}

	getStyles() {
		return {
			wrapper: {
				alignItems: "baseline"
				, border: "1px solid #e0e0e0"
				, borderRadius: 4
				, display: "flex"
				, justifyContent: "space-between"
				, margin: 10
				, padding: 10
				, width: "95%"

			
			}
		}
	}
}
