import React, {Component} from 'react'
import styles from './Calculator.module.sass'

class Calculator extends Component {
    state = {
        equation: '',
        equationOld: ''
    }
    addCharacter = (val) => {
        if (!(!this.isItAnArithmeticOperation(this.state.equation.substr(-1, 1)) && !this.isItAnArithmeticOperation(val)))
            this.setState({equation: this.state.equation + val})
    }
    clear = () => {
        this.setState({equation: ''})
    }
    remove = () => {
        this.setState({equation: this.state.equation.slice(0, -1)})
    }
    isItAnArithmeticOperation = (val) => {
        return (
            '+' !== val && '-' !== val && '/' !== val && '*' !== val && ',' !== val
        )
    }
    addTextToEquation = (val, index) => {
        const {equation} = this.state
        const firstPart = equation.slice(0, index);
        const secondPart = equation.slice(index, equation.length);

        return `${firstPart}${val}${secondPart}`;
    }
    percent = () => {
        const {equation} = this.state
        const length=equation.length
        if (length>1) {
            if (length===2) {
                this.setState({equation: this.addTextToEquation(',', -1)})
            } else {
                this.setState({equation: this.addTextToEquation(',', -2)})
            }
        }
    }
    equal = () => {
        const {equation} = this.state
        this.setState({equation: eval(equation) + '', equationOld: equation})
    }
    buttons = [
        {
            action: () => this.percent(),
            text: '%',
        },
        {
            action: () => this.remove(),
            text: '+/-',
        },
        {
            action: () => this.clear(),
            text: 'C',
        },
        {
            action: () => this.addCharacter('/'),
            text: '/',
            style: styles.arithmeticOperation
        },
        {
            action: () => this.addCharacter(7),
            text: 7,
        },
        {
            action: () => this.addCharacter(8),
            text: 8,
        },
        {
            action: () => this.addCharacter(9),
            text: 9,
        },
        {
            action: () => this.addCharacter('*'),
            text: 'x',
            style: styles.arithmeticOperation
        },
        {
            action: () => this.addCharacter(4),
            text: 4,
        },
        {
            action: () => this.addCharacter(5),
            text: 5,
        },
        {
            action: () => this.addCharacter(6),
            text: 6,
        },
        {
            action: () => this.addCharacter('-'),
            text: '-',
            style: styles.arithmeticOperation
        },
        {
            action: () => this.addCharacter(1),
            text: 1,
        },
        {
            action: () => this.addCharacter(2),
            text: 2,
        },
        {
            action: () => this.addCharacter(3),
            text: 3,
        },
        {
            action: () => this.addCharacter('+'),
            text: '+',
            style: styles.arithmeticOperation
        },
        {
            action: () => this.addCharacter(0),
            text: 0,
        },
        {
            action: () => this.addCharacter(','),
            text: ',',
        },
        {
            action: () => this.equal(),
            text: '=',
            style: styles.equal
        },
    ]

    render() {
        const {equation, equationOld} = this.state
        return (
            <div className={styles.container}>
                <div className={styles.equationContainer}>
                    <p className={styles.equationOld}>{equationOld}</p>
                    {equation}
                </div>
                <div className={styles.buttons}>
                    {this.buttons.map((val, i) => (
                        <div
                            key={i}
                            className={val?.style}
                            onClick={val.action}
                        >
                            {val.text}
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Calculator