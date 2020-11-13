import React from 'react';
import styles from './Button.module.css';


class NextPicture extends React.Component {
  constructor(props) {
    super(props)
  }

  handleClick() {
    this.props.nextImage()
  }

  render() {
    return (
      <div>
        <button className={styles.nextPictureButton} onClick={this.handleClick.bind(this)}> > </button>
      </div>
    )
  }
}

export default NextPicture;
