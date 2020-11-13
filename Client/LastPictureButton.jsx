import React from 'react';
import styles from './Button.module.css';

class LastPicture extends React.Component {
  constructor(props) {
    super(props)
  }

  handleClick() {
    this.props.lastImage()
  }

  render() {
    return (
      <div>
        <button className={styles.lastPictureButton} onClick={this.handleClick.bind(this)}> &lt; </button>
      </div>
    )
  }
}

export default LastPicture;
