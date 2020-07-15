import { Router } from "express";

import dealRoutes from "./deal.routes";
import orderRoutes from "./order.routes";

const routes = Router();

routes.use("/deals", dealRoutes);
routes.use("/orders", orderRoutes);

export default routes;
