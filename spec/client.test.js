import 'jsdom-global/register';
import React from 'react';
import { shallow } from 'enzyme';
import ImageCarousel from '../Client/App.jsx';
import SideBar from '../Client/SideBar.jsx';
import SideBarEntry from '../Client/sideBarEntry.jsx';
import { mount } from 'enzyme';
import MainImage from '../Client/mainImage.jsx';
const faker = require('faker');
import renderer from 'react-test-renderer';
import PopOut from '../Client/PopOut.jsx';
import BigImage from '../Client/PopOutBigImage.jsx';
import BottomBar from '../Client/BottomBar.jsx';
import BottomBarEntry from '../Client/BottomBarEntry.jsx';
import Exit from '../Client/Exit.jsx';

test('truth serum', () => {
  expect('true').toBe('true');
});

var mockImageDataCreator = function(numberOfEnries) {

    var dataEntries = [];
    for (var i = 0; i < numberOfEnries; i++) {
      dataEntries.push({
         product: faker.commerce.productName().split(' ').join('-'),
         imageName: faker.commerce.productDescription(),
         color: faker.commerce.color().split(' ').join('-'),
         url: 'https://target-image-carousel.s3-us-west-1.amazonaws.com/Screen+Shot+2020-09-24+at+5.21.25+PM.png',
         alt: faker.image.abstract()
      })
    }
    return dataEntries;
  }

  var mockImages = mockImageDataCreator(7);
  var mockSideBarImages = mockImages.slice(0, 4)
  var mockOneImage = mockImages[0];
  var mockExtendImage = mockImages.slice(4, 5)[0]

describe('ImageCarousel', () => {

  test('should render the ImageCarousel component correctly', () => {
    const wrapper = shallow(<ImageCarousel />);

    expect(wrapper).toMatchSnapshot();
  })
  test('should render 1 SideBar', () => {
    const wrapper = shallow(<SideBar imageList={mockSideBarImages}/>);
    expect(wrapper.exists()).toBe(true);
  })

  test('should render one main image', () => {
    const wrapper = mount(<MainImage image={mockOneImage}/>);
    expect(wrapper.find('MainImage')).toHaveLength(1);
  })
})


describe('SideBar', () => {
  test('should render 4 sidebar entry image components', () => {
    const wrapper = mount(<SideBar imageList={mockSideBarImages} extendImage={mockExtendImage}/>);
    expect(wrapper.find(SideBarEntry)).toHaveLength(4);
  })
  test('each sidebar entry should have an img tag', () => {
    const wrapper = mount (<SideBarEntry image={mockOneImage}/>);
   expect(wrapper.find('img')).toHaveLength(1)
  })

})


describe('PopOut', () => {
  test('should render the PopOut component correctly', () => {
    const wrapper = shallow(<PopOut />);

    expect(wrapper).toMatchSnapshot();
  })
  test('should render 1 big image', () => {
    const wrapper = shallow(<PopOut />);
    expect(wrapper.find(BigImage)).toHaveLength(1)
  })
  test('should render 1 bottom bar', () => {
    const wrapper = shallow(<PopOut />);
    expect(wrapper.find(BottomBar)).toHaveLength(1)
  })
  test('should render bottom bar entry for each in image list', () => {
    const wrapper = shallow(<BottomBar imageList={mockImages}/>);
    expect(wrapper.find(BottomBarEntry)).toHaveLength(mockImages.length)
  })
  test('each sidebar entry should have an img tag', () => {
    const wrapper = mount (<BottomBarEntry image={mockOneImage}/>);
   expect(wrapper.find('img')).toHaveLength(1)
  })
  test('should conatin one exit component', () => {
    const wrapper = shallow(<PopOut />);
    expect(wrapper.find(Exit)).toHaveLength(1);
  })
})
