import { Router } from "express";
import { CreateNikkeController } from "./modules/nikkes/useCases/createNikke/CreateNikkeController";
import { UpdateNikkeController } from "./modules/nikkes/useCases/updateNikke/UpdateNikkeController";
import { ListNikkesController } from "./modules/nikkes/useCases/listNikkes/ListNikkesController";

const routes = Router();

const createNikkeController = new CreateNikkeController();
const updateNikkeController = new UpdateNikkeController();
const listNikkesController = new ListNikkesController();

routes.put("/nikke/:id", updateNikkeController.handle);
routes.post("/nikke/", createNikkeController.handle);
routes.get("/nikke/", listNikkesController.handle);

export { routes };
