/**
 * @file webpack-study
 * @author zhanglu rookie
 */
import config from './greeter.json';
import React, {Component} from 'react';
import styles from './greeter.css';

class Greeter extends Component{
	render() {
		return (
			<div className={styles.root}>
				{config.greeter}
			</div>
		)
	}
};

export default Greeter;