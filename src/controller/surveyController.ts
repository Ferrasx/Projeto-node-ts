import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import {SurveyRepositories} from "../repositores/SurveyRepositories"
class surveyController{
    async create(request : Request , response: Response){

        const {title , description} = request.body;
        const surveyRepositories = getCustomRepository(SurveyRepositories);
        const survey =  surveyRepositories.create({
            title,
            description
        });
        await surveyRepositories.save(survey);
        return response.status(201).json(survey);
    }
    async show(request : Request , response: Response){
        const surveyRepositories = getCustomRepository(SurveyRepositories);
        const all = await surveyRepositories.find();
        return response.json(all);
    }
}
export { surveyController };
