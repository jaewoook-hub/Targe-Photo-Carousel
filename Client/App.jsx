import React from 'react';
import MainImage from './mainImage.jsx'
import SideBar from './SideBar.jsx';
import PopOut from './PopOut.jsx';
import styles from './App.module.css';

class ImageCarousel extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        imageList: [],
        mainImageId: "",
        mainImageClicked: false,
        mainImageBeforePopOut: '',
        mainImageIndex: 0
      }
  }

  changeViewBack() {
    this.setState({
      mainImageClicked: false,
      mainImageId: this.state.mainImageBeforePopOut,
      mainImageIndex: this.state.imageList.indexOf(this.state.imageList.filter((image) => { return image._id === this.state.mainImageBeforePopOut})[0])
    })
  }

  changeMainImage(imageID, index) {
    this.setState({
      mainImageId: imageID,
      mainImageIndex: index
    })
  }

  clickMainImageForPopOut(imageID) {
    this.setState({
      mainImageClicked: true,
      mainImageBeforePopOut: imageID
    })
  }

  nextImage() {
    if (this.state.mainImageIndex === this.state.imageList.length -1) {
      this.setState({
        mainImageIndex: 0,
        mainImageId: this.state.imageList[0]._id
      })
    } else {
      this.setState({
        mainImageIndex: this.state.mainImageIndex + 1,
        mainImageId: this.state.imageList[this.state.mainImageIndex + 1]._id
      })
   }
  }

  lastImage() {
    if (this.state.mainImageIndex === 0) {
      this.setState({
        mainImageIndex: this.state.imageList.length -1,
        mainImageId: this.state.imageList[this.state.imageList.length -1]._id
      })
    } else {
      this.setState({
        mainImageIndex: this.state.mainImageIndex - 1,
        mainImageId: this.state.imageList[this.state.mainImageIndex -1]._id
      })
    }
  }

  getImagesForEndpoint() {
    var productID;
    if(window.location.pathname.slice(1) === '') {
      productID = 1;
    } else if (window.location.pathname.slice(1) >= 101) {
      productID = 1;
    } else {
      productID = window.location.pathname.slice(1);
    }
    fetch(`/products/${productID}`)
    .then(res => res.json())
    .then((images) => {
      this.setState({
        imageList: images,
        mainImageId: images[0]._id
      })
    })
    .catch(err => console.log(err))

  }

  componentDidMount() {
    this.getImagesForEndpoint()
  }

  renderView() {
    if (this.state.mainImageClicked === true) {
      return <PopOut
                changeViewBack={this.changeViewBack.bind(this)}
                mainImage={this.state.imageList.filter((image) => { return image._id === this.state.mainImageId})[0]}
                imageList={this.state.imageList}
                nextImage={this.nextImage.bind(this)}
                lastImage={this.lastImage.bind(this)}
                changeMainImage={this.changeMainImage.bind(this)}/>
    } else if (this.state.mainImageClicked === false) {
         //if the image list exists render the carousel
      return this.state.imageList.length > 0 ?
        <div className={styles.smallCarousel}>
          <div className="sideBar">
            <SideBar
              imageList={this.state.imageList.slice(0, 4)}
              extendImage={this.state.imageList.slice(4, 5)[0]}
              changeMainImage={this.changeMainImage.bind(this)}
              clickMainImageForPopOut={this.clickMainImageForPopOut.bind(this)}
              mainImageId={this.state.mainImageId}
              imageListLength={this.state.imageList.length}/>
          </div>
          <div>
            <MainImage image={this.state.imageList.filter((image) =>

              { return image._id === this.state.mainImageId})[0]} clickMainImageForPopOut={this.clickMainImageForPopOut.bind(this)}/>
          </div>
        </div> : null
    }
  }

  render () {

    return (
      <div>
      {this.renderView()}
      </div>
    )
  }
}

export default ImageCarousel;


