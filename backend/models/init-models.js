var DataTypes = require("sequelize").DataTypes;
var _anexos = require("./anexos");
var _armario = require("./armario");
var _autenticacao = require("./autenticacao");
var _borda = require("./borda");
var _carac_micromorfologica = require("./carac_micromorfologica");
var _classe = require("./classe");
var _cor = require("./cor");
var _doacao = require("./doacao");
var _dominio = require("./dominio");
var _especie = require("./especie");
var _exudato = require("./exudato");
var _familia = require("./familia");
var _filo = require("./filo");
var _genero = require("./genero");
var _grupo_pesquisa = require("./grupo_pesquisa");
var _habitat = require("./habitat");
var _habitat_ani = require("./habitat_ani");
var _habitat_veg = require("./habitat_veg");
var _hospedeiro = require("./hospedeiro");
var _imagem = require("./imagem");
var _laboratorio = require("./laboratorio");
var _lote = require("./lote");
var _metodo_preservacao = require("./metodo_preservacao");
var _microorganismo = require("./microorganismo");
var _microorganismo_has_anexos = require("./microorganismo_has_anexos");
var _microorganismo_has_carac_micromorfologica = require("./microorganismo_has_carac_micromorfologica");
var _microorganismo_has_imagem_macro = require("./microorganismo_has_imagem_macro");
var _microorganismo_has_imagem_micro = require("./microorganismo_has_imagem_micro");
var _microorganismo_has_referencia_taxa = require("./microorganismo_has_referencia_taxa");
var _microorganismo_has_referencia_temp = require("./microorganismo_has_referencia_temp");
var _ordem = require("./ordem");
var _pesquisador = require("./pesquisador");
var _pigmento = require("./pigmento");
var _posicao = require("./posicao");
var _prateleira = require("./prateleira");
var _referencia = require("./referencia");
var _reino = require("./reino");
var _relevo = require("./relevo");
var _repique = require("./repique");
var _repique_has_imagem = require("./repique_has_imagem");
var _repique_has_metodo_preservacao = require("./repique_has_metodo_preservacao");
var _repique_has_referencia = require("./repique_has_referencia");
var _sitio = require("./sitio");
var _sub_colecao = require("./sub_colecao");
var _sub_especie = require("./sub_especie");
var _substrato = require("./substrato");
var _textura = require("./textura");
var _unidade = require("./unidade");
var _users = require("./users");
var _variedade = require("./variedade");

function initModels(sequelize) {
  var anexos = _anexos(sequelize, DataTypes);
  var armario = _armario(sequelize, DataTypes);
  var autenticacao = _autenticacao(sequelize, DataTypes);
  var borda = _borda(sequelize, DataTypes);
  var carac_micromorfologica = _carac_micromorfologica(sequelize, DataTypes);
  var classe = _classe(sequelize, DataTypes);
  var cor = _cor(sequelize, DataTypes);
  var doacao = _doacao(sequelize, DataTypes);
  var dominio = _dominio(sequelize, DataTypes);
  var especie = _especie(sequelize, DataTypes);
  var exudato = _exudato(sequelize, DataTypes);
  var familia = _familia(sequelize, DataTypes);
  var filo = _filo(sequelize, DataTypes);
  var genero = _genero(sequelize, DataTypes);
  var grupo_pesquisa = _grupo_pesquisa(sequelize, DataTypes);
  var habitat = _habitat(sequelize, DataTypes);
  var habitat_ani = _habitat_ani(sequelize, DataTypes);
  var habitat_veg = _habitat_veg(sequelize, DataTypes);
  var hospedeiro = _hospedeiro(sequelize, DataTypes);
  var imagem = _imagem(sequelize, DataTypes);
  var laboratorio = _laboratorio(sequelize, DataTypes);
  var lote = _lote(sequelize, DataTypes);
  var metodo_preservacao = _metodo_preservacao(sequelize, DataTypes);
  var microorganismo = _microorganismo(sequelize, DataTypes);
  var microorganismo_has_anexos = _microorganismo_has_anexos(sequelize, DataTypes);
  var microorganismo_has_carac_micromorfologica = _microorganismo_has_carac_micromorfologica(sequelize, DataTypes);
  var microorganismo_has_imagem_macro = _microorganismo_has_imagem_macro(sequelize, DataTypes);
  var microorganismo_has_imagem_micro = _microorganismo_has_imagem_micro(sequelize, DataTypes);
  var microorganismo_has_referencia_taxa = _microorganismo_has_referencia_taxa(sequelize, DataTypes);
  var microorganismo_has_referencia_temp = _microorganismo_has_referencia_temp(sequelize, DataTypes);
  var ordem = _ordem(sequelize, DataTypes);
  var pesquisador = _pesquisador(sequelize, DataTypes);
  var pigmento = _pigmento(sequelize, DataTypes);
  var posicao = _posicao(sequelize, DataTypes);
  var prateleira = _prateleira(sequelize, DataTypes);
  var referencia = _referencia(sequelize, DataTypes);
  var reino = _reino(sequelize, DataTypes);
  var relevo = _relevo(sequelize, DataTypes);
  var repique = _repique(sequelize, DataTypes);
  var repique_has_imagem = _repique_has_imagem(sequelize, DataTypes);
  var repique_has_metodo_preservacao = _repique_has_metodo_preservacao(sequelize, DataTypes);
  var repique_has_referencia = _repique_has_referencia(sequelize, DataTypes);
  var sitio = _sitio(sequelize, DataTypes);
  var sub_colecao = _sub_colecao(sequelize, DataTypes);
  var sub_especie = _sub_especie(sequelize, DataTypes);
  var substrato = _substrato(sequelize, DataTypes);
  var textura = _textura(sequelize, DataTypes);
  var unidade = _unidade(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);
  var variedade = _variedade(sequelize, DataTypes);

  anexos.belongsToMany(microorganismo, { as: 'microorganismo_idmicroorganismo_microorganismos', through: microorganismo_has_anexos, foreignKey: "anexos_idanexos", otherKey: "microorganismo_idmicroorganismo" });
  carac_micromorfologica.belongsToMany(microorganismo, { as: 'microorganismo_idmicroorganismo_microorganismo_microorganismo_has_carac_micromorfologicas', through: microorganismo_has_carac_micromorfologica, foreignKey: "carac_micromorfologica_idcarac_micromorfologica", otherKey: "microorganismo_idmicroorganismo" });
  imagem.belongsToMany(microorganismo, { as: 'microorganismo_idmicroorganismo_microorganismo_microorganismo_has_imagem_macros', through: microorganismo_has_imagem_macro, foreignKey: "imagem_idimagem", otherKey: "microorganismo_idmicroorganismo" });
  imagem.belongsToMany(microorganismo, { as: 'microorganismo_idmicroorganismo_microorganismo_microorganismo_has_imagem_micros', through: microorganismo_has_imagem_micro, foreignKey: "imagem_idimagem", otherKey: "microorganismo_idmicroorganismo" });
  imagem.belongsToMany(repique, { as: 'repique_idrepique_repiques', through: repique_has_imagem, foreignKey: "imagem_idimagem", otherKey: "repique_idrepique" });
  metodo_preservacao.belongsToMany(repique, { as: 'repique_idrepique_repique_repique_has_metodo_preservacaos', through: repique_has_metodo_preservacao, foreignKey: "metodo_preservacao_idmetodo_preservacao", otherKey: "repique_idrepique" });
  microorganismo.belongsToMany(anexos, { as: 'anexos_idanexos_anexos', through: microorganismo_has_anexos, foreignKey: "microorganismo_idmicroorganismo", otherKey: "anexos_idanexos" });
  microorganismo.belongsToMany(carac_micromorfologica, { as: 'carac_micromorfologica_idcarac_micromorfologica_carac_micromorfologicas', through: microorganismo_has_carac_micromorfologica, foreignKey: "microorganismo_idmicroorganismo", otherKey: "carac_micromorfologica_idcarac_micromorfologica" });
  microorganismo.belongsToMany(imagem, { as: 'imagem_idimagem_imagems', through: microorganismo_has_imagem_macro, foreignKey: "microorganismo_idmicroorganismo", otherKey: "imagem_idimagem" });
  microorganismo.belongsToMany(imagem, { as: 'imagem_idimagem_imagem_microorganismo_has_imagem_micros', through: microorganismo_has_imagem_micro, foreignKey: "microorganismo_idmicroorganismo", otherKey: "imagem_idimagem" });
  microorganismo.belongsToMany(referencia, { as: 'referencia_idreferencia_referencia', through: microorganismo_has_referencia_taxa, foreignKey: "microorganismo_idmicroorganismo", otherKey: "referencia_idreferencia" });
  microorganismo.belongsToMany(referencia, { as: 'referencia_idreferencia_referencia_microorganismo_has_referencia_temps', through: microorganismo_has_referencia_temp, foreignKey: "microorganismo_idmicroorganismo", otherKey: "referencia_idreferencia" });
  referencia.belongsToMany(microorganismo, { as: 'microorganismo_idmicroorganismo_microorganismo_microorganismo_has_referencia_taxas', through: microorganismo_has_referencia_taxa, foreignKey: "referencia_idreferencia", otherKey: "microorganismo_idmicroorganismo" });
  referencia.belongsToMany(microorganismo, { as: 'microorganismo_idmicroorganismo_microorganismo_microorganismo_has_referencia_temps', through: microorganismo_has_referencia_temp, foreignKey: "referencia_idreferencia", otherKey: "microorganismo_idmicroorganismo" });
  referencia.belongsToMany(repique, { as: 'repique_idrepique_repique_repique_has_referencia', through: repique_has_referencia, foreignKey: "referencia_idreferencia", otherKey: "repique_idrepique" });
  repique.belongsToMany(imagem, { as: 'imagem_idimagem_imagem_repique_has_imagems', through: repique_has_imagem, foreignKey: "repique_idrepique", otherKey: "imagem_idimagem" });
  repique.belongsToMany(metodo_preservacao, { as: 'metodo_preservacao_idmetodo_preservacao_metodo_preservacaos', through: repique_has_metodo_preservacao, foreignKey: "repique_idrepique", otherKey: "metodo_preservacao_idmetodo_preservacao" });
  repique.belongsToMany(referencia, { as: 'referencia_idreferencia_referencia_repique_has_referencia', through: repique_has_referencia, foreignKey: "repique_idrepique", otherKey: "referencia_idreferencia" });
  microorganismo_has_anexos.belongsTo(anexos, { as: "anexos_idanexos_anexo", foreignKey: "anexos_idanexos"});
  anexos.hasMany(microorganismo_has_anexos, { as: "microorganismo_has_anexos", foreignKey: "anexos_idanexos"});
  prateleira.belongsTo(armario, { as: "armario_idarmario_armario", foreignKey: "armario_idarmario"});
  armario.hasMany(prateleira, { as: "prateleiras", foreignKey: "armario_idarmario"});
  microorganismo.belongsTo(borda, { as: "borda_idborda_borda", foreignKey: "borda_idborda"});
  borda.hasMany(microorganismo, { as: "microorganismos", foreignKey: "borda_idborda"});
  microorganismo_has_carac_micromorfologica.belongsTo(carac_micromorfologica, { as: "carac_micromorfologica_idcarac_micromorfologica_carac_micromorfologica", foreignKey: "carac_micromorfologica_idcarac_micromorfologica"});
  carac_micromorfologica.hasMany(microorganismo_has_carac_micromorfologica, { as: "microorganismo_has_carac_micromorfologicas", foreignKey: "carac_micromorfologica_idcarac_micromorfologica"});
  ordem.belongsTo(classe, { as: "classe_idclasse_classe", foreignKey: "classe_idclasse"});
  classe.hasMany(ordem, { as: "ordems", foreignKey: "classe_idclasse"});
  microorganismo.belongsTo(cor, { as: "cor_colonia_cor", foreignKey: "cor_colonia"});
  cor.hasMany(microorganismo, { as: "microorganismos", foreignKey: "cor_colonia"});
  microorganismo.belongsTo(cor, { as: "cor_exudato_cor", foreignKey: "cor_exudato"});
  cor.hasMany(microorganismo, { as: "cor_exudato_microorganismos", foreignKey: "cor_exudato"});
  microorganismo.belongsTo(cor, { as: "cor_pigmento_cor", foreignKey: "cor_pigmento"});
  cor.hasMany(microorganismo, { as: "cor_pigmento_microorganismos", foreignKey: "cor_pigmento"});
  reino.belongsTo(dominio, { as: "dominio_iddominio_dominio", foreignKey: "dominio_iddominio"});
  dominio.hasMany(reino, { as: "reinos", foreignKey: "dominio_iddominio"});
  sub_especie.belongsTo(especie, { as: "especie_idespecie_especie", foreignKey: "especie_idespecie"});
  especie.hasMany(sub_especie, { as: "sub_especies", foreignKey: "especie_idespecie"});
  microorganismo.belongsTo(exudato, { as: "exudato_idexudato_exudato", foreignKey: "exudato_idexudato"});
  exudato.hasMany(microorganismo, { as: "microorganismos", foreignKey: "exudato_idexudato"});
  genero.belongsTo(familia, { as: "familia_idfamilia_familium", foreignKey: "familia_idfamilia"});
  familia.hasMany(genero, { as: "generos", foreignKey: "familia_idfamilia"});
  classe.belongsTo(filo, { as: "filo_idfilo_filo", foreignKey: "filo_idfilo"});
  filo.hasMany(classe, { as: "classes", foreignKey: "filo_idfilo"});
  especie.belongsTo(genero, { as: "genero_idgenero_genero", foreignKey: "genero_idgenero"});
  genero.hasMany(especie, { as: "especies", foreignKey: "genero_idgenero"});
  repique.belongsTo(grupo_pesquisa, { as: "grupo_pesquisa_idgrupo_pesquisa_grupo_pesquisa", foreignKey: "grupo_pesquisa_idgrupo_pesquisa"});
  grupo_pesquisa.hasMany(repique, { as: "repiques", foreignKey: "grupo_pesquisa_idgrupo_pesquisa"});
  microorganismo.belongsTo(habitat, { as: "habitat_idhabitat_habitat", foreignKey: "habitat_idhabitat"});
  habitat.hasMany(microorganismo, { as: "microorganismos", foreignKey: "habitat_idhabitat"});
  habitat.belongsTo(habitat_ani, { as: "habitat_ani_idhabitat_ani_habitat_ani", foreignKey: "habitat_ani_idhabitat_ani"});
  habitat_ani.hasMany(habitat, { as: "habitats", foreignKey: "habitat_ani_idhabitat_ani"});
  habitat.belongsTo(habitat_veg, { as: "habitat_veg_idhabitat_veg_habitat_veg", foreignKey: "habitat_veg_idhabitat_veg"});
  habitat_veg.hasMany(habitat, { as: "habitats", foreignKey: "habitat_veg_idhabitat_veg"});
  habitat_ani.belongsTo(hospedeiro, { as: "hospedeiro_idhospedeiro_hospedeiro", foreignKey: "hospedeiro_idhospedeiro"});
  hospedeiro.hasMany(habitat_ani, { as: "habitat_anis", foreignKey: "hospedeiro_idhospedeiro"});
  habitat_veg.belongsTo(hospedeiro, { as: "hospedeiro_idhospedeiro_hospedeiro", foreignKey: "hospedeiro_idhospedeiro"});
  hospedeiro.hasMany(habitat_veg, { as: "habitat_vegs", foreignKey: "hospedeiro_idhospedeiro"});
  microorganismo_has_imagem_macro.belongsTo(imagem, { as: "imagem_idimagem_imagem", foreignKey: "imagem_idimagem"});
  imagem.hasMany(microorganismo_has_imagem_macro, { as: "microorganismo_has_imagem_macros", foreignKey: "imagem_idimagem"});
  microorganismo_has_imagem_micro.belongsTo(imagem, { as: "imagem_idimagem_imagem", foreignKey: "imagem_idimagem"});
  imagem.hasMany(microorganismo_has_imagem_micro, { as: "microorganismo_has_imagem_micros", foreignKey: "imagem_idimagem"});
  repique_has_imagem.belongsTo(imagem, { as: "imagem_idimagem_imagem", foreignKey: "imagem_idimagem"});
  imagem.hasMany(repique_has_imagem, { as: "repique_has_imagems", foreignKey: "imagem_idimagem"});
  microorganismo.belongsTo(laboratorio, { as: "laboratorio_mol_laboratorio", foreignKey: "laboratorio_mol"});
  laboratorio.hasMany(microorganismo, { as: "microorganismos", foreignKey: "laboratorio_mol"});
  posicao.belongsTo(lote, { as: "lote_idlote_lote", foreignKey: "lote_idlote"});
  lote.hasMany(posicao, { as: "posicaos", foreignKey: "lote_idlote"});
  repique_has_metodo_preservacao.belongsTo(metodo_preservacao, { as: "metodo_preservacao_idmetodo_preservacao_metodo_preservacao", foreignKey: "metodo_preservacao_idmetodo_preservacao"});
  metodo_preservacao.hasMany(repique_has_metodo_preservacao, { as: "repique_has_metodo_preservacaos", foreignKey: "metodo_preservacao_idmetodo_preservacao"});
  microorganismo_has_anexos.belongsTo(microorganismo, { as: "microorganismo_idmicroorganismo_microorganismo", foreignKey: "microorganismo_idmicroorganismo"});
  microorganismo.hasMany(microorganismo_has_anexos, { as: "microorganismo_has_anexos", foreignKey: "microorganismo_idmicroorganismo"});
  microorganismo_has_carac_micromorfologica.belongsTo(microorganismo, { as: "microorganismo_idmicroorganismo_microorganismo", foreignKey: "microorganismo_idmicroorganismo"});
  microorganismo.hasMany(microorganismo_has_carac_micromorfologica, { as: "microorganismo_has_carac_micromorfologicas", foreignKey: "microorganismo_idmicroorganismo"});
  microorganismo_has_imagem_macro.belongsTo(microorganismo, { as: "microorganismo_idmicroorganismo_microorganismo", foreignKey: "microorganismo_idmicroorganismo"});
  microorganismo.hasMany(microorganismo_has_imagem_macro, { as: "microorganismo_has_imagem_macros", foreignKey: "microorganismo_idmicroorganismo"});
  microorganismo_has_imagem_micro.belongsTo(microorganismo, { as: "microorganismo_idmicroorganismo_microorganismo", foreignKey: "microorganismo_idmicroorganismo"});
  microorganismo.hasMany(microorganismo_has_imagem_micro, { as: "microorganismo_has_imagem_micros", foreignKey: "microorganismo_idmicroorganismo"});
  microorganismo_has_referencia_taxa.belongsTo(microorganismo, { as: "microorganismo_idmicroorganismo_microorganismo", foreignKey: "microorganismo_idmicroorganismo"});
  microorganismo.hasMany(microorganismo_has_referencia_taxa, { as: "microorganismo_has_referencia_taxas", foreignKey: "microorganismo_idmicroorganismo"});
  microorganismo_has_referencia_temp.belongsTo(microorganismo, { as: "microorganismo_idmicroorganismo_microorganismo", foreignKey: "microorganismo_idmicroorganismo"});
  microorganismo.hasMany(microorganismo_has_referencia_temp, { as: "microorganismo_has_referencia_temps", foreignKey: "microorganismo_idmicroorganismo"});
  repique.belongsTo(microorganismo, { as: "microorganismo_idmicroorganismo_microorganismo", foreignKey: "microorganismo_idmicroorganismo"});
  microorganismo.hasMany(repique, { as: "repiques", foreignKey: "microorganismo_idmicroorganismo"});
  familia.belongsTo(ordem, { as: "ordem_idordem_ordem", foreignKey: "ordem_idordem"});
  ordem.hasMany(familia, { as: "familia", foreignKey: "ordem_idordem"});
  microorganismo.belongsTo(pesquisador, { as: "pesquisador_coleta_pesquisador", foreignKey: "pesquisador_coleta"});
  pesquisador.hasMany(microorganismo, { as: "microorganismos", foreignKey: "pesquisador_coleta"});
  microorganismo.belongsTo(pesquisador, { as: "pesquisador_isolamento_pesquisador", foreignKey: "pesquisador_isolamento"});
  pesquisador.hasMany(microorganismo, { as: "pesquisador_isolamento_microorganismos", foreignKey: "pesquisador_isolamento"});
  microorganismo.belongsTo(pesquisador, { as: "pesquisador_ident_pesquisador", foreignKey: "pesquisador_ident"});
  pesquisador.hasMany(microorganismo, { as: "pesquisador_ident_microorganismos", foreignKey: "pesquisador_ident"});
  repique.belongsTo(pesquisador, { as: "pesquisador_preserv_pesquisador", foreignKey: "pesquisador_preserv"});
  pesquisador.hasMany(repique, { as: "repiques", foreignKey: "pesquisador_preserv"});
  microorganismo.belongsTo(pigmento, { as: "pigmento_idpigmento_pigmento", foreignKey: "pigmento_idpigmento"});
  pigmento.hasMany(microorganismo, { as: "microorganismos", foreignKey: "pigmento_idpigmento"});
  repique.belongsTo(posicao, { as: "posicao_idposicao_posicao", foreignKey: "posicao_idposicao"});
  posicao.hasMany(repique, { as: "repiques", foreignKey: "posicao_idposicao"});
  lote.belongsTo(prateleira, { as: "prateleira_idprateleira_prateleira", foreignKey: "prateleira_idprateleira"});
  prateleira.hasMany(lote, { as: "lotes", foreignKey: "prateleira_idprateleira"});
  microorganismo_has_referencia_taxa.belongsTo(referencia, { as: "referencia_idreferencia_referencium", foreignKey: "referencia_idreferencia"});
  referencia.hasMany(microorganismo_has_referencia_taxa, { as: "microorganismo_has_referencia_taxas", foreignKey: "referencia_idreferencia"});
  microorganismo_has_referencia_temp.belongsTo(referencia, { as: "referencia_idreferencia_referencium", foreignKey: "referencia_idreferencia"});
  referencia.hasMany(microorganismo_has_referencia_temp, { as: "microorganismo_has_referencia_temps", foreignKey: "referencia_idreferencia"});
  repique_has_referencia.belongsTo(referencia, { as: "referencia_idreferencia_referencium", foreignKey: "referencia_idreferencia"});
  referencia.hasMany(repique_has_referencia, { as: "repique_has_referencia", foreignKey: "referencia_idreferencia"});
  filo.belongsTo(reino, { as: "reino_idreino_reino", foreignKey: "reino_idreino"});
  reino.hasMany(filo, { as: "filos", foreignKey: "reino_idreino"});
  microorganismo.belongsTo(relevo, { as: "relevo_idrelevo_relevo", foreignKey: "relevo_idrelevo"});
  relevo.hasMany(microorganismo, { as: "microorganismos", foreignKey: "relevo_idrelevo"});
  repique_has_imagem.belongsTo(repique, { as: "repique_idrepique_repique", foreignKey: "repique_idrepique"});
  repique.hasMany(repique_has_imagem, { as: "repique_has_imagems", foreignKey: "repique_idrepique"});
  repique_has_metodo_preservacao.belongsTo(repique, { as: "repique_idrepique_repique", foreignKey: "repique_idrepique"});
  repique.hasMany(repique_has_metodo_preservacao, { as: "repique_has_metodo_preservacaos", foreignKey: "repique_idrepique"});
  repique_has_referencia.belongsTo(repique, { as: "repique_idrepique_repique", foreignKey: "repique_idrepique"});
  repique.hasMany(repique_has_referencia, { as: "repique_has_referencia", foreignKey: "repique_idrepique"});
  habitat_ani.belongsTo(sitio, { as: "sitio_idsitio_sitio", foreignKey: "sitio_idsitio"});
  sitio.hasMany(habitat_ani, { as: "habitat_anis", foreignKey: "sitio_idsitio"});
  armario.belongsTo(sub_colecao, { as: "sub_colecao_idsub_colecao_sub_colecao", foreignKey: "sub_colecao_idsub_colecao"});
  sub_colecao.hasMany(armario, { as: "armarios", foreignKey: "sub_colecao_idsub_colecao"});
  variedade.belongsTo(sub_especie, { as: "sub_especie_idsub_especie_sub_especie", foreignKey: "sub_especie_idsub_especie"});
  sub_especie.hasMany(variedade, { as: "variedades", foreignKey: "sub_especie_idsub_especie"});
  habitat_veg.belongsTo(substrato, { as: "substrato_idsubstrato_substrato", foreignKey: "substrato_idsubstrato"});
  substrato.hasMany(habitat_veg, { as: "habitat_vegs", foreignKey: "substrato_idsubstrato"});
  microorganismo.belongsTo(textura, { as: "textura_idtextura_textura", foreignKey: "textura_idtextura"});
  textura.hasMany(microorganismo, { as: "microorganismos", foreignKey: "textura_idtextura"});
  repique.belongsTo(unidade, { as: "unidade_idunidade_unidade", foreignKey: "unidade_idunidade"});
  unidade.hasMany(repique, { as: "repiques", foreignKey: "unidade_idunidade"});
  microorganismo.belongsTo(variedade, { as: "variedade_idvariedade_variedade", foreignKey: "variedade_idvariedade"});
  variedade.hasMany(microorganismo, { as: "microorganismos", foreignKey: "variedade_idvariedade"});

  return {
    anexos,
    armario,
    autenticacao,
    borda,
    carac_micromorfologica,
    classe,
    cor,
    doacao,
    dominio,
    especie,
    exudato,
    familia,
    filo,
    genero,
    grupo_pesquisa,
    habitat,
    habitat_ani,
    habitat_veg,
    hospedeiro,
    imagem,
    laboratorio,
    lote,
    metodo_preservacao,
    microorganismo,
    microorganismo_has_anexos,
    microorganismo_has_carac_micromorfologica,
    microorganismo_has_imagem_macro,
    microorganismo_has_imagem_micro,
    microorganismo_has_referencia_taxa,
    microorganismo_has_referencia_temp,
    ordem,
    pesquisador,
    pigmento,
    posicao,
    prateleira,
    referencia,
    reino,
    relevo,
    repique,
    repique_has_imagem,
    repique_has_metodo_preservacao,
    repique_has_referencia,
    sitio,
    sub_colecao,
    sub_especie,
    substrato,
    textura,
    unidade,
    users,
    variedade,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
