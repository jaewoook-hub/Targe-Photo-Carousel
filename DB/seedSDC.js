const faker = require('faker');
const fs = require('fs');
const { performance } = require('perf_hooks');
const writeProducts = fs.createWriteStream('./csv/imageCarouselProducts.csv');
writeProducts.write('Product,ImageName,Color,Url,Alt\n');
let start = performance.now();

// Data Generation Script goes here //
const dataGeneration = (writer, callback) => {
  let i = 10000000;
  let product = 0;

  write = () => {
    let BUFFER_READY = true;
    do {
      i -= 1;
      product += 1;
      let imageName = faker.commerce.productName();
      let color = faker.commerce.color().split(' ').join('-');
      let url = `https://loremflickr.com/640/480/clothes`; // should get a mapping to 1000 images on Amazon s3 soon
      let alt = faker.image.abstract();
      const data = `${product},${imageName},${color},${url},${alt}\n`;

      if (i === 0) {
        writer.write(data, callback);
      } else {
        BUFFER_READY = writer.write(data);
      }
    } while (i > 0 && BUFFER_READY);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write();
};

dataGeneration(writeProducts, () => {
  writeProducts.end();
});
// Data Generation Script ends here //

let end = performance.now();
let time = end - start;
console.log(time);

// Time it takes to generate the data into a csv file: 8.43 ms
// Time it takes to copy the csv file into postgreSQL database: 115002.086 ms (01:55.002)
// Total time: 115010.43 ms
// Took an extra 3 GB on my hard drive

// Time it takes to generate the data into a csv file: 8.43 ms
// Time it takes to copy the csv file into Cassandra database: 328.266 seconds = 328266 ms
// Total time: 328274.43 ms
// Took an extra 4 GB on my hard drive