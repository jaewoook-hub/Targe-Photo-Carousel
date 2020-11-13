import React from 'react'
import styles from './BottomBar.module.css';

class BottomBarEntry extends React.Component {
  constructor(props) {
    super(props)
  }

  handleClick() {
    var imageIndex = this.props.imageList.indexOf(this.props.image);
    this.props.changeMainImage(this.props.image._id, imageIndex)
  }

  render () {

    return (
      <div >
        <img
          className={styles.BottomBarEntry}
          src={this.props.image.url}
          alt={this.props.image.alt}
          onClick={this.handleClick.bind(this)}
          >
          </img>
      </div>
    )
  }
}
export default BottomBarEntry;
