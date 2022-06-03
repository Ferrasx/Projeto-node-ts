import{Request, Response} from "express"; //importei de express Requeste and response
import { getRepository } from "typeorm"; //importei de typeorm getRepository(criar um repositorio para minha entidade)
import { User } from "../models/User";
class UserControler{
    async create(request :Request, response: Response){ //criação da request and response
        const {name , email} =  request.body; // estou fazendo a requisição do corpo do nosso objeto
        const userRepository = getRepository(User);  // Estou atribuindo para UserRepository o que está dentro de getRepository passando como paramentro meu objeto
        const user = userRepository.create({
            name, email
        })
        await userRepository.save(user);
        return response.json(user); // envio da resposta para o banco
    }
}
export {UserControler}