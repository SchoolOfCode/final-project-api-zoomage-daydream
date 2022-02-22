import request from "supertest"
import app from "../app.js"

const user =   {
  id:expect.any(Number),
    full_name: expect.any(String),
    username: expect.any(String),
    email: expect.any(String),
    date_of_birth: expect.any(String),
  }
  
// tests for the users table
describe("Get user for the users route works as expected", ()=>{

 // testing the status code to see it returns the right status code
 test('should return a status of 200', async () => { 
  //  arrange
  const res = await  request(app).get("/users")
  // assert
  expect(res.statusCode).toBe(200)
 })

 // testing the response body to see it return the actual content
 test('should return the actual user', async () => { 
  const res = await  request(app).get("/users")
  // arrange
  const actual = res.body
   const expected = {
      success: true,
      payload: "expect.any(Array)"
    };
    // assert
  expect(actual).toEqual(expected)
 })

//  test"Should return the actual payload expected"
 test('should return the actual payload', async () => { 
  const res = await  request(app).get("/users")
  // arrange
  const actual = res.body
  actual.payload.forEach((item) => {
    // assert
  expect(item).toEqual(user);
    });
 })
}) 