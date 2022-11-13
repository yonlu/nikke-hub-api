import { Router } from "express";
import { CreateNikkeController } from "./modules/nikkes/useCases/createNikke/CreateNikkeController";
import { ListNikkesController } from "./modules/nikkes/useCases/listNikkes/ListNikkesController";

const routes = Router();

const createNikkeController = new CreateNikkeController();
const listNikkesController = new ListNikkesController();

routes.post("/nikke/", createNikkeController.handle);
routes.get("/nikke/", listNikkesController.handle);

export { routes };
