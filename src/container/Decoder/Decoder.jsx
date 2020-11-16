import React, {Component} from 'react'
import styles from './Decoder.module.sass'

class Decoder extends Component {
    state = {
        code: '',
        deCodeText: '',
    }

    deCode = (val) => {
        if (val) {
            const arrayLetters = val.replace(/(\s\s\s*)/g, ' ').split(" ")
            const deCodeText = arrayLetters.map((numbers) => {
                numbers = numbers.replace(/\D/g, "")
                return numbers &&
                    String.fromCharCode(
                        numbers
                            .split("")
                            .reduce((previousValue, currentValue) => {
                                return parseInt(previousValue) + parseInt(currentValue)
                            })
                    )
            }).join("")
            this.setState({deCodeText: deCodeText, code: val})
        } else {
            this.setState({code: val})
        }
    }

    render() {
        const {code, deCodeText} = this.state

        return (
            <div className={styles.container}>
                <textarea
                    name='deCode'
                    placeholder='code'
                    value={code}
                    onChange={e => this.deCode(e.target.value)}
                />
                <p className={styles.text}>
                    Decode:
                    {deCodeText}
                </p>
            </div>
        )
    }
}

export default Decoder

