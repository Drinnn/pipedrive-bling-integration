import { Router } from "express";

import DealController from "../controllers/DealController";

const dealRouter = Router();

dealRouter.post("/", DealController.integrate);

export default dealRouter;
