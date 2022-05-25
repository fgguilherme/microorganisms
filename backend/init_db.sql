-- MySQL Script generated by MySQL Workbench
-- Wed May 25 10:04:14 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema micro_collection
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema micro_collection
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `micro_collection` DEFAULT CHARACTER SET utf8 ;
USE `micro_collection` ;

-- -----------------------------------------------------
-- Table `micro_collection`.`dominio`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `micro_collection`.`dominio` (
  `iddominio` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `dominio` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`iddominio`),
  UNIQUE INDEX `iddominio_UNIQUE` (`iddominio` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `micro_collection`.`reino`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `micro_collection`.`reino` (
  `idreino` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `reino` VARCHAR(45) NOT NULL,
  `dominio_iddominio` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`idreino`),
  UNIQUE INDEX `idreino_UNIQUE` (`idreino` ASC),
  INDEX `fk_reino_dominio_idx` (`dominio_iddominio` ASC),
  CONSTRAINT `fk_reino_dominio`
    FOREIGN KEY (`dominio_iddominio`)
    REFERENCES `micro_collection`.`dominio` (`iddominio`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `micro_collection`.`filo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `micro_collection`.`filo` (
  `idfilo` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `filo` VARCHAR(45) NOT NULL,
  `reino_idreino` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`idfilo`),
  UNIQUE INDEX `idfilo_UNIQUE` (`idfilo` ASC),
  INDEX `fk_filo_reino1_idx` (`reino_idreino` ASC),
  CONSTRAINT `fk_filo_reino1`
    FOREIGN KEY (`reino_idreino`)
    REFERENCES `micro_collection`.`reino` (`idreino`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `micro_collection`.`classe`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `micro_collection`.`classe` (
  `idclasse` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `classe` VARCHAR(45) NOT NULL,
  `filo_idfilo` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`idclasse`),
  UNIQUE INDEX `idclasse_UNIQUE` (`idclasse` ASC),
  INDEX `fk_classe_filo1_idx` (`filo_idfilo` ASC),
  CONSTRAINT `fk_classe_filo1`
    FOREIGN KEY (`filo_idfilo`)
    REFERENCES `micro_collection`.`filo` (`idfilo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `micro_collection`.`ordem`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `micro_collection`.`ordem` (
  `idordem` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `ordem` VARCHAR(45) NOT NULL,
  `classe_idclasse` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`idordem`),
  UNIQUE INDEX `idordem_UNIQUE` (`idordem` ASC),
  INDEX `fk_ordem_classe1_idx` (`classe_idclasse` ASC),
  CONSTRAINT `fk_ordem_classe1`
    FOREIGN KEY (`classe_idclasse`)
    REFERENCES `micro_collection`.`classe` (`idclasse`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `micro_collection`.`familia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `micro_collection`.`familia` (
  `idfamilia` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `familia` VARCHAR(45) NOT NULL,
  `ordem_idordem` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`idfamilia`),
  UNIQUE INDEX `idfamilia_UNIQUE` (`idfamilia` ASC),
  INDEX `fk_familia_ordem1_idx` (`ordem_idordem` ASC),
  CONSTRAINT `fk_familia_ordem1`
    FOREIGN KEY (`ordem_idordem`)
    REFERENCES `micro_collection`.`ordem` (`idordem`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `micro_collection`.`genero`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `micro_collection`.`genero` (
  `idgenero` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `genero` VARCHAR(45) NOT NULL,
  `familia_idfamilia` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`idgenero`),
  UNIQUE INDEX `idgenero_UNIQUE` (`idgenero` ASC),
  INDEX `fk_genero_familia1_idx` (`familia_idfamilia` ASC),
  CONSTRAINT `fk_genero_familia1`
    FOREIGN KEY (`familia_idfamilia`)
    REFERENCES `micro_collection`.`familia` (`idfamilia`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `micro_collection`.`especie`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `micro_collection`.`especie` (
  `idespecie` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `especie` VARCHAR(45) NOT NULL,
  `autor` VARCHAR(145) NULL,
  `genero_idgenero` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`idespecie`),
  UNIQUE INDEX `idespecie_UNIQUE` (`idespecie` ASC),
  INDEX `fk_especie_genero1_idx` (`genero_idgenero` ASC),
  CONSTRAINT `fk_especie_genero1`
    FOREIGN KEY (`genero_idgenero`)
    REFERENCES `micro_collection`.`genero` (`idgenero`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `micro_collection`.`sub_especie`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `micro_collection`.`sub_especie` (
  `idsub_especie` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `sub_especie` VARCHAR(45) NOT NULL,
  `autor` VARCHAR(145) NULL,
  `especie_idespecie` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`idsub_especie`),
  UNIQUE INDEX `idsub_especie_UNIQUE` (`idsub_especie` ASC),
  INDEX `fk_sub_especie_especie1_idx` (`especie_idespecie` ASC),
  CONSTRAINT `fk_sub_especie_especie1`
    FOREIGN KEY (`especie_idespecie`)
    REFERENCES `micro_collection`.`especie` (`idespecie`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `micro_collection`.`variedade`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `micro_collection`.`variedade` (
  `idvariedade` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `variedade` VARCHAR(45) NOT NULL,
  `autor` VARCHAR(145) NULL,
  `sub_especie_idsub_especie` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`idvariedade`),
  UNIQUE INDEX `idvariedade_UNIQUE` (`idvariedade` ASC),
  INDEX `fk_variedade_sub_especie1_idx` (`sub_especie_idsub_especie` ASC),
  CONSTRAINT `fk_variedade_sub_especie1`
    FOREIGN KEY (`sub_especie_idsub_especie`)
    REFERENCES `micro_collection`.`sub_especie` (`idsub_especie`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `micro_collection`.`referencia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `micro_collection`.`referencia` (
  `idreferencia` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `referencia` VARCHAR(45) NULL,
  PRIMARY KEY (`idreferencia`),
  UNIQUE INDEX `idreferencia_UNIQUE` (`idreferencia` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `micro_collection`.`hospedeiro`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `micro_collection`.`hospedeiro` (
  `idhospedeiro` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `hospedeiro` VARCHAR(45) NULL,
  `isAnimal` TINYINT NULL,
  PRIMARY KEY (`idhospedeiro`),
  UNIQUE INDEX `idhospedeiro_UNIQUE` (`idhospedeiro` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `micro_collection`.`substrato`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `micro_collection`.`substrato` (
  `idsubstrato` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `substrato` VARCHAR(45) NULL,
  PRIMARY KEY (`idsubstrato`),
  UNIQUE INDEX `idsubstrato_UNIQUE` (`idsubstrato` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `micro_collection`.`habitat_veg`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `micro_collection`.`habitat_veg` (
  `idhabitat_veg` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `hospedeiro_idhospedeiro` INT UNSIGNED NOT NULL,
  `substrato_idsubstrato` INT UNSIGNED NOT NULL,
  `registro` VARCHAR(45) NULL,
  `codigo` VARCHAR(45) NULL,
  `herbario` VARCHAR(255) NULL,
  PRIMARY KEY (`idhabitat_veg`),
  UNIQUE INDEX `idhabitat_veg_UNIQUE` (`idhabitat_veg` ASC),
  INDEX `fk_habitat_veg_hospedeiro1_idx` (`hospedeiro_idhospedeiro` ASC),
  INDEX `fk_habitat_veg_substrato1_idx` (`substrato_idsubstrato` ASC),
  CONSTRAINT `fk_habitat_veg_hospedeiro1`
    FOREIGN KEY (`hospedeiro_idhospedeiro`)
    REFERENCES `micro_collection`.`hospedeiro` (`idhospedeiro`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_habitat_veg_substrato1`
    FOREIGN KEY (`substrato_idsubstrato`)
    REFERENCES `micro_collection`.`substrato` (`idsubstrato`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `micro_collection`.`sitio`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `micro_collection`.`sitio` (
  `idsitio` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `sitio` VARCHAR(45) NULL,
  PRIMARY KEY (`idsitio`),
  UNIQUE INDEX `idsitio_UNIQUE` (`idsitio` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `micro_collection`.`habitat_ani`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `micro_collection`.`habitat_ani` (
  `idhabitat_ani` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `hospedeiro_idhospedeiro` INT UNSIGNED NOT NULL,
  `sitio_idsitio` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`idhabitat_ani`),
  UNIQUE INDEX `idhabitat_ani_UNIQUE` (`idhabitat_ani` ASC),
  INDEX `fk_habitat_ani_hospedeiro1_idx` (`hospedeiro_idhospedeiro` ASC),
  INDEX `fk_habitat_ani_sitio1_idx` (`sitio_idsitio` ASC),
  CONSTRAINT `fk_habitat_ani_hospedeiro1`
    FOREIGN KEY (`hospedeiro_idhospedeiro`)
    REFERENCES `micro_collection`.`hospedeiro` (`idhospedeiro`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_habitat_ani_sitio1`
    FOREIGN KEY (`sitio_idsitio`)
    REFERENCES `micro_collection`.`sitio` (`idsitio`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `micro_collection`.`habitat`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `micro_collection`.`habitat` (
  `idhabitat` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `habitat` VARCHAR(45) NOT NULL,
  `habitat_veg_idhabitat_veg` INT UNSIGNED NULL,
  `habitat_ani_idhabitat_ani` INT UNSIGNED NULL,
  `info` VARCHAR(144) NULL,
  PRIMARY KEY (`idhabitat`),
  UNIQUE INDEX `idsubstrato_UNIQUE` (`idhabitat` ASC),
  INDEX `fk_habitat_habitat_veg1_idx` (`habitat_veg_idhabitat_veg` ASC),
  INDEX `fk_habitat_habitat_ani1_idx` (`habitat_ani_idhabitat_ani` ASC),
  CONSTRAINT `fk_habitat_habitat_veg1`
    FOREIGN KEY (`habitat_veg_idhabitat_veg`)
    REFERENCES `micro_collection`.`habitat_veg` (`idhabitat_veg`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_habitat_habitat_ani1`
    FOREIGN KEY (`habitat_ani_idhabitat_ani`)
    REFERENCES `micro_collection`.`habitat_ani` (`idhabitat_ani`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `micro_collection`.`pesquisador`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `micro_collection`.`pesquisador` (
  `idpesquisador` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(145) NULL,
  `instituicao` VARCHAR(45) NULL,
  `email` VARCHAR(100) NULL,
  PRIMARY KEY (`idpesquisador`),
  UNIQUE INDEX `idpesquisador_UNIQUE` (`idpesquisador` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `micro_collection`.`metodo_preservacao`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `micro_collection`.`metodo_preservacao` (
  `idmetodo_preservacao` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `metodo` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idmetodo_preservacao`),
  UNIQUE INDEX `idmetodo_preservacao_UNIQUE` (`idmetodo_preservacao` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `micro_collection`.`cor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `micro_collection`.`cor` (
  `idcor` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `cor` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idcor`),
  UNIQUE INDEX `idcor_UNIQUE` (`idcor` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `micro_collection`.`textura`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `micro_collection`.`textura` (
  `idtextura` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `textura` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idtextura`),
  UNIQUE INDEX `idtextura_UNIQUE` (`idtextura` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `micro_collection`.`borda`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `micro_collection`.`borda` (
  `idborda` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `borda` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idborda`),
  UNIQUE INDEX `idborda_UNIQUE` (`idborda` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `micro_collection`.`relevo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `micro_collection`.`relevo` (
  `idrelevo` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `relevo` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idrelevo`),
  UNIQUE INDEX `idrelevo_UNIQUE` (`idrelevo` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `micro_collection`.`exudato`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `micro_collection`.`exudato` (
  `idexudato` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `exudato` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idexudato`),
  UNIQUE INDEX `idexudato_UNIQUE` (`idexudato` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `micro_collection`.`pigmento`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `micro_collection`.`pigmento` (
  `idpigmento` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `pigmento` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idpigmento`),
  UNIQUE INDEX `idpigmento_UNIQUE` (`idpigmento` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `micro_collection`.`carac_micromorfologica`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `micro_collection`.`carac_micromorfologica` (
  `idcarac_micromorfologica` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `carac_micromorfologica` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idcarac_micromorfologica`),
  UNIQUE INDEX `idcarac_micromorfologica_UNIQUE` (`idcarac_micromorfologica` ASC),
  UNIQUE INDEX `carac_micromorfologica_UNIQUE` (`carac_micromorfologica` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `micro_collection`.`imagem`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `micro_collection`.`imagem` (
  `idimagem` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `imagem` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`idimagem`),
  UNIQUE INDEX `idimagem_UNIQUE` (`idimagem` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `micro_collection`.`laboratorio`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `micro_collection`.`laboratorio` (
  `idlaboratorio` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `laboratorio` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idlaboratorio`),
  UNIQUE INDEX `idlaboratorio_UNIQUE` (`idlaboratorio` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `micro_collection`.`grupo_pesquisa`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `micro_collection`.`grupo_pesquisa` (
  `idgrupo_pesquisa` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `grupo` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idgrupo_pesquisa`),
  UNIQUE INDEX `idgrupo_pesquisa_UNIQUE` (`idgrupo_pesquisa` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `micro_collection`.`sub_colecao`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `micro_collection`.`sub_colecao` (
  `idsub_colecao` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `sub_colecao` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idsub_colecao`),
  UNIQUE INDEX `idsub_colecao_UNIQUE` (`idsub_colecao` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `micro_collection`.`armario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `micro_collection`.`armario` (
  `idarmario` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `armario` VARCHAR(45) NOT NULL,
  `sub_colecao_idsub_colecao` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`idarmario`),
  UNIQUE INDEX `idarmario_UNIQUE` (`idarmario` ASC),
  INDEX `fk_armario_sub_colecao1_idx` (`sub_colecao_idsub_colecao` ASC),
  CONSTRAINT `fk_armario_sub_colecao1`
    FOREIGN KEY (`sub_colecao_idsub_colecao`)
    REFERENCES `micro_collection`.`sub_colecao` (`idsub_colecao`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `micro_collection`.`prateleira`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `micro_collection`.`prateleira` (
  `idprateleira` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `prateleira` VARCHAR(45) NOT NULL,
  `armario_idarmario` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`idprateleira`),
  UNIQUE INDEX `idprateleira_UNIQUE` (`idprateleira` ASC),
  INDEX `fk_prateleira_armario1_idx` (`armario_idarmario` ASC),
  CONSTRAINT `fk_prateleira_armario1`
    FOREIGN KEY (`armario_idarmario`)
    REFERENCES `micro_collection`.`armario` (`idarmario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `micro_collection`.`lote`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `micro_collection`.`lote` (
  `idlote` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `lote` VARCHAR(45) NOT NULL,
  `prateleira_idprateleira` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`idlote`),
  UNIQUE INDEX `idlote_UNIQUE` (`idlote` ASC),
  INDEX `fk_lote_prateleira1_idx` (`prateleira_idprateleira` ASC),
  CONSTRAINT `fk_lote_prateleira1`
    FOREIGN KEY (`prateleira_idprateleira`)
    REFERENCES `micro_collection`.`prateleira` (`idprateleira`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `micro_collection`.`posicao`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `micro_collection`.`posicao` (
  `idposicao` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `posicao` VARCHAR(45) NOT NULL,
  `lote_idlote` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`idposicao`),
  UNIQUE INDEX `idposicao_UNIQUE` (`idposicao` ASC),
  INDEX `fk_posicao_lote1_idx` (`lote_idlote` ASC),
  CONSTRAINT `fk_posicao_lote1`
    FOREIGN KEY (`lote_idlote`)
    REFERENCES `micro_collection`.`lote` (`idlote`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `micro_collection`.`microorganismo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `micro_collection`.`microorganismo` (
  `idmicroorganismo` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `variedade_idvariedade` INT UNSIGNED NOT NULL,
  `status` INT UNSIGNED NOT NULL DEFAULT 0,
  `data_reg_col_orig` DATE NULL,
  `data_colet` DATE NULL,
  `data_isol` DATE NULL,
  `data_ident` DATE NULL,
  `data_mol` DATE NULL,
  `cod_orig` VARCHAR(45) NULL,
  `hist_orig` VARCHAR(145) NULL,
  `pesquisador_coleta` INT UNSIGNED NULL,
  `origem_geo` VARCHAR(255) NULL,
  `lat` VARCHAR(45) NULL,
  `lon` VARCHAR(45) NULL,
  `datum` VARCHAR(45) NULL,
  `precisao` VARCHAR(45) NULL,
  `coment_orig` VARCHAR(245) NULL,
  `pesquisador_isolamento` INT UNSIGNED NULL,
  `info_isolamento` VARCHAR(255) NULL,
  `pesquisador_ident` INT UNSIGNED NULL,
  `coment_isolamento` VARCHAR(255) NULL,
  `cor_colonia` INT UNSIGNED NULL,
  `textura_idtextura` INT UNSIGNED NULL,
  `borda_idborda` INT UNSIGNED NULL,
  `relevo_idrelevo` INT UNSIGNED NULL,
  `exudato_idexudato` INT UNSIGNED NULL,
  `cor_exudato` INT UNSIGNED NULL,
  `pigmento_idpigmento` INT UNSIGNED NULL,
  `cor_pigmento` INT UNSIGNED NULL,
  `temp_crescimento` FLOAT NULL,
  `laboratorio_mol` INT UNSIGNED NULL,
  `cod_mol` VARCHAR(45) NULL,
  `sequencia_mol` VARCHAR(255) NULL,
  `meta_mol` VARCHAR(145) NULL,
  `habitat_idhabitat` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`idmicroorganismo`),
  UNIQUE INDEX `idmicroorganismo_UNIQUE` (`idmicroorganismo` ASC),
  INDEX `fk_microorganismo_variedade1_idx` (`variedade_idvariedade` ASC),
  INDEX `fk_microorganismo_pesquisador1_idx` (`pesquisador_coleta` ASC),
  INDEX `fk_microorganismo_pesquisador2_idx` (`pesquisador_isolamento` ASC),
  INDEX `fk_microorganismo_pesquisador3_idx` (`pesquisador_ident` ASC),
  INDEX `fk_microorganismo_cor1_idx` (`cor_colonia` ASC),
  INDEX `fk_microorganismo_textura1_idx` (`textura_idtextura` ASC),
  INDEX `fk_microorganismo_borda1_idx` (`borda_idborda` ASC),
  INDEX `fk_microorganismo_relevo1_idx` (`relevo_idrelevo` ASC),
  INDEX `fk_microorganismo_exudato1_idx` (`exudato_idexudato` ASC),
  INDEX `fk_microorganismo_cor2_idx` (`cor_exudato` ASC),
  INDEX `fk_microorganismo_pigmento1_idx` (`pigmento_idpigmento` ASC),
  INDEX `fk_microorganismo_cor3_idx` (`cor_pigmento` ASC),
  INDEX `fk_microorganismo_laboratorio1_idx` (`laboratorio_mol` ASC),
  INDEX `fk_microorganismo_habitat1_idx` (`habitat_idhabitat` ASC),
  CONSTRAINT `fk_microorganismo_variedade1`
    FOREIGN KEY (`variedade_idvariedade`)
    REFERENCES `micro_collection`.`variedade` (`idvariedade`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_microorganismo_pesquisador1`
    FOREIGN KEY (`pesquisador_coleta`)
    REFERENCES `micro_collection`.`pesquisador` (`idpesquisador`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_microorganismo_pesquisador2`
    FOREIGN KEY (`pesquisador_isolamento`)
    REFERENCES `micro_collection`.`pesquisador` (`idpesquisador`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_microorganismo_pesquisador3`
    FOREIGN KEY (`pesquisador_ident`)
    REFERENCES `micro_collection`.`pesquisador` (`idpesquisador`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_microorganismo_cor1`
    FOREIGN KEY (`cor_colonia`)
    REFERENCES `micro_collection`.`cor` (`idcor`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_microorganismo_textura1`
    FOREIGN KEY (`textura_idtextura`)
    REFERENCES `micro_collection`.`textura` (`idtextura`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_microorganismo_borda1`
    FOREIGN KEY (`borda_idborda`)
    REFERENCES `micro_collection`.`borda` (`idborda`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_microorganismo_relevo1`
    FOREIGN KEY (`relevo_idrelevo`)
    REFERENCES `micro_collection`.`relevo` (`idrelevo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_microorganismo_exudato1`
    FOREIGN KEY (`exudato_idexudato`)
    REFERENCES `micro_collection`.`exudato` (`idexudato`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_microorganismo_cor2`
    FOREIGN KEY (`cor_exudato`)
    REFERENCES `micro_collection`.`cor` (`idcor`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_microorganismo_pigmento1`
    FOREIGN KEY (`pigmento_idpigmento`)
    REFERENCES `micro_collection`.`pigmento` (`idpigmento`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_microorganismo_cor3`
    FOREIGN KEY (`cor_pigmento`)
    REFERENCES `micro_collection`.`cor` (`idcor`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_microorganismo_laboratorio1`
    FOREIGN KEY (`laboratorio_mol`)
    REFERENCES `micro_collection`.`laboratorio` (`idlaboratorio`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_microorganismo_habitat1`
    FOREIGN KEY (`habitat_idhabitat`)
    REFERENCES `micro_collection`.`habitat` (`idhabitat`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `micro_collection`.`microorganismo_has_carac_micromorfologica`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `micro_collection`.`microorganismo_has_carac_micromorfologica` (
  `idmicroorganismo_has_carac_micromorfologica` INT NOT NULL AUTO_INCREMENT,
  `microorganismo_idmicroorganismo` INT UNSIGNED NOT NULL,
  `carac_micromorfologica_idcarac_micromorfologica` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`idmicroorganismo_has_carac_micromorfologica`, `microorganismo_idmicroorganismo`, `carac_micromorfologica_idcarac_micromorfologica`),
  INDEX `fk_microorganismo_has_carac_micromorfologica_carac_micromor_idx` (`carac_micromorfologica_idcarac_micromorfologica` ASC),
  INDEX `fk_microorganismo_has_carac_micromorfologica_microorganismo_idx` (`microorganismo_idmicroorganismo` ASC),
  CONSTRAINT `fk_microorganismo_has_carac_micromorfologica_microorganismo1`
    FOREIGN KEY (`microorganismo_idmicroorganismo`)
    REFERENCES `micro_collection`.`microorganismo` (`idmicroorganismo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_microorganismo_has_carac_micromorfologica_carac_micromorfo1`
    FOREIGN KEY (`carac_micromorfologica_idcarac_micromorfologica`)
    REFERENCES `micro_collection`.`carac_micromorfologica` (`idcarac_micromorfologica`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `micro_collection`.`microorganismo_has_imagem_macro`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `micro_collection`.`microorganismo_has_imagem_macro` (
  `idmicroorganismo_has_imagem_macro` INT NOT NULL AUTO_INCREMENT,
  `microorganismo_idmicroorganismo` INT UNSIGNED NOT NULL,
  `imagem_idimagem` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`idmicroorganismo_has_imagem_macro`, `microorganismo_idmicroorganismo`, `imagem_idimagem`),
  INDEX `fk_microorganismo_has_imagem_imagem1_idx` (`imagem_idimagem` ASC),
  INDEX `fk_microorganismo_has_imagem_microorganismo1_idx` (`microorganismo_idmicroorganismo` ASC),
  CONSTRAINT `fk_microorganismo_has_imagem_microorganismo1`
    FOREIGN KEY (`microorganismo_idmicroorganismo`)
    REFERENCES `micro_collection`.`microorganismo` (`idmicroorganismo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_microorganismo_has_imagem_imagem1`
    FOREIGN KEY (`imagem_idimagem`)
    REFERENCES `micro_collection`.`imagem` (`idimagem`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `micro_collection`.`microorganismo_has_imagem_micro`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `micro_collection`.`microorganismo_has_imagem_micro` (
  `idmicroorganismo_has_imagem_micro` INT NOT NULL AUTO_INCREMENT,
  `microorganismo_idmicroorganismo` INT UNSIGNED NOT NULL,
  `imagem_idimagem` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`idmicroorganismo_has_imagem_micro`, `microorganismo_idmicroorganismo`, `imagem_idimagem`),
  INDEX `fk_microorganismo_has_imagem_imagem2_idx` (`imagem_idimagem` ASC),
  INDEX `fk_microorganismo_has_imagem_microorganismo2_idx` (`microorganismo_idmicroorganismo` ASC),
  CONSTRAINT `fk_microorganismo_has_imagem_microorganismo2`
    FOREIGN KEY (`microorganismo_idmicroorganismo`)
    REFERENCES `micro_collection`.`microorganismo` (`idmicroorganismo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_microorganismo_has_imagem_imagem2`
    FOREIGN KEY (`imagem_idimagem`)
    REFERENCES `micro_collection`.`imagem` (`idimagem`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `micro_collection`.`anexos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `micro_collection`.`anexos` (
  `idanexos` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `link` VARCHAR(145) NOT NULL,
  PRIMARY KEY (`idanexos`),
  UNIQUE INDEX `idanexos_UNIQUE` (`idanexos` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `micro_collection`.`microorganismo_has_anexos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `micro_collection`.`microorganismo_has_anexos` (
  `idmicroorganismo_has_anexos` INT NOT NULL AUTO_INCREMENT,
  `microorganismo_idmicroorganismo` INT UNSIGNED NOT NULL,
  `anexos_idanexos` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`idmicroorganismo_has_anexos`, `microorganismo_idmicroorganismo`, `anexos_idanexos`),
  INDEX `fk_microorganismo_has_anexos_anexos1_idx` (`anexos_idanexos` ASC),
  INDEX `fk_microorganismo_has_anexos_microorganismo1_idx` (`microorganismo_idmicroorganismo` ASC),
  CONSTRAINT `fk_microorganismo_has_anexos_microorganismo1`
    FOREIGN KEY (`microorganismo_idmicroorganismo`)
    REFERENCES `micro_collection`.`microorganismo` (`idmicroorganismo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_microorganismo_has_anexos_anexos1`
    FOREIGN KEY (`anexos_idanexos`)
    REFERENCES `micro_collection`.`anexos` (`idanexos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `micro_collection`.`unidade`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `micro_collection`.`unidade` (
  `idunidade` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `unidade` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idunidade`),
  UNIQUE INDEX `idunidade_UNIQUE` (`idunidade` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `micro_collection`.`repique`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `micro_collection`.`repique` (
  `idrepique` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `microorganismo_idmicroorganismo` INT UNSIGNED NOT NULL,
  `unidade_idunidade` INT UNSIGNED NOT NULL,
  `grupo_pesquisa_idgrupo_pesquisa` INT UNSIGNED NOT NULL,
  `comentarios` VARCHAR(255) NULL,
  `disponivel` INT UNSIGNED NOT NULL DEFAULT 0,
  `data_emission` DATE NULL,
  `data_preserv` DATETIME NULL,
  `posicao_idposicao` INT UNSIGNED NOT NULL,
  `pesquisador_preserv` INT UNSIGNED NULL,
  `parent` INT NULL,
  PRIMARY KEY (`idrepique`),
  UNIQUE INDEX `idrepique_UNIQUE` (`idrepique` ASC),
  INDEX `fk_repique_microorganismo1_idx` (`microorganismo_idmicroorganismo` ASC),
  INDEX `fk_repique_unidade1_idx` (`unidade_idunidade` ASC),
  INDEX `fk_repique_grupo_pesquisa1_idx` (`grupo_pesquisa_idgrupo_pesquisa` ASC),
  INDEX `fk_repique_posicao1_idx` (`posicao_idposicao` ASC),
  INDEX `fk_repique_pesquisador1_idx` (`pesquisador_preserv` ASC),
  CONSTRAINT `fk_repique_microorganismo1`
    FOREIGN KEY (`microorganismo_idmicroorganismo`)
    REFERENCES `micro_collection`.`microorganismo` (`idmicroorganismo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_repique_unidade1`
    FOREIGN KEY (`unidade_idunidade`)
    REFERENCES `micro_collection`.`unidade` (`idunidade`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_repique_grupo_pesquisa1`
    FOREIGN KEY (`grupo_pesquisa_idgrupo_pesquisa`)
    REFERENCES `micro_collection`.`grupo_pesquisa` (`idgrupo_pesquisa`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_repique_posicao1`
    FOREIGN KEY (`posicao_idposicao`)
    REFERENCES `micro_collection`.`posicao` (`idposicao`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_repique_pesquisador1`
    FOREIGN KEY (`pesquisador_preserv`)
    REFERENCES `micro_collection`.`pesquisador` (`idpesquisador`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `micro_collection`.`repique_has_referencia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `micro_collection`.`repique_has_referencia` (
  `idrepique_has_referencia` INT NOT NULL AUTO_INCREMENT,
  `repique_idrepique` INT UNSIGNED NOT NULL,
  `referencia_idreferencia` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`idrepique_has_referencia`, `repique_idrepique`, `referencia_idreferencia`),
  INDEX `fk_repique_has_referencia_referencia1_idx` (`referencia_idreferencia` ASC),
  INDEX `fk_repique_has_referencia_repique1_idx` (`repique_idrepique` ASC),
  CONSTRAINT `fk_repique_has_referencia_repique1`
    FOREIGN KEY (`repique_idrepique`)
    REFERENCES `micro_collection`.`repique` (`idrepique`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_repique_has_referencia_referencia1`
    FOREIGN KEY (`referencia_idreferencia`)
    REFERENCES `micro_collection`.`referencia` (`idreferencia`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `micro_collection`.`repique_has_imagem`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `micro_collection`.`repique_has_imagem` (
  `idrepique_has_imagem` INT NOT NULL AUTO_INCREMENT,
  `repique_idrepique` INT UNSIGNED NOT NULL,
  `imagem_idimagem` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`idrepique_has_imagem`, `repique_idrepique`, `imagem_idimagem`),
  INDEX `fk_repique_has_imagem_imagem1_idx` (`imagem_idimagem` ASC),
  INDEX `fk_repique_has_imagem_repique1_idx` (`repique_idrepique` ASC),
  CONSTRAINT `fk_repique_has_imagem_repique1`
    FOREIGN KEY (`repique_idrepique`)
    REFERENCES `micro_collection`.`repique` (`idrepique`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_repique_has_imagem_imagem1`
    FOREIGN KEY (`imagem_idimagem`)
    REFERENCES `micro_collection`.`imagem` (`idimagem`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `micro_collection`.`repique_has_metodo_preservacao`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `micro_collection`.`repique_has_metodo_preservacao` (
  `idrepique_has_metodo_preservacao` INT NOT NULL AUTO_INCREMENT,
  `repique_idrepique` INT UNSIGNED NOT NULL,
  `metodo_preservacao_idmetodo_preservacao` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`idrepique_has_metodo_preservacao`, `metodo_preservacao_idmetodo_preservacao`, `repique_idrepique`),
  INDEX `fk_repique_has_metodo_preservacao_metodo_preservacao1_idx` (`metodo_preservacao_idmetodo_preservacao` ASC),
  INDEX `fk_repique_has_metodo_preservacao_repique1_idx` (`repique_idrepique` ASC),
  CONSTRAINT `fk_repique_has_metodo_preservacao_repique1`
    FOREIGN KEY (`repique_idrepique`)
    REFERENCES `micro_collection`.`repique` (`idrepique`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_repique_has_metodo_preservacao_metodo_preservacao1`
    FOREIGN KEY (`metodo_preservacao_idmetodo_preservacao`)
    REFERENCES `micro_collection`.`metodo_preservacao` (`idmetodo_preservacao`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `micro_collection`.`microorganismo_has_referencia_taxa`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `micro_collection`.`microorganismo_has_referencia_taxa` (
  `idmicroorganismo_has_referencia_taxa` INT NOT NULL AUTO_INCREMENT,
  `microorganismo_idmicroorganismo` INT UNSIGNED NOT NULL,
  `referencia_idreferencia` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`idmicroorganismo_has_referencia_taxa`, `microorganismo_idmicroorganismo`, `referencia_idreferencia`),
  INDEX `fk_microorganismo_has_referencia_referencia1_idx` (`referencia_idreferencia` ASC),
  INDEX `fk_microorganismo_has_referencia_microorganismo1_idx` (`microorganismo_idmicroorganismo` ASC),
  CONSTRAINT `fk_microorganismo_has_referencia_microorganismo1`
    FOREIGN KEY (`microorganismo_idmicroorganismo`)
    REFERENCES `micro_collection`.`microorganismo` (`idmicroorganismo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_microorganismo_has_referencia_referencia1`
    FOREIGN KEY (`referencia_idreferencia`)
    REFERENCES `micro_collection`.`referencia` (`idreferencia`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `micro_collection`.`microorganismo_has_referencia_temp`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `micro_collection`.`microorganismo_has_referencia_temp` (
  `idmicroorganismo_has_referencia_temp` INT NOT NULL AUTO_INCREMENT,
  `microorganismo_idmicroorganismo` INT UNSIGNED NOT NULL,
  `referencia_idreferencia` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`idmicroorganismo_has_referencia_temp`, `microorganismo_idmicroorganismo`, `referencia_idreferencia`),
  INDEX `fk_microorganismo_has_referencia1_referencia1_idx` (`referencia_idreferencia` ASC),
  INDEX `fk_microorganismo_has_referencia1_microorganismo1_idx` (`microorganismo_idmicroorganismo` ASC),
  CONSTRAINT `fk_microorganismo_has_referencia1_microorganismo1`
    FOREIGN KEY (`microorganismo_idmicroorganismo`)
    REFERENCES `micro_collection`.`microorganismo` (`idmicroorganismo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_microorganismo_has_referencia1_referencia1`
    FOREIGN KEY (`referencia_idreferencia`)
    REFERENCES `micro_collection`.`referencia` (`idreferencia`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
