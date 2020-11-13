const mongoose = require('mongoose');
const db = require('./index.js')
const Image = require('./image.js')
const faker = require('faker');

//function to insert needed pictures

var realData = [
  {
    product: 1,
    imageName: 'stock-studio-image',
    color: 'baby-blue',
    url: 'https://target-image-carousel.s3-us-west-1.amazonaws.com/Screen+Shot+2020-09-24+at+5.20.35+PM.png',
    alt: 'baby-blue-sweatshirt'
  },
  {
    product: 1,
    imageName: "girl-modelingSS1",
    color: "all",
    url: "https://target-image-carousel.s3-us-west-1.amazonaws.com/Screen+Shot+2020-10-08+at+4.04.32+PM.png",
    alt: "baby-blue-sweatshirt",
    __v: 0
},
{
    product: 1,
    imageName: "girl-modelingSS2",
    color: "all",
    url: "https://target-image-carousel.s3-us-west-1.amazonaws.com/Screen+Shot+2020-09-24+at+5.21.10+PM.png",
    alt: "baby-blue-sweatshirt",
    __v: 0
},
{
    product: 1,
    imageName: "girl-modelingSS3",
    color: "all",
    url: "https://target-image-carousel.s3-us-west-1.amazonaws.com/Screen+Shot+2020-10-08+at+4.06.16+PM.png",
    alt: "baby-blue-sweatshirt",
    __v: 0
},
{
    product: 1,
    imageName: "girl-modelingSS4",
    color: "all",
    url: "https://target-image-carousel.s3-us-west-1.amazonaws.com/Screen+Shot+2020-10-08+at+4.08.14+PM.png",
    alt: "baby-blue-sweatshirt",
    __v: 0
},
{
    product: 1,
    imageName: "girl-modelingSS5",
    color: "all",
    url: "https://target-image-carousel.s3-us-west-1.amazonaws.com/Screen+Shot+2020-10-08+at+4.09.38+PM.png",
    alt: "baby-blue-sweatshirt",
    __v: 0
},
{
    product: 1,
    imageName: "girl-modelingSS6",
    color: "all",
    url: "https://target-image-carousel.s3-us-west-1.amazonaws.com/Screen+Shot+2020-10-08+at+4.09.10+PM.png",
    alt: "baby-blue-sweatshirt",
    __v: 0
}
]

//URL randomizer from S3 function
var randomImageUrls = [
  '51e0d7444b4faa0df7c5d57bc32f3e7b1d3ac3e456587248772b7ad292_640.jpg', '52e6dd4a4e50a814f1dc8460962e33791c3ad6e04e5074417c2f73d5914ac2_640.jpg', '53e3dd404c52ab14f1dc8460962e33791c3ad6e04e507440712c7add964dcd_640.jpg', '54e2d54b4350aa14f1dc8460962e33791c3ad6e04e50744172277ed7914fc2_640.jpg', '57e4d7404357b10ff3d8992cc12c30771037dbf85254794e722e7ed3924a_640.jpg', '57e5d544495bae14f1dc8460962e33791c3ad6e04e507441722872d69e4ec6_640.jpg', '57e8dd444851ad14f1dc8460962e33791c3ad6e04e5074417d2e7ed69f4cc4_640.jpg', '5fe7d7414856b10ff3d8992cc12c30771037dbf85254784a73287bd59144_640.jpg', 'adam-birkett-75EFpyXu3Wg-unsplash.jpg', 'anton-van-der-weijst-a4eax-dOpkk-unsplash.jpg', 'averie-woodard-Av_NirIguEc-unsplash.jpg', 'brandi-redd-aJTiW00qqtI-unsplash.jpg', 'carson-arias-7Z03R1wOdmI-unsplash.jpg', 'carson-arias-yLSbICGMV3I-unsplash.jpg', 'efe-kurnaz-RnCPiXixooY-unsplash.jpg', 'florian-klauer-mk7D-4UCfmg-unsplash.jpg', 'ghebby-farD8hkcacU-unsplash.jpg', 'hans-vivek-mBu44hd3ea0-unsplash.jpg', 'ian-dooley-hpTH5b6mo2s-unsplash.jpg', 'ian-rX12B5uX7QM-unsplash.jpg', 'jakayla-toney-iTiXvQw91nE-unsplash.jpg', 'jake-blucker-tMzCrBkM99Y-unsplash.jpg', 'jan-kahanek-A_Ncbi-RH6s-unsplash.jpg', 'jeremy-bishop-EwKXn5CapA4-unsplash.jpg', 'kae-ng-PZw1B7JFW5w-unsplash.jpg', 'katie-moum-iRMUDX0kyOc-unsplash.jpg', 'krystal-ng-PrQqQVPzmlw-unsplash.jpg', 'laura-vinck-Hyu76loQLdk-unsplash.jpg', 'lidya-nada-tXz6g8JYYoI-unsplash.jpg', 'marcus-wallis-ja8nQ-WsFUM-unsplash.jpg', 'mark-adriane-muS2RraYRuQ-unsplash.jpg', 'nico-nazaire-hXqeS25fkmU-unsplash.jpg', 'olga-serjantu-Nn1Yu2uCmwg-unsplash.jpg', 'pat-whelen-FFDcZr49Dmw-unsplash.jpg', 'pexels-dids-3844796.jpg', 'pexels-dids-3848670.jpg', 'pexels-karolina-grabowska-4016579.jpg', 'pexels-karolina-grabowska-4033325.jpg', 'pexels-karolina-grabowska-4194850.jpg', 'pexels-karolina-grabowska-4238994.jpg', 'pexels-karolina-grabowska-4386408.jpg', 'pierre-chatel-innocenti--RRvMkEsQck-unsplash.jpg', 'pranav-kumar-jain--A-4wZ2EEkU-unsplash.jpg', 'pranav-kumar-jain-5cOscoRdLcA-unsplash.jpg', 'ryoji-iwata-n31JPLu8_Pw-unsplash.jpg', 'sahil-sorathiya-YW3F-C5e8SE-unsplash.jpg', 'saketh-garuda-fJzWKbEgGAQ-unsplash.jpg', 'tyler-easton-faixctm2YRQ-unsplash.jpg', 'vicko-mozara-m82uh_vamhg-unsplash.jpg', 'warren-wong-bh4LQHcOcxE-unsplash.jpg'
]

var imageRandomizer = function (array) {
   var randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex];
}



var fakeImageDataCreator = function(numberOfEnries) {

  var dataEntries = [];
var currentID = 2
var referenceIndex = 0
  for (var i = 0; i < numberOfEnries - 7; i++) {
         if (i === referenceIndex + 7) {
          referenceIndex += 7
          currentID++
        }
    dataEntries.push({
       product: currentID,
       imageName: faker.commerce.productDescription(),
       color: faker.commerce.color().split(' ').join('-'),
       url: 'https://target-image-carousel.s3-us-west-1.amazonaws.com/' + imageRandomizer(randomImageUrls),
       alt: faker.image.abstract()
    })
  }
  return dataEntries;
}

let fakeData = fakeImageDataCreator(700);
let data = realData.concat(fakeData)

Image.create(data)
.then(() => mongoose.disconnect())
.catch(err => console.log(err))

// const insertImageData = function () {
//   Image.create(data)
//     .then(() => db.disconnect());
// };

// insertImageData();


