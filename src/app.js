import express from "express";
import productsRouter from "../router/products.router.js"; 
import cartsRouter from "../router/carts.router.js"; 

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Registra las rutas de los enrutadores
app.use("/products", productsRouter);
app.use("/api/carts", cartsRouter);

app.get("/", (req,res)=>{
  res.send("hola mundo pagina principal")
})

// Definir el puerto
const PORT = 8080;

// Escuchar en el puerto
app.listen(PORT, ()=>{
  console.log("Escuchando el servidor 8080")
});