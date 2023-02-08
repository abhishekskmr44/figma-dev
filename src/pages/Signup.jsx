import images from "./images.svg"
import styles from "./Signup.module.css"
import React from 'react'

const Signup = () => {
  return (
    <div className={styles.container}>
    <div className={styles.containerLeft}>

    <img src={images} className={styles.images}/>

    </div>
    <div className={styles.containerRight}>
     <div className={styles.mainForm}>
       <h2 className={styles.welcome}>Welcome to Masai</h2>
       <h1 className={styles.signupText}>Sign up</h1>
     </div>
    </div>
    </div>
  )
}

export default Signup