import supertest from "supertest";
import local from "../config/local"
const request = supertest(local.baseUrl)

export default request;