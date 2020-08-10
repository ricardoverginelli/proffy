const express = require("express");
const server = express();
const {
  pageLanding,
  pageStudy,
  pageGiveClasses,
  saveClasses,
} = require("./pages");

//config nunjucks
const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
  express: server,
  noCache: true,
});

server
  // receber os dados do req.body
  .use(express.urlencoded({ extended: true }))
  // Configurar arquivos estáticos (css, scripts, imgs)
  .use(express.static("public"))
  // Rotas da aplicação
  .get("/", pageLanding)
  .get("/study", pageStudy)
  .get("/give-classes", pageGiveClasses)
  .post("/save-classes", saveClasses)
  .listen(5500);
