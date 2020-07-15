import { Router } from "express";

import OrderController from "../controllers/OrderController";

const orderRouter = Router();

orderRouter.get("/", OrderController.getAll);

export default orderRouter;
