import React from 'react'
import styles from './Header.module.sass'

const Header = ({changeShow,show}) =>
    <div className={styles.header}>
        <button className={show === 'calculator' ? styles.buttonActive :styles.button} onClick={() => changeShow('calculator')}>Calculator</button>
        <button className={show === 'decoder' ? styles.buttonActive : styles.button}  onClick={() => changeShow('decoder')}>Decoder</button>
        <button className={show === 'palindrome' ? styles.buttonActive : styles.button}  onClick={() => changeShow('palindrome')}>Palindrome</button>
    </div>

export default Header
