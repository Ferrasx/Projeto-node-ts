import { EntityRepository, Repository } from "typeorm"
import { User } from "../models/User";
@EntityRepository(User)
class UseRepositories extends Repository<User>{
} 
export {UseRepositories}