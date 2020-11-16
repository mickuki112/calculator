import React, { Component } from 'react'
import styles from './Home.module.sass'
import Calculator from '../Calculator/Calculator'
import Decoder from '../Decoder/Decoder'
import Palindrome from '../Palindrome/Palindrome'

class Home extends Component {
	render() {
		return (
			<div className={styles.container}>
					{/*<Calculator />*/}
					<Decoder />
			</div>
		)
	}
}

export default Home
