import request from "supertest";
import app from "../app.js";

// table to be used for testing
// const space = {
//   address: expect.any(String),
//   type_of_space: expect.any(String),
//   purpose_of_space: expect.any(String),
//   fraction_of_space: expect.any(String),
//   amenities: expect.any(Array),
//   additional_information: expect.any(String),
//   fromDate: expect.any(String),
//   toDate: expect.any(String),
//   images: expect.any(Array),
//   hourly_price: expect.any(Number),
// };

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
  // test("should return the actual space", async () => {
  //   const res = await request(app).get("/spaces");
  //   // arrange
  //   const actual = res.body;
  //   const expected = {
  //     success: true,
  //     payload: "expect.any(Array)",
  //   };
  //   // assert
  //   expect(actual).toEqual(expected);
  // });

  //
});
