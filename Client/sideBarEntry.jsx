import React from 'react';
import styles from './SideBar.module.css';

class SideBarEntry extends React.Component {
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
          className={styles.SideBarEntry}
          src={this.props.image.url}
          onClick={this.handleClick.bind(this)}
          >
          </img>
      </div>
    )
  }
}

export default SideBarEntry;



