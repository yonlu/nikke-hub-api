import { Router } from "express";
import { CreateNikkeController } from "./modules/nikkes/useCases/createNikke/CreateNikkeController";
import { UpdateNikkeController } from "./modules/nikkes/useCases/updateNikke/UpdateNikkeController";
import { FilterNikkesController } from "./modules/nikkes/useCases/filterNikkes/FilterNikkesController";
import { ListNikkesController } from "./modules/nikkes/useCases/listNikkes/ListNikkesController";

const routes = Router();

const createNikkeController = new CreateNikkeController();
const updateNikkeController = new UpdateNikkeController();
const listNikkesController = new ListNikkesController();
const filterNikkesController = new FilterNikkesController();

routes.put("/nikke/:id", updateNikkeController.handle);
routes.post("/nikke/", createNikkeController.handle);
routes.get("/nikke/", listNikkesController.handle);
routes.get("/filter/:rarity", filterNikkesController.handle);

export { routes };
