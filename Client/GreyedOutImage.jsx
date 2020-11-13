import React from 'react';
import styles from './SideBar.module.css';

class GreyedOutImage extends React.Component {
  constructor(props) {
    super(props)

  }

  imageClick() {
    this.props.clickMainImageForPopOut(this.props.mainImageId)
  }

  render () {
    return (
      <div className={styles.imageContainer}>
        <img
          className={styles.greyedImage}
          // src={this.props.extendImage.url}
          onClick={this.imageClick.bind(this)}>
          </img>
    <div className={styles.centeredOverImage}
          onClick={this.imageClick.bind(this)}
          > + {this.props.imageListLength - 4} more</div>
      </div>
    )

  }
}

export default GreyedOutImage;
