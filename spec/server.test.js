const supertest = require("supertest");
const app = require("../Server/server.js");
const Image = require('../DB/image.js')
const mongooseConnection = require("mongodb")
jest.setTimeout(30000);

describe('Truth Serum', () => {
  it('should test that true === true', () => {
    expect(true).toBe(true)
  })
})

describe("GET photos", () => {
  let connection;
  let db;
  beforeAll( async () => {
    connection = await mongooseConnection.connect(
      "mongodb://localhost/carouselTest",
      { useNewUrlParser: true, useUnifiedTopology: true });
      db = await connection.db("carouselTest")
  });

  afterAll( async () => {
    await connection.close();
    await db.close();
  });

test("Get /api/products", async () => {
  const image = await Image.create({
      _id: Math.floor(Math.random() * 100000) + 1000;
      product: 'lacroiz-6-pack',
      imageName: 'stock-studio-image',
      color: 'peach-pear',
      url: 'https://target-image-carousel.s3-us-west-1.amazonaws.com/Screen+Shot+2020-09-24+at+5.20.35+PM.png',
      alt: 'peach-pear-lacroix'
    })
    await supertest(app).get("/api/products").expect(200).then((response) => {
      expect(Array.isArray(response.body)).toBeTruthy();
    })
  })

  test("Get /api/products/api/products/:product/:color/carousel", async () => {
    const image = await Image.create({
        product: 'lacroiz-6-pack',
        imageName: 'stock-studio-image',
        color: 'peach-pear',
        url: 'https://target-image-carousel.s3-us-west-1.amazonaws.com/Screen+Shot+2020-09-24+at+5.20.35+PM.png',
        alt: 'peach-pear-lacroix'
      })
      await supertest(app).get("/api/products/standard-fit-hoodied-sweatshirt/baby-blue/carousel").expect(200).then((response) => {
        expect(Array.isArray(response.body)).toBeTruthy();
        expect(response.body.length).toBe(7);
      })
    })
})
