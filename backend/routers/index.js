module.exports = app => {
  require("./anexos")(app);
  require("./armario")(app);
  require("./borda")(app);
  require("./carac_micromorfologica")(app);
  require("./classe")(app);
  require("./cor")(app);
  require("./dominio")(app);
  require("./especie")(app);
  require("./exudato")(app);
  require("./familia")(app);
  require("./filo")(app);
  require("./genero")(app);
  require("./grupo_pesquisa")(app);
  require("./habitat_ani")(app);
  require("./habitat_veg")(app);
  require("./habitat")(app);
  require("./hospedeiro")(app);
  require("./imagem")(app);
  require("./laboratorio")(app);
  require("./lote")(app);
  require("./metodo_preservacao")(app);
  require("./microorganismo")(app);
  require("./ordem")(app);
  require("./pesquisador")(app);
  require("./pigmento")(app);
  require("./posicao")(app);
  require("./prateleira")(app);
  require("./referencia")(app);
  require("./reino")(app);
  require("./relevo")(app);
  require("./repique")(app);
  require("./sitio")(app);
  require("./sub_colecao")(app);
  require("./sub_especie")(app);
  require("./substrato")(app);
  require("./textura")(app);
  require("./unidade")(app);
  require("./variedade")(app);
}