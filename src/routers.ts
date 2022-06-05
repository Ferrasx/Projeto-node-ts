import {Router} from 'express';
import { surveyController} from './controller/surveyController';

import { UserControler } from './controller/UserController';

const router = Router();

const userController = new UserControler();
const SurveyController = new surveyController();
router.post("/users", userController.create);
router.post("/surveys", SurveyController.create);
router.get("/surveys", SurveyController.show);
export {router};