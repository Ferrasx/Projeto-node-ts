import { EntityRepository, Repository } from "typeorm"
import { Survey } from "../models/Survey";
@EntityRepository(Survey)
class SurveyRepositories extends Repository<Survey>{
} 
export {SurveyRepositories}