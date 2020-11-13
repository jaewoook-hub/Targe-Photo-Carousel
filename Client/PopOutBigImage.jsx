import React from 'react';
import styles from './PopOut.module.css';



const BigImage = (props) => (

      <div className={styles.bigImageContainer}>
        <img className={styles.bigImage} src={props.mainImage.url} alt={props.mainImage.url}></img>
      </div>
    )
export default BigImage
