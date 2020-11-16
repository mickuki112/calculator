import React, {Component} from 'react'
import styles from './Home.module.sass'
import Calculator from '../Calculator/Calculator'
import Decoder from '../Decoder/Decoder'
import Palindrome from '../Palindrome/Palindrome'
import Header from '../../components/Heder/Header'

class Home extends Component {
    state={
        show:'calculator'
    }

    changeShow=(val)=>this.setState({show:val})

    render() {
        const {show}=this.state
        return (
            <>
                <Header changeShow={this.changeShow} show={show}/>
                <div className={styles.container}>
                    {show==='calculator' ? <Calculator /> : show==='palindrome' ? <Palindrome /> : <Decoder />}
                </div>
            </>
        )
    }
}

export default Home
