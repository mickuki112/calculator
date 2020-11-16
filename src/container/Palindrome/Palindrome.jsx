import React, {Component} from 'react'
import styles from './Palindrome.module.sass'

class Palindrome extends Component {
    state={
        palindrome:'',
        palindromeValidation:false
    }

    palindromeDecoder=(val)=>{
        const text=val.replace( /\s+/g, '')
        this.setState({palindrome:val,palindromeValidation: text === text.split("").reverse().join("") && true})
    }

    render() {
        const {palindrome,palindromeValidation} = this.state
        return (
            <div className={styles.container}>
                <input
                    type='text'
                    name='palindrome'
                    className={styles.input}
                    placeholder='palindrome'
                    value={palindrome}
                    onChange={e=>this.palindromeDecoder(e.target.value)}
                />
                Is the text a palindrome?
                {palindromeValidation && palindrome && 'true'}
            </div>
        )
    }
}

export default Palindrome

