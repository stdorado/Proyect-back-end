import express from "express";
import * as cartController from "../controllers/cart.controller.js";

const router = express.Router();

router.get("/", (req,res)=>{
    res.send("hola bienvenido a la ruta de cart")
} )
router.post("/", cartController.createCart);
router.get("/:cid", cartController.getCartById);
router.post("/:cid/product/:pid", cartController.addProductToCart);

export default router;