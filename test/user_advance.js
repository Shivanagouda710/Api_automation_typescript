import { it } from "mocha";
// import supertest from "supertest";
// const request = supertest("https://gorest.co.in/public/v2")
import request from "../config/common";
import {  expect } from "chai";
const {faker}= require("@faker-js/faker")
const Token = "eb036d7bc39a4f4b6e6e07bf221a67eb91b4d8cd7d7f32aa911b91efb182afef"



describe('Testcase1', () => {
    
    let user_id = ""
it('Testput',  async () => {


   const  data={
        name: 'stark1',
        email: "stark"+Math.floor(Math.random()*9999)+"@gmail.com",
        gender: 'male',
        status: 'active'
      }

    const res = await request.post("/users").set("authorization",`Bearer ${Token}`).send(data)
    console.log(res.body);
    user_id=res.body.id
    console.log("your user id = "+user_id);


    
});


it('get id ', async() => {
    
    const res = await request.get(`/users/${user_id}`).set("authorization",`Bearer ${Token}`)
    console.log(res.body);
});



it('Update name and check', async() => {
    const data = {

        name: 'stark111'+Math.floor(Math.random()*9999),
        email: "stark"+Math.floor(Math.random()*9999)+"@gmail.com",
        gender: 'male',
        status: 'active'
    }

    const res = await request.put(`/users/${user_id}`).set("authorization",`Bearer ${Token}`).send(data)
    console.log(res.body);
});


it('After updating name  ', async() => {
    
    const res = await request.get(`/users/${user_id}`).set("authorization",`Bearer ${Token}`)
    console.log(res.body);
});



it('Delete user', async () => {
 
    const res = await request.del(`/users/${user_id}`).set("authorization",`Bearer ${Token}`)
    console.log(res.status);
});



it('Delete user', async () => {
 
    const res = await request.del(`/users/${user_id}`).set("authorization",`Bearer ${Token}`)
    expect(true).equals(false)
});


});