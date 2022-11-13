import { Router } from "express";
import { CreateNikkeController } from "./modules/nikkes/useCases/createNikke/CreateNikkeController";
import { UpdateNikkeController } from "./modules/nikkes/useCases/updateNikke/UpdateNikkeController";
import { ListNikkesController } from "./modules/nikkes/useCases/listNikkes/ListNikkesController";
import { DeleteNikkeController } from "./modules/nikkes/useCases/deleteNikke/DeleteNikkeController";

const routes = Router();

const createNikkeController = new CreateNikkeController();
const updateNikkeController = new UpdateNikkeController();
const listNikkesController = new ListNikkesController();
const deleteNikkeController = new DeleteNikkeController();

routes.put("/nikke/:id", updateNikkeController.handle);
routes.post("/nikke/", createNikkeController.handle);
routes.get("/nikke/", listNikkesController.handle);
routes.delete("/nikke/:id", deleteNikkeController.handle);

export { routes };
