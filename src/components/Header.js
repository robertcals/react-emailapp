import React from "react";
import { Link } from 'react-router';

export default class Header extends React.Component {
	render() {
		const styles = this.getStyles();

		return (
			<header style={ styles.wrapper }>
        <div>
            <img
                alt="React Logo grow shadow-5"
                src="assets/react-logo.svg"
                style={ styles.logoImage }
            />
            <Link to="/inbox"><h1 style={ styles.header }>check24 mail app</h1></Link>
        </div>

        <div>

            <Link to="/inbox">
                <span style={ styles.link }>Inbox</span>
            </Link>
            <Link to="/draft">
                <span style={ styles.link }>Draft</span>
            </Link>
           
        </div>
</header>
		);
	}

	getStyles() {
		return {
			header: {
				color: "aqua"
				, display: "inline-block"
			}
			, link: {
				color: "aqua"
				, fontSize: 20
				, marginRight: 7
			}
			, logoImage: {
				height: 50
				, margin: "0 10px 20px 10px"
				, width: 50
			}
			, wrapper: {
				alignItems: "baseline"
				, backgroundColor: "black"
				, boxSizing: "border-box"
				, color: "aqua"
				, display: "flex"
				, justifyContent: "space-between"
			}
		}
	}
}
