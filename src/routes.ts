import { Router } from "express";
import multer from "multer";
import { CreateNikkeController } from "./modules/nikkes/useCases/createNikke/CreateNikkeController";
import { UpdateNikkeController } from "./modules/nikkes/useCases/updateNikke/UpdateNikkeController";
import { FilterNikkesController } from "./modules/nikkes/useCases/filterNikkes/FilterNikkesController";
import { ListNikkesController } from "./modules/nikkes/useCases/listNikkes/ListNikkesController";
import { DeleteNikkeController } from "./modules/nikkes/useCases/deleteNikke/DeleteNikkeController";
import { UpdateNikkeImageController } from "./modules/nikkes/useCases/updateNikkeImage/UpdateNikkeImageController";
import { ListSingleNikkeController } from "./modules/nikkes/useCases/listSingleNikke/ListSingleNikkeController";
import uploadConfig from "./config/upload";

const routes = Router();
const { nikkes } = uploadConfig;
const uploadNikkeImage = multer(nikkes);

const createNikkeController = new CreateNikkeController();
const updateNikkeController = new UpdateNikkeController();
const updateNikkeImageController = new UpdateNikkeImageController();
const listNikkesController = new ListNikkesController();
const listSingleNikkeController = new ListSingleNikkeController();
const deleteNikkeController = new DeleteNikkeController();
const filterNikkesController = new FilterNikkesController();

routes.put("/nikke/:id", updateNikkeController.handle);
routes.patch(
  "/nikke/:name",
  uploadNikkeImage.single("imageFile"),
  updateNikkeImageController.handle
);
routes.post(
  "/nikke/",
  uploadNikkeImage.single("imageFile"),
  createNikkeController.handle
);
routes.get("/nikke/", listNikkesController.handle);
routes.delete("/nikke/:id", deleteNikkeController.handle);
routes.get("/filter/:rarity", filterNikkesController.handle);
routes.get("/nikke/filter/", filterNikkesController.handle);
routes.get("/nikke/:name", listSingleNikkeController.handle);

export { routes };
