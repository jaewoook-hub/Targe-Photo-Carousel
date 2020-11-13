import React from 'react';
import BottomBarEntry from './BottomBarEntry.jsx'
import styles from './BottomBar.module.css';

const BottomBar = (props) => (
      <div className={styles.bottomBar}>
        {props.imageList.map((image) => <BottomBarEntry
          image={image}
          changeMainImage={props.changeMainImage}
          imageList={props.imageList}
          key={image._id}/>
      )}</div>
)

export default BottomBar;
