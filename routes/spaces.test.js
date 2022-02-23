import request from "supertest";
import app from "../app.js";

// table to be used for testing
const space = {
  address: expect.any(String),
  type_of_space: expect.any(String),
  purpose_of_space: expect.any(String),
  fraction_of_space: expect.any(String),
  amenities: expect.any(Array),
  additional_information: expect.any(String),
  fromDate: expect.any(String),
  toDate: expect.any(String),
  images: expect.any(Array),
  hourly_price: expect.any(Number),
};

// test for the spaces table to make sure it is responding
describe("Testing that spaces route is working as expected", () => {
  // testing to check if it returns a status code of 200
  test("Should return a status of 200", async () => {
    //  arrange
    const res = await request(app).get("/spaces");
    // assert
    expect(res.statusCode).toBe(200);
  });

  //testing the contents of the body
  test("should return the actual space", async () => {
    const res = await request(app).get("/spaces");
    // arrange
    const actual = res.body;
    const expected = {
      success: true,
      payload: expect.any(Array),
    };
    // assert
    expect(actual).toEqual(expected);
  });
  // testing to check if it return the actual payload

  test("Should return the actual payload", async () => {
    const res = await request(app).get("/spaces");
    //arrange
    const actual = res.body;
    actual.payload.forEach((item) => {
      //assert
      expect(item).toEqual(space);
    });
  });
  //testing POST request
  test("Should POST a space to the spaces table", async () => {
    const data = {
      address: "5 Nowhere Road, London, UK",
      type_of_space: "house",
      purpose_of_space: "cooking",
      fraction_of_space: "private room",
      amenities: ["shower", "fridge"],
      additional_information: "Exceptional view of rolling hills",
      fromDate: "2022-02-07T00:00:00.000Z",
      toDate: "2022-02-18T00:00:00.000Z",
      images: [
        "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
      hourly_price: 70000.0,
    };
    await request(app).post("/spaces").send(data).expect(200).then(async (response) =>{
      //Check the response
      expect(response.body.id).toBeTruthy();
      expect(response.body.address).toBe(data.address)
      expect(response.body.type_of_space).toBe(data.type_of_space)
      expect(response.body.purpose_of_space).toBe(data.address)
      expect(response.body.address).toBe(data.address)
      expect(response.body.address).toBe(data.address)
      expect(response.body.address).toBe(data.address)
      expect(response.body.address).toBe(data.address)
      expect(response.body.address).toBe(data.address)
      expect(response.body.address).toBe(data.address)
      expect(response.body.address).toBe(data.address)
    
    }
  });
});
