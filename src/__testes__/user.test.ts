import  request  from 'supertest';
import{app} from '../app';
import createConnetion from '../database'
describe("Users", async ()=>{
    beforeAll(async()=>{
        const connection = await createConnetion();
        await connection.runMigrations();
    })
    it("teste", async() =>{
        const response  = await request(app).post("/users").send({
            email : "gabrielmartinsferraz19100@gmail.com",
            name : "User exemplo "
        }
    )
    });

});