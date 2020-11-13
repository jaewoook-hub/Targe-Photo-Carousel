import React from 'react';
import styles from './MainImage.module.css'


class MainImage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      backgroundImage: `url(${this.props.image.url})`,
      backgroundPosition: '0% 0%'
    }
  }

  handleMouseMove(e) {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = (e.pageX - left) / width * 100;
    const y = (e.pageY - top) / height * 100;
    this.setState({
      backgroundPosition: x + '% ' + y + '%',
      backgroundImage: `url(${this.props.image.url})`
    })
  }
  handleClick() {
    this.props.clickMainImageForPopOut(this.props.image._id)
  }

  render () {

    return (
      <div>
        <figure
          onClick={this.handleClick.bind(this)}
          onMouseMove={this.handleMouseMove.bind(this)}
          style={this.state}>
          <img
            className={styles.mainImage}
            src={this.props.image.url}
            alt={this.props.image.alt}>
          </img>
        </figure>
      </div>
    )

  }
}

export default MainImage;
