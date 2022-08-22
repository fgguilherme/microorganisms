-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: db_micro:3306
-- Tempo de geração: 22-Ago-2022 às 05:39
-- Versão do servidor: 10.3.35-MariaDB-1:10.3.35+maria~focal
-- versão do PHP: 8.0.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `micro_collection`
--
CREATE DATABASE IF NOT EXISTS `micro_collection` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `micro_collection`;

-- --------------------------------------------------------

--
-- Estrutura da tabela `anexos`
--

CREATE TABLE `anexos` (
  `idanexos` int(10) UNSIGNED NOT NULL,
  `link` varchar(145) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `anexos`
--

INSERT INTO `anexos` (`idanexos`, `link`) VALUES
(1, '/api/public/docs/1661133368674-O-Rastro-de-Sangue.pdf');

-- --------------------------------------------------------

--
-- Estrutura da tabela `armario`
--

CREATE TABLE `armario` (
  `idarmario` int(10) UNSIGNED NOT NULL,
  `armario` varchar(45) NOT NULL,
  `sub_colecao_idsub_colecao` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `armario`
--

INSERT INTO `armario` (`idarmario`, `armario`, `sub_colecao_idsub_colecao`) VALUES
(1, 'A001', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `autenticacao`
--

CREATE TABLE `autenticacao` (
  `idAutenticacao` int(11) NOT NULL,
  `idRepique` int(11) NOT NULL,
  `idPesquisador` int(11) NOT NULL,
  `data_autenticacao` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `autenticacao`
--

INSERT INTO `autenticacao` (`idAutenticacao`, `idRepique`, `idPesquisador`, `data_autenticacao`) VALUES
(1, 2, 1, '2022-08-22');

-- --------------------------------------------------------

--
-- Estrutura da tabela `borda`
--

CREATE TABLE `borda` (
  `idborda` int(10) UNSIGNED NOT NULL,
  `borda` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `borda`
--

INSERT INTO `borda` (`idborda`, `borda`) VALUES
(1, 'B001');

-- --------------------------------------------------------

--
-- Estrutura da tabela `carac_micromorfologica`
--

CREATE TABLE `carac_micromorfologica` (
  `idcarac_micromorfologica` int(10) UNSIGNED NOT NULL,
  `carac_micromorfologica` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `carac_micromorfologica`
--

INSERT INTO `carac_micromorfologica` (`idcarac_micromorfologica`, `carac_micromorfologica`) VALUES
(1, 'CaracMicro001'),
(2, 'CaracMicro002');

-- --------------------------------------------------------

--
-- Estrutura da tabela `classe`
--

CREATE TABLE `classe` (
  `idclasse` int(10) UNSIGNED NOT NULL,
  `classe` varchar(45) NOT NULL,
  `filo_idfilo` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `classe`
--

INSERT INTO `classe` (`idclasse`, `classe`, `filo_idfilo`) VALUES
(1, 'C001', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `cor`
--

CREATE TABLE `cor` (
  `idcor` int(10) UNSIGNED NOT NULL,
  `cor` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `cor`
--

INSERT INTO `cor` (`idcor`, `cor`) VALUES
(1, 'Cor001'),
(2, 'Cor002'),
(3, 'Cor003'),
(4, 'Cor004');

-- --------------------------------------------------------

--
-- Estrutura da tabela `doacao`
--

CREATE TABLE `doacao` (
  `idDoacao` int(11) NOT NULL,
  `idRepique` int(11) NOT NULL,
  `idPesquisador` int(11) NOT NULL,
  `data_doacao` date NOT NULL,
  `destinatario` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `doacao`
--

INSERT INTO `doacao` (`idDoacao`, `idRepique`, `idPesquisador`, `data_doacao`, `destinatario`) VALUES
(1, 2, 1, '2022-08-22', 'doado');

-- --------------------------------------------------------

--
-- Estrutura da tabela `dominio`
--

CREATE TABLE `dominio` (
  `iddominio` int(10) UNSIGNED NOT NULL,
  `dominio` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `dominio`
--

INSERT INTO `dominio` (`iddominio`, `dominio`) VALUES
(1, 'D001');

-- --------------------------------------------------------

--
-- Estrutura da tabela `especie`
--

CREATE TABLE `especie` (
  `idespecie` int(10) UNSIGNED NOT NULL,
  `especie` varchar(45) NOT NULL,
  `autor` varchar(145) DEFAULT NULL,
  `genero_idgenero` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `especie`
--

INSERT INTO `especie` (`idespecie`, `especie`, `autor`, `genero_idgenero`) VALUES
(1, 'E001', 'A001', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `exudato`
--

CREATE TABLE `exudato` (
  `idexudato` int(10) UNSIGNED NOT NULL,
  `exudato` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `exudato`
--

INSERT INTO `exudato` (`idexudato`, `exudato`) VALUES
(1, 'EX001');

-- --------------------------------------------------------

--
-- Estrutura da tabela `familia`
--

CREATE TABLE `familia` (
  `idfamilia` int(10) UNSIGNED NOT NULL,
  `familia` varchar(45) NOT NULL,
  `ordem_idordem` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `familia`
--

INSERT INTO `familia` (`idfamilia`, `familia`, `ordem_idordem`) VALUES
(1, 'F001', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `filo`
--

CREATE TABLE `filo` (
  `idfilo` int(10) UNSIGNED NOT NULL,
  `filo` varchar(45) NOT NULL,
  `reino_idreino` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `filo`
--

INSERT INTO `filo` (`idfilo`, `filo`, `reino_idreino`) VALUES
(1, 'F001', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `genero`
--

CREATE TABLE `genero` (
  `idgenero` int(10) UNSIGNED NOT NULL,
  `genero` varchar(45) NOT NULL,
  `familia_idfamilia` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `genero`
--

INSERT INTO `genero` (`idgenero`, `genero`, `familia_idfamilia`) VALUES
(1, 'G001', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `grupo_pesquisa`
--

CREATE TABLE `grupo_pesquisa` (
  `idgrupo_pesquisa` int(10) UNSIGNED NOT NULL,
  `grupo` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `grupo_pesquisa`
--

INSERT INTO `grupo_pesquisa` (`idgrupo_pesquisa`, `grupo`) VALUES
(1, 'GP001');

-- --------------------------------------------------------

--
-- Estrutura da tabela `habitat`
--

CREATE TABLE `habitat` (
  `idhabitat` int(10) UNSIGNED NOT NULL,
  `habitat` varchar(45) NOT NULL,
  `habitat_veg_idhabitat_veg` int(10) UNSIGNED DEFAULT NULL,
  `habitat_ani_idhabitat_ani` int(10) UNSIGNED DEFAULT NULL,
  `info` varchar(144) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `habitat`
--

INSERT INTO `habitat` (`idhabitat`, `habitat`, `habitat_veg_idhabitat_veg`, `habitat_ani_idhabitat_ani`, `info`) VALUES
(1, '8', NULL, NULL, ''),
(2, '0', 1, NULL, 'MAIS INFORMAÇÕES (HABITAT)'),
(3, '3', NULL, 1, 'I001'),
(4, '0', 2, NULL, ''),
(5, '8', NULL, NULL, 'ddfhdf');

-- --------------------------------------------------------

--
-- Estrutura da tabela `habitat_ani`
--

CREATE TABLE `habitat_ani` (
  `idhabitat_ani` int(10) UNSIGNED NOT NULL,
  `hospedeiro_idhospedeiro` int(10) UNSIGNED NOT NULL,
  `sitio_idsitio` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `habitat_ani`
--

INSERT INTO `habitat_ani` (`idhabitat_ani`, `hospedeiro_idhospedeiro`, `sitio_idsitio`) VALUES
(1, 2, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `habitat_veg`
--

CREATE TABLE `habitat_veg` (
  `idhabitat_veg` int(10) UNSIGNED NOT NULL,
  `hospedeiro_idhospedeiro` int(10) UNSIGNED NOT NULL,
  `substrato_idsubstrato` int(10) UNSIGNED NOT NULL,
  `registro` varchar(45) DEFAULT NULL,
  `codigo` varchar(45) DEFAULT NULL,
  `herbario` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `habitat_veg`
--

INSERT INTO `habitat_veg` (`idhabitat_veg`, `hospedeiro_idhospedeiro`, `substrato_idsubstrato`, `registro`, `codigo`, `herbario`) VALUES
(1, 1, 1, 'REGISTRO DA EXSICATA DO HOSPEDEIRO', 'CÓDIGO ORIGINAL DO HERBÁRIO', 'HERBÁRIO DO DEPÓSITO DO HOSPEDEIRO'),
(2, 1, 1, '', '', '');

-- --------------------------------------------------------

--
-- Estrutura da tabela `hospedeiro`
--

CREATE TABLE `hospedeiro` (
  `idhospedeiro` int(10) UNSIGNED NOT NULL,
  `hospedeiro` varchar(45) DEFAULT NULL,
  `isAnimal` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `hospedeiro`
--

INSERT INTO `hospedeiro` (`idhospedeiro`, `hospedeiro`, `isAnimal`) VALUES
(1, 'HespVeg001', 0),
(2, 'HospAni001', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `imagem`
--

CREATE TABLE `imagem` (
  `idimagem` int(10) UNSIGNED NOT NULL,
  `imagem` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `imagem`
--

INSERT INTO `imagem` (`idimagem`, `imagem`) VALUES
(1, '/api/public/images/1660868724437-001.jpeg'),
(2, '/api/public/images/1660868730790-002.jpeg'),
(3, '/api/public/images/1660868890026-004.jpeg'),
(4, '/api/public/images/1660963825092-covid-virus-bacteria.png'),
(5, '/api/public/images/1660963833891-1.jpg'),
(6, '/api/public/images/1660963895137-1.jpg'),
(7, '/api/public/images/1661056518682-1.jpg'),
(8, '/api/public/images/1661056526580-covid-virus-bacteria.png'),
(9, '/api/public/images/1661056570416-BLOG_DOENÇAS_MICROORGANISMOS-1-1280x720-1.jpeg');

-- --------------------------------------------------------

--
-- Estrutura da tabela `laboratorio`
--

CREATE TABLE `laboratorio` (
  `idlaboratorio` int(10) UNSIGNED NOT NULL,
  `laboratorio` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `laboratorio`
--

INSERT INTO `laboratorio` (`idlaboratorio`, `laboratorio`) VALUES
(1, 'Laboratório001'),
(2, 'Laboratório002');

-- --------------------------------------------------------

--
-- Estrutura da tabela `lote`
--

CREATE TABLE `lote` (
  `idlote` int(10) UNSIGNED NOT NULL,
  `lote` varchar(45) NOT NULL,
  `prateleira_idprateleira` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `lote`
--

INSERT INTO `lote` (`idlote`, `lote`, `prateleira_idprateleira`) VALUES
(1, 'L001', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `metodo_preservacao`
--

CREATE TABLE `metodo_preservacao` (
  `idmetodo_preservacao` int(10) UNSIGNED NOT NULL,
  `metodo` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `metodo_preservacao`
--

INSERT INTO `metodo_preservacao` (`idmetodo_preservacao`, `metodo`) VALUES
(1, 'AAAA');

-- --------------------------------------------------------

--
-- Estrutura da tabela `microorganismo`
--

CREATE TABLE `microorganismo` (
  `idmicroorganismo` int(10) UNSIGNED NOT NULL,
  `variedade_idvariedade` int(10) UNSIGNED NOT NULL,
  `status` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `data_reg_col_orig` date DEFAULT NULL,
  `data_colet` date DEFAULT NULL,
  `data_isol` date DEFAULT NULL,
  `data_ident` date DEFAULT NULL,
  `data_mol` date DEFAULT NULL,
  `cod_orig` varchar(45) DEFAULT NULL,
  `hist_orig` varchar(145) DEFAULT NULL,
  `pesquisador_coleta` int(10) UNSIGNED DEFAULT NULL,
  `origem_geo` varchar(255) DEFAULT NULL,
  `lat` varchar(45) DEFAULT NULL,
  `lon` varchar(45) DEFAULT NULL,
  `datum` varchar(45) DEFAULT NULL,
  `precisao` varchar(45) DEFAULT NULL,
  `coment_orig` varchar(245) DEFAULT NULL,
  `pesquisador_isolamento` int(10) UNSIGNED DEFAULT NULL,
  `info_isolamento` varchar(255) DEFAULT NULL,
  `pesquisador_ident` int(10) UNSIGNED DEFAULT NULL,
  `coment_isolamento` varchar(255) DEFAULT NULL,
  `cor_colonia` int(10) UNSIGNED DEFAULT NULL,
  `textura_idtextura` int(10) UNSIGNED DEFAULT NULL,
  `borda_idborda` int(10) UNSIGNED DEFAULT NULL,
  `relevo_idrelevo` int(10) UNSIGNED DEFAULT NULL,
  `exudato_idexudato` int(10) UNSIGNED DEFAULT NULL,
  `cor_exudato` int(10) UNSIGNED DEFAULT NULL,
  `pigmento_idpigmento` int(10) UNSIGNED DEFAULT NULL,
  `cor_pigmento` int(10) UNSIGNED DEFAULT NULL,
  `temp_crescimento` float DEFAULT NULL,
  `laboratorio_mol` int(10) UNSIGNED DEFAULT NULL,
  `cod_mol` varchar(45) DEFAULT NULL,
  `sequencia_mol` varchar(255) DEFAULT NULL,
  `meta_mol` varchar(145) DEFAULT NULL,
  `habitat_idhabitat` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `microorganismo`
--

INSERT INTO `microorganismo` (`idmicroorganismo`, `variedade_idvariedade`, `status`, `data_reg_col_orig`, `data_colet`, `data_isol`, `data_ident`, `data_mol`, `cod_orig`, `hist_orig`, `pesquisador_coleta`, `origem_geo`, `lat`, `lon`, `datum`, `precisao`, `coment_orig`, `pesquisador_isolamento`, `info_isolamento`, `pesquisador_ident`, `coment_isolamento`, `cor_colonia`, `textura_idtextura`, `borda_idborda`, `relevo_idrelevo`, `exudato_idexudato`, `cor_exudato`, `pigmento_idpigmento`, `cor_pigmento`, `temp_crescimento`, `laboratorio_mol`, `cod_mol`, `sequencia_mol`, `meta_mol`, `habitat_idhabitat`) VALUES
(1, 1, 0, NULL, NULL, NULL, NULL, NULL, '', '', 1, '', '', '', '', '', '', 1, '', 1, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '', '', '', 1),
(2, 1, 0, '2022-08-19', '2022-08-19', '2022-08-19', '2022-08-19', '2022-08-19', 'REGISTRO EM OUTRAS COLEÇÕES (CÓDIGO ORIGINAL)', 'REGISTRO EM OUTRAS COLEÇÕES (HISTÓRICO)', 1, 'ORIGEM GEOGRÁFICA', 'LATITUDE', 'LONGITUDE', 'DATUM', 'PRECISÃO', 'COMENTÁRIOS SOBRE ORIGEM', 1, 'info_isolamento', 1, 'COMENTÁRIO', 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 'CÓDIGO', 'SEQUÊNCIA', 'METADADOS', 2),
(3, 1, 0, '2022-08-20', '2022-08-20', '2022-08-20', '2022-08-20', '2022-08-20', 'C001', 'R001', 1, 'G001', 'L001', 'L002', 'D001', 'P002', 'C001', 1, 'I002', 1, 'C002', 1, 1, 1, 1, 1, 1, 1, 2, 4, 2, 'C001', 'S002', 'M002', 3),
(4, 1, 0, '2022-08-21', '2022-08-21', '2022-08-21', '2022-08-21', '2022-08-21', '', '', 1, '', '', '', '', '', '', 1, '', 1, '', 1, 1, 1, 1, 1, 1, 1, 1, 3, 2, '', '', '', 4),
(5, 1, 0, '2022-08-21', '2022-08-21', '2022-08-21', '2022-08-21', '2022-08-21', 'sfs', 'dfhdf', 1, 'dfh', 'dfh', 'dfhdf', 'dfhdfh', 'dfhdfh', 'dfhdfh', 1, 'dfhdf', 1, 'dfhdfh', 1, 1, 1, 1, 1, 2, 1, 2, 0, 2, 'dfhdf', 'dfhdf', 'dfhdfh', 5);

-- --------------------------------------------------------

--
-- Estrutura da tabela `microorganismo_has_anexos`
--

CREATE TABLE `microorganismo_has_anexos` (
  `idmicroorganismo_has_anexos` int(11) NOT NULL,
  `microorganismo_idmicroorganismo` int(10) UNSIGNED NOT NULL,
  `anexos_idanexos` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `microorganismo_has_anexos`
--

INSERT INTO `microorganismo_has_anexos` (`idmicroorganismo_has_anexos`, `microorganismo_idmicroorganismo`, `anexos_idanexos`) VALUES
(1, 5, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `microorganismo_has_carac_micromorfologica`
--

CREATE TABLE `microorganismo_has_carac_micromorfologica` (
  `idmicroorganismo_has_carac_micromorfologica` int(11) NOT NULL,
  `microorganismo_idmicroorganismo` int(10) UNSIGNED NOT NULL,
  `carac_micromorfologica_idcarac_micromorfologica` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `microorganismo_has_carac_micromorfologica`
--

INSERT INTO `microorganismo_has_carac_micromorfologica` (`idmicroorganismo_has_carac_micromorfologica`, `microorganismo_idmicroorganismo`, `carac_micromorfologica_idcarac_micromorfologica`) VALUES
(1, 1, 1),
(2, 2, 1),
(3, 3, 1),
(4, 4, 1),
(5, 5, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `microorganismo_has_imagem_macro`
--

CREATE TABLE `microorganismo_has_imagem_macro` (
  `idmicroorganismo_has_imagem_macro` int(11) NOT NULL,
  `microorganismo_idmicroorganismo` int(10) UNSIGNED NOT NULL,
  `imagem_idimagem` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `microorganismo_has_imagem_macro`
--

INSERT INTO `microorganismo_has_imagem_macro` (`idmicroorganismo_has_imagem_macro`, `microorganismo_idmicroorganismo`, `imagem_idimagem`) VALUES
(1, 1, 1),
(2, 2, 4),
(3, 4, 7);

-- --------------------------------------------------------

--
-- Estrutura da tabela `microorganismo_has_imagem_micro`
--

CREATE TABLE `microorganismo_has_imagem_micro` (
  `idmicroorganismo_has_imagem_micro` int(11) NOT NULL,
  `microorganismo_idmicroorganismo` int(10) UNSIGNED NOT NULL,
  `imagem_idimagem` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `microorganismo_has_imagem_micro`
--

INSERT INTO `microorganismo_has_imagem_micro` (`idmicroorganismo_has_imagem_micro`, `microorganismo_idmicroorganismo`, `imagem_idimagem`) VALUES
(1, 1, 2),
(2, 2, 5),
(3, 4, 8);

-- --------------------------------------------------------

--
-- Estrutura da tabela `microorganismo_has_referencia_taxa`
--

CREATE TABLE `microorganismo_has_referencia_taxa` (
  `idmicroorganismo_has_referencia_taxa` int(11) NOT NULL,
  `microorganismo_idmicroorganismo` int(10) UNSIGNED NOT NULL,
  `referencia_idreferencia` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `microorganismo_has_referencia_taxa`
--

INSERT INTO `microorganismo_has_referencia_taxa` (`idmicroorganismo_has_referencia_taxa`, `microorganismo_idmicroorganismo`, `referencia_idreferencia`) VALUES
(1, 2, 1),
(2, 3, 1),
(3, 4, 1),
(4, 5, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `microorganismo_has_referencia_temp`
--

CREATE TABLE `microorganismo_has_referencia_temp` (
  `idmicroorganismo_has_referencia_temp` int(11) NOT NULL,
  `microorganismo_idmicroorganismo` int(10) UNSIGNED NOT NULL,
  `referencia_idreferencia` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `microorganismo_has_referencia_temp`
--

INSERT INTO `microorganismo_has_referencia_temp` (`idmicroorganismo_has_referencia_temp`, `microorganismo_idmicroorganismo`, `referencia_idreferencia`) VALUES
(1, 2, 1),
(2, 3, 1),
(3, 4, 1),
(4, 5, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `ordem`
--

CREATE TABLE `ordem` (
  `idordem` int(10) UNSIGNED NOT NULL,
  `ordem` varchar(45) NOT NULL,
  `classe_idclasse` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `ordem`
--

INSERT INTO `ordem` (`idordem`, `ordem`, `classe_idclasse`) VALUES
(1, 'O001', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `pesquisador`
--

CREATE TABLE `pesquisador` (
  `idpesquisador` int(10) UNSIGNED NOT NULL,
  `nome` varchar(145) DEFAULT NULL,
  `instituicao` varchar(45) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `pesquisador`
--

INSERT INTO `pesquisador` (`idpesquisador`, `nome`, `instituicao`, `email`) VALUES
(1, 'AAA', 'UEA', 'AAA@RRR.COM');

-- --------------------------------------------------------

--
-- Estrutura da tabela `pigmento`
--

CREATE TABLE `pigmento` (
  `idpigmento` int(10) UNSIGNED NOT NULL,
  `pigmento` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `pigmento`
--

INSERT INTO `pigmento` (`idpigmento`, `pigmento`) VALUES
(1, 'PIG001');

-- --------------------------------------------------------

--
-- Estrutura da tabela `posicao`
--

CREATE TABLE `posicao` (
  `idposicao` int(10) UNSIGNED NOT NULL,
  `posicao` varchar(45) NOT NULL,
  `lote_idlote` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `posicao`
--

INSERT INTO `posicao` (`idposicao`, `posicao`, `lote_idlote`) VALUES
(1, 'P001', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `prateleira`
--

CREATE TABLE `prateleira` (
  `idprateleira` int(10) UNSIGNED NOT NULL,
  `prateleira` varchar(45) NOT NULL,
  `armario_idarmario` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `prateleira`
--

INSERT INTO `prateleira` (`idprateleira`, `prateleira`, `armario_idarmario`) VALUES
(1, 'P001', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `referencia`
--

CREATE TABLE `referencia` (
  `idreferencia` int(10) UNSIGNED NOT NULL,
  `referencia` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `referencia`
--

INSERT INTO `referencia` (`idreferencia`, `referencia`) VALUES
(1, 'RF001');

-- --------------------------------------------------------

--
-- Estrutura da tabela `reino`
--

CREATE TABLE `reino` (
  `idreino` int(10) UNSIGNED NOT NULL,
  `reino` varchar(45) NOT NULL,
  `dominio_iddominio` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `reino`
--

INSERT INTO `reino` (`idreino`, `reino`, `dominio_iddominio`) VALUES
(1, 'R001', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `relevo`
--

CREATE TABLE `relevo` (
  `idrelevo` int(10) UNSIGNED NOT NULL,
  `relevo` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `relevo`
--

INSERT INTO `relevo` (`idrelevo`, `relevo`) VALUES
(1, 'REL001');

-- --------------------------------------------------------

--
-- Estrutura da tabela `repique`
--

CREATE TABLE `repique` (
  `idrepique` int(10) UNSIGNED NOT NULL,
  `microorganismo_idmicroorganismo` int(10) UNSIGNED NOT NULL,
  `unidade_idunidade` int(10) UNSIGNED NOT NULL,
  `grupo_pesquisa_idgrupo_pesquisa` int(10) UNSIGNED NOT NULL,
  `comentarios` varchar(255) DEFAULT NULL,
  `disponivel` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `data_emission` date DEFAULT NULL,
  `data_preserv` datetime DEFAULT NULL,
  `posicao_idposicao` int(10) UNSIGNED NOT NULL,
  `pesquisador_preserv` int(10) UNSIGNED DEFAULT NULL,
  `parent` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `repique`
--

INSERT INTO `repique` (`idrepique`, `microorganismo_idmicroorganismo`, `unidade_idunidade`, `grupo_pesquisa_idgrupo_pesquisa`, `comentarios`, `disponivel`, `data_emission`, `data_preserv`, `posicao_idposicao`, `pesquisador_preserv`, `parent`) VALUES
(1, 1, 1, 1, '', 1, NULL, '2022-08-03 00:00:00', 1, 1, NULL),
(2, 2, 1, 1, 'COMENTÁRIOS', 0, NULL, '2022-08-19 00:00:00', 1, 1, NULL),
(3, 3, 1, 1, 'C003', 0, NULL, '2022-08-20 00:00:00', 1, 1, NULL),
(4, 4, 1, 1, '', 0, NULL, '2022-08-21 00:00:00', 1, 1, NULL),
(5, 5, 1, 1, 'SDA', 0, NULL, '2022-08-21 00:00:00', 1, 1, NULL);

-- --------------------------------------------------------

--
-- Estrutura da tabela `repique_has_imagem`
--

CREATE TABLE `repique_has_imagem` (
  `idrepique_has_imagem` int(11) NOT NULL,
  `repique_idrepique` int(10) UNSIGNED NOT NULL,
  `imagem_idimagem` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `repique_has_imagem`
--

INSERT INTO `repique_has_imagem` (`idrepique_has_imagem`, `repique_idrepique`, `imagem_idimagem`) VALUES
(1, 1, 3),
(2, 2, 6),
(3, 4, 9);

-- --------------------------------------------------------

--
-- Estrutura da tabela `repique_has_metodo_preservacao`
--

CREATE TABLE `repique_has_metodo_preservacao` (
  `idrepique_has_metodo_preservacao` int(11) NOT NULL,
  `repique_idrepique` int(10) UNSIGNED NOT NULL,
  `metodo_preservacao_idmetodo_preservacao` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `repique_has_metodo_preservacao`
--

INSERT INTO `repique_has_metodo_preservacao` (`idrepique_has_metodo_preservacao`, `repique_idrepique`, `metodo_preservacao_idmetodo_preservacao`) VALUES
(1, 1, 1),
(2, 2, 1),
(3, 3, 1),
(4, 4, 1),
(5, 5, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `repique_has_referencia`
--

CREATE TABLE `repique_has_referencia` (
  `idrepique_has_referencia` int(11) NOT NULL,
  `repique_idrepique` int(10) UNSIGNED NOT NULL,
  `referencia_idreferencia` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `repique_has_referencia`
--

INSERT INTO `repique_has_referencia` (`idrepique_has_referencia`, `repique_idrepique`, `referencia_idreferencia`) VALUES
(1, 2, 1),
(2, 3, 1),
(3, 4, 1),
(4, 5, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `sitio`
--

CREATE TABLE `sitio` (
  `idsitio` int(10) UNSIGNED NOT NULL,
  `sitio` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `sitio`
--

INSERT INTO `sitio` (`idsitio`, `sitio`) VALUES
(1, 'SA001');

-- --------------------------------------------------------

--
-- Estrutura da tabela `substrato`
--

CREATE TABLE `substrato` (
  `idsubstrato` int(10) UNSIGNED NOT NULL,
  `substrato` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `substrato`
--

INSERT INTO `substrato` (`idsubstrato`, `substrato`) VALUES
(1, 'SUB001');

-- --------------------------------------------------------

--
-- Estrutura da tabela `sub_colecao`
--

CREATE TABLE `sub_colecao` (
  `idsub_colecao` int(10) UNSIGNED NOT NULL,
  `sub_colecao` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `sub_colecao`
--

INSERT INTO `sub_colecao` (`idsub_colecao`, `sub_colecao`) VALUES
(1, 'SC001');

-- --------------------------------------------------------

--
-- Estrutura da tabela `sub_especie`
--

CREATE TABLE `sub_especie` (
  `idsub_especie` int(10) UNSIGNED NOT NULL,
  `sub_especie` varchar(45) NOT NULL,
  `autor` varchar(145) DEFAULT NULL,
  `especie_idespecie` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `sub_especie`
--

INSERT INTO `sub_especie` (`idsub_especie`, `sub_especie`, `autor`, `especie_idespecie`) VALUES
(1, 'SE001', 'AAA', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `textura`
--

CREATE TABLE `textura` (
  `idtextura` int(10) UNSIGNED NOT NULL,
  `textura` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `textura`
--

INSERT INTO `textura` (`idtextura`, `textura`) VALUES
(1, 'T001');

-- --------------------------------------------------------

--
-- Estrutura da tabela `unidade`
--

CREATE TABLE `unidade` (
  `idunidade` int(10) UNSIGNED NOT NULL,
  `unidade` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `unidade`
--

INSERT INTO `unidade` (`idunidade`, `unidade`) VALUES
(1, 'TF001');

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
--

CREATE TABLE `users` (
  `iduser` int(10) UNSIGNED NOT NULL,
  `email` varchar(35) NOT NULL,
  `passwd` varchar(255) NOT NULL,
  `isMaster` tinyint(1) NOT NULL DEFAULT 0,
  `nome` varchar(255) NOT NULL,
  `instituicao` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `users`
--

INSERT INTO `users` (`iduser`, `email`, `passwd`, `isMaster`, `nome`, `instituicao`) VALUES
(3, 'guilherme@mavennet.com', '$2b$06$im/.TkOYOzmWS13tvyU3UetXjKAVLaLB9o0FoZYEABNqksTjsxYGi', 0, '', ''),
(6, 'guilherme@agreewe.com', '$2b$06$7yCg3PyQLlv2k59hb3Lnie9xZRA43vcr2owHyRFa28MoAN.bn5htW', 1, '', ''),
(7, 'agladejesus@gmail.com', '$2b$06$zG9qBZwvargzFSM6I2k2.e0ixLYZDnlg2GKKXPneQqnF5acWv7PrO', 1, 'Alexandre de Jesus Miranda', 'UEA');

-- --------------------------------------------------------

--
-- Estrutura da tabela `variedade`
--

CREATE TABLE `variedade` (
  `idvariedade` int(10) UNSIGNED NOT NULL,
  `variedade` varchar(45) NOT NULL,
  `autor` varchar(145) DEFAULT NULL,
  `sub_especie_idsub_especie` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `variedade`
--

INSERT INTO `variedade` (`idvariedade`, `variedade`, `autor`, `sub_especie_idsub_especie`) VALUES
(1, 'V001', 'AAA', 1);

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `anexos`
--
ALTER TABLE `anexos`
  ADD PRIMARY KEY (`idanexos`),
  ADD UNIQUE KEY `idanexos_UNIQUE` (`idanexos`);

--
-- Índices para tabela `armario`
--
ALTER TABLE `armario`
  ADD PRIMARY KEY (`idarmario`),
  ADD UNIQUE KEY `idarmario_UNIQUE` (`idarmario`),
  ADD KEY `fk_armario_sub_colecao1_idx` (`sub_colecao_idsub_colecao`);

--
-- Índices para tabela `autenticacao`
--
ALTER TABLE `autenticacao`
  ADD PRIMARY KEY (`idAutenticacao`);

--
-- Índices para tabela `borda`
--
ALTER TABLE `borda`
  ADD PRIMARY KEY (`idborda`),
  ADD UNIQUE KEY `idborda_UNIQUE` (`idborda`);

--
-- Índices para tabela `carac_micromorfologica`
--
ALTER TABLE `carac_micromorfologica`
  ADD PRIMARY KEY (`idcarac_micromorfologica`),
  ADD UNIQUE KEY `idcarac_micromorfologica_UNIQUE` (`idcarac_micromorfologica`),
  ADD UNIQUE KEY `carac_micromorfologica_UNIQUE` (`carac_micromorfologica`);

--
-- Índices para tabela `classe`
--
ALTER TABLE `classe`
  ADD PRIMARY KEY (`idclasse`),
  ADD UNIQUE KEY `idclasse_UNIQUE` (`idclasse`),
  ADD KEY `fk_classe_filo1_idx` (`filo_idfilo`);

--
-- Índices para tabela `cor`
--
ALTER TABLE `cor`
  ADD PRIMARY KEY (`idcor`),
  ADD UNIQUE KEY `idcor_UNIQUE` (`idcor`);

--
-- Índices para tabela `doacao`
--
ALTER TABLE `doacao`
  ADD PRIMARY KEY (`idDoacao`);

--
-- Índices para tabela `dominio`
--
ALTER TABLE `dominio`
  ADD PRIMARY KEY (`iddominio`),
  ADD UNIQUE KEY `iddominio_UNIQUE` (`iddominio`);

--
-- Índices para tabela `especie`
--
ALTER TABLE `especie`
  ADD PRIMARY KEY (`idespecie`),
  ADD UNIQUE KEY `idespecie_UNIQUE` (`idespecie`),
  ADD KEY `fk_especie_genero1_idx` (`genero_idgenero`);

--
-- Índices para tabela `exudato`
--
ALTER TABLE `exudato`
  ADD PRIMARY KEY (`idexudato`),
  ADD UNIQUE KEY `idexudato_UNIQUE` (`idexudato`);

--
-- Índices para tabela `familia`
--
ALTER TABLE `familia`
  ADD PRIMARY KEY (`idfamilia`),
  ADD UNIQUE KEY `idfamilia_UNIQUE` (`idfamilia`),
  ADD KEY `fk_familia_ordem1_idx` (`ordem_idordem`);

--
-- Índices para tabela `filo`
--
ALTER TABLE `filo`
  ADD PRIMARY KEY (`idfilo`),
  ADD UNIQUE KEY `idfilo_UNIQUE` (`idfilo`),
  ADD KEY `fk_filo_reino1_idx` (`reino_idreino`);

--
-- Índices para tabela `genero`
--
ALTER TABLE `genero`
  ADD PRIMARY KEY (`idgenero`),
  ADD UNIQUE KEY `idgenero_UNIQUE` (`idgenero`),
  ADD KEY `fk_genero_familia1_idx` (`familia_idfamilia`);

--
-- Índices para tabela `grupo_pesquisa`
--
ALTER TABLE `grupo_pesquisa`
  ADD PRIMARY KEY (`idgrupo_pesquisa`),
  ADD UNIQUE KEY `idgrupo_pesquisa_UNIQUE` (`idgrupo_pesquisa`);

--
-- Índices para tabela `habitat`
--
ALTER TABLE `habitat`
  ADD PRIMARY KEY (`idhabitat`),
  ADD UNIQUE KEY `idsubstrato_UNIQUE` (`idhabitat`),
  ADD KEY `fk_habitat_habitat_veg1_idx` (`habitat_veg_idhabitat_veg`),
  ADD KEY `fk_habitat_habitat_ani1_idx` (`habitat_ani_idhabitat_ani`);

--
-- Índices para tabela `habitat_ani`
--
ALTER TABLE `habitat_ani`
  ADD PRIMARY KEY (`idhabitat_ani`),
  ADD UNIQUE KEY `idhabitat_ani_UNIQUE` (`idhabitat_ani`),
  ADD KEY `fk_habitat_ani_hospedeiro1_idx` (`hospedeiro_idhospedeiro`),
  ADD KEY `fk_habitat_ani_sitio1_idx` (`sitio_idsitio`);

--
-- Índices para tabela `habitat_veg`
--
ALTER TABLE `habitat_veg`
  ADD PRIMARY KEY (`idhabitat_veg`),
  ADD UNIQUE KEY `idhabitat_veg_UNIQUE` (`idhabitat_veg`),
  ADD KEY `fk_habitat_veg_hospedeiro1_idx` (`hospedeiro_idhospedeiro`),
  ADD KEY `fk_habitat_veg_substrato1_idx` (`substrato_idsubstrato`);

--
-- Índices para tabela `hospedeiro`
--
ALTER TABLE `hospedeiro`
  ADD PRIMARY KEY (`idhospedeiro`),
  ADD UNIQUE KEY `idhospedeiro_UNIQUE` (`idhospedeiro`);

--
-- Índices para tabela `imagem`
--
ALTER TABLE `imagem`
  ADD PRIMARY KEY (`idimagem`),
  ADD UNIQUE KEY `idimagem_UNIQUE` (`idimagem`);

--
-- Índices para tabela `laboratorio`
--
ALTER TABLE `laboratorio`
  ADD PRIMARY KEY (`idlaboratorio`),
  ADD UNIQUE KEY `idlaboratorio_UNIQUE` (`idlaboratorio`);

--
-- Índices para tabela `lote`
--
ALTER TABLE `lote`
  ADD PRIMARY KEY (`idlote`),
  ADD UNIQUE KEY `idlote_UNIQUE` (`idlote`),
  ADD KEY `fk_lote_prateleira1_idx` (`prateleira_idprateleira`);

--
-- Índices para tabela `metodo_preservacao`
--
ALTER TABLE `metodo_preservacao`
  ADD PRIMARY KEY (`idmetodo_preservacao`),
  ADD UNIQUE KEY `idmetodo_preservacao_UNIQUE` (`idmetodo_preservacao`);

--
-- Índices para tabela `microorganismo`
--
ALTER TABLE `microorganismo`
  ADD PRIMARY KEY (`idmicroorganismo`),
  ADD UNIQUE KEY `idmicroorganismo_UNIQUE` (`idmicroorganismo`),
  ADD KEY `fk_microorganismo_variedade1_idx` (`variedade_idvariedade`),
  ADD KEY `fk_microorganismo_pesquisador1_idx` (`pesquisador_coleta`),
  ADD KEY `fk_microorganismo_pesquisador2_idx` (`pesquisador_isolamento`),
  ADD KEY `fk_microorganismo_pesquisador3_idx` (`pesquisador_ident`),
  ADD KEY `fk_microorganismo_cor1_idx` (`cor_colonia`),
  ADD KEY `fk_microorganismo_textura1_idx` (`textura_idtextura`),
  ADD KEY `fk_microorganismo_borda1_idx` (`borda_idborda`),
  ADD KEY `fk_microorganismo_relevo1_idx` (`relevo_idrelevo`),
  ADD KEY `fk_microorganismo_exudato1_idx` (`exudato_idexudato`),
  ADD KEY `fk_microorganismo_cor2_idx` (`cor_exudato`),
  ADD KEY `fk_microorganismo_pigmento1_idx` (`pigmento_idpigmento`),
  ADD KEY `fk_microorganismo_cor3_idx` (`cor_pigmento`),
  ADD KEY `fk_microorganismo_laboratorio1_idx` (`laboratorio_mol`),
  ADD KEY `fk_microorganismo_habitat1_idx` (`habitat_idhabitat`);

--
-- Índices para tabela `microorganismo_has_anexos`
--
ALTER TABLE `microorganismo_has_anexos`
  ADD PRIMARY KEY (`idmicroorganismo_has_anexos`,`microorganismo_idmicroorganismo`,`anexos_idanexos`),
  ADD KEY `fk_microorganismo_has_anexos_anexos1_idx` (`anexos_idanexos`),
  ADD KEY `fk_microorganismo_has_anexos_microorganismo1_idx` (`microorganismo_idmicroorganismo`);

--
-- Índices para tabela `microorganismo_has_carac_micromorfologica`
--
ALTER TABLE `microorganismo_has_carac_micromorfologica`
  ADD PRIMARY KEY (`idmicroorganismo_has_carac_micromorfologica`,`microorganismo_idmicroorganismo`,`carac_micromorfologica_idcarac_micromorfologica`),
  ADD KEY `fk_microorganismo_has_carac_micromorfologica_carac_micromor_idx` (`carac_micromorfologica_idcarac_micromorfologica`),
  ADD KEY `fk_microorganismo_has_carac_micromorfologica_microorganismo_idx` (`microorganismo_idmicroorganismo`);

--
-- Índices para tabela `microorganismo_has_imagem_macro`
--
ALTER TABLE `microorganismo_has_imagem_macro`
  ADD PRIMARY KEY (`idmicroorganismo_has_imagem_macro`,`microorganismo_idmicroorganismo`,`imagem_idimagem`),
  ADD KEY `fk_microorganismo_has_imagem_imagem1_idx` (`imagem_idimagem`),
  ADD KEY `fk_microorganismo_has_imagem_microorganismo1_idx` (`microorganismo_idmicroorganismo`);

--
-- Índices para tabela `microorganismo_has_imagem_micro`
--
ALTER TABLE `microorganismo_has_imagem_micro`
  ADD PRIMARY KEY (`idmicroorganismo_has_imagem_micro`,`microorganismo_idmicroorganismo`,`imagem_idimagem`),
  ADD KEY `fk_microorganismo_has_imagem_imagem2_idx` (`imagem_idimagem`),
  ADD KEY `fk_microorganismo_has_imagem_microorganismo2_idx` (`microorganismo_idmicroorganismo`);

--
-- Índices para tabela `microorganismo_has_referencia_taxa`
--
ALTER TABLE `microorganismo_has_referencia_taxa`
  ADD PRIMARY KEY (`idmicroorganismo_has_referencia_taxa`,`microorganismo_idmicroorganismo`,`referencia_idreferencia`),
  ADD KEY `fk_microorganismo_has_referencia_referencia1_idx` (`referencia_idreferencia`),
  ADD KEY `fk_microorganismo_has_referencia_microorganismo1_idx` (`microorganismo_idmicroorganismo`);

--
-- Índices para tabela `microorganismo_has_referencia_temp`
--
ALTER TABLE `microorganismo_has_referencia_temp`
  ADD PRIMARY KEY (`idmicroorganismo_has_referencia_temp`,`microorganismo_idmicroorganismo`,`referencia_idreferencia`),
  ADD KEY `fk_microorganismo_has_referencia1_referencia1_idx` (`referencia_idreferencia`),
  ADD KEY `fk_microorganismo_has_referencia1_microorganismo1_idx` (`microorganismo_idmicroorganismo`);

--
-- Índices para tabela `ordem`
--
ALTER TABLE `ordem`
  ADD PRIMARY KEY (`idordem`),
  ADD UNIQUE KEY `idordem_UNIQUE` (`idordem`),
  ADD KEY `fk_ordem_classe1_idx` (`classe_idclasse`);

--
-- Índices para tabela `pesquisador`
--
ALTER TABLE `pesquisador`
  ADD PRIMARY KEY (`idpesquisador`),
  ADD UNIQUE KEY `idpesquisador_UNIQUE` (`idpesquisador`);

--
-- Índices para tabela `pigmento`
--
ALTER TABLE `pigmento`
  ADD PRIMARY KEY (`idpigmento`),
  ADD UNIQUE KEY `idpigmento_UNIQUE` (`idpigmento`);

--
-- Índices para tabela `posicao`
--
ALTER TABLE `posicao`
  ADD PRIMARY KEY (`idposicao`),
  ADD UNIQUE KEY `idposicao_UNIQUE` (`idposicao`),
  ADD KEY `fk_posicao_lote1_idx` (`lote_idlote`);

--
-- Índices para tabela `prateleira`
--
ALTER TABLE `prateleira`
  ADD PRIMARY KEY (`idprateleira`),
  ADD UNIQUE KEY `idprateleira_UNIQUE` (`idprateleira`),
  ADD KEY `fk_prateleira_armario1_idx` (`armario_idarmario`);

--
-- Índices para tabela `referencia`
--
ALTER TABLE `referencia`
  ADD PRIMARY KEY (`idreferencia`),
  ADD UNIQUE KEY `idreferencia_UNIQUE` (`idreferencia`);

--
-- Índices para tabela `reino`
--
ALTER TABLE `reino`
  ADD PRIMARY KEY (`idreino`),
  ADD UNIQUE KEY `idreino_UNIQUE` (`idreino`),
  ADD KEY `fk_reino_dominio_idx` (`dominio_iddominio`);

--
-- Índices para tabela `relevo`
--
ALTER TABLE `relevo`
  ADD PRIMARY KEY (`idrelevo`),
  ADD UNIQUE KEY `idrelevo_UNIQUE` (`idrelevo`);

--
-- Índices para tabela `repique`
--
ALTER TABLE `repique`
  ADD PRIMARY KEY (`idrepique`),
  ADD UNIQUE KEY `idrepique_UNIQUE` (`idrepique`),
  ADD KEY `fk_repique_microorganismo1_idx` (`microorganismo_idmicroorganismo`),
  ADD KEY `fk_repique_unidade1_idx` (`unidade_idunidade`),
  ADD KEY `fk_repique_grupo_pesquisa1_idx` (`grupo_pesquisa_idgrupo_pesquisa`),
  ADD KEY `fk_repique_posicao1_idx` (`posicao_idposicao`),
  ADD KEY `fk_repique_pesquisador1_idx` (`pesquisador_preserv`);

--
-- Índices para tabela `repique_has_imagem`
--
ALTER TABLE `repique_has_imagem`
  ADD PRIMARY KEY (`idrepique_has_imagem`,`repique_idrepique`,`imagem_idimagem`),
  ADD KEY `fk_repique_has_imagem_imagem1_idx` (`imagem_idimagem`),
  ADD KEY `fk_repique_has_imagem_repique1_idx` (`repique_idrepique`);

--
-- Índices para tabela `repique_has_metodo_preservacao`
--
ALTER TABLE `repique_has_metodo_preservacao`
  ADD PRIMARY KEY (`idrepique_has_metodo_preservacao`,`metodo_preservacao_idmetodo_preservacao`,`repique_idrepique`),
  ADD KEY `fk_repique_has_metodo_preservacao_metodo_preservacao1_idx` (`metodo_preservacao_idmetodo_preservacao`),
  ADD KEY `fk_repique_has_metodo_preservacao_repique1_idx` (`repique_idrepique`);

--
-- Índices para tabela `repique_has_referencia`
--
ALTER TABLE `repique_has_referencia`
  ADD PRIMARY KEY (`idrepique_has_referencia`,`repique_idrepique`,`referencia_idreferencia`),
  ADD KEY `fk_repique_has_referencia_referencia1_idx` (`referencia_idreferencia`),
  ADD KEY `fk_repique_has_referencia_repique1_idx` (`repique_idrepique`);

--
-- Índices para tabela `sitio`
--
ALTER TABLE `sitio`
  ADD PRIMARY KEY (`idsitio`),
  ADD UNIQUE KEY `idsitio_UNIQUE` (`idsitio`);

--
-- Índices para tabela `substrato`
--
ALTER TABLE `substrato`
  ADD PRIMARY KEY (`idsubstrato`),
  ADD UNIQUE KEY `idsubstrato_UNIQUE` (`idsubstrato`);

--
-- Índices para tabela `sub_colecao`
--
ALTER TABLE `sub_colecao`
  ADD PRIMARY KEY (`idsub_colecao`),
  ADD UNIQUE KEY `idsub_colecao_UNIQUE` (`idsub_colecao`);

--
-- Índices para tabela `sub_especie`
--
ALTER TABLE `sub_especie`
  ADD PRIMARY KEY (`idsub_especie`),
  ADD UNIQUE KEY `idsub_especie_UNIQUE` (`idsub_especie`),
  ADD KEY `fk_sub_especie_especie1_idx` (`especie_idespecie`);

--
-- Índices para tabela `textura`
--
ALTER TABLE `textura`
  ADD PRIMARY KEY (`idtextura`),
  ADD UNIQUE KEY `idtextura_UNIQUE` (`idtextura`);

--
-- Índices para tabela `unidade`
--
ALTER TABLE `unidade`
  ADD PRIMARY KEY (`idunidade`),
  ADD UNIQUE KEY `idunidade_UNIQUE` (`idunidade`);

--
-- Índices para tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`iduser`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Índices para tabela `variedade`
--
ALTER TABLE `variedade`
  ADD PRIMARY KEY (`idvariedade`),
  ADD UNIQUE KEY `idvariedade_UNIQUE` (`idvariedade`),
  ADD KEY `fk_variedade_sub_especie1_idx` (`sub_especie_idsub_especie`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `anexos`
--
ALTER TABLE `anexos`
  MODIFY `idanexos` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `armario`
--
ALTER TABLE `armario`
  MODIFY `idarmario` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `autenticacao`
--
ALTER TABLE `autenticacao`
  MODIFY `idAutenticacao` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `borda`
--
ALTER TABLE `borda`
  MODIFY `idborda` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `carac_micromorfologica`
--
ALTER TABLE `carac_micromorfologica`
  MODIFY `idcarac_micromorfologica` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `classe`
--
ALTER TABLE `classe`
  MODIFY `idclasse` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `cor`
--
ALTER TABLE `cor`
  MODIFY `idcor` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `doacao`
--
ALTER TABLE `doacao`
  MODIFY `idDoacao` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `dominio`
--
ALTER TABLE `dominio`
  MODIFY `iddominio` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `especie`
--
ALTER TABLE `especie`
  MODIFY `idespecie` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `exudato`
--
ALTER TABLE `exudato`
  MODIFY `idexudato` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `familia`
--
ALTER TABLE `familia`
  MODIFY `idfamilia` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `filo`
--
ALTER TABLE `filo`
  MODIFY `idfilo` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `genero`
--
ALTER TABLE `genero`
  MODIFY `idgenero` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `grupo_pesquisa`
--
ALTER TABLE `grupo_pesquisa`
  MODIFY `idgrupo_pesquisa` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `habitat`
--
ALTER TABLE `habitat`
  MODIFY `idhabitat` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `habitat_ani`
--
ALTER TABLE `habitat_ani`
  MODIFY `idhabitat_ani` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `habitat_veg`
--
ALTER TABLE `habitat_veg`
  MODIFY `idhabitat_veg` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `hospedeiro`
--
ALTER TABLE `hospedeiro`
  MODIFY `idhospedeiro` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `imagem`
--
ALTER TABLE `imagem`
  MODIFY `idimagem` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de tabela `laboratorio`
--
ALTER TABLE `laboratorio`
  MODIFY `idlaboratorio` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `lote`
--
ALTER TABLE `lote`
  MODIFY `idlote` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `metodo_preservacao`
--
ALTER TABLE `metodo_preservacao`
  MODIFY `idmetodo_preservacao` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `microorganismo`
--
ALTER TABLE `microorganismo`
  MODIFY `idmicroorganismo` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `microorganismo_has_anexos`
--
ALTER TABLE `microorganismo_has_anexos`
  MODIFY `idmicroorganismo_has_anexos` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `microorganismo_has_carac_micromorfologica`
--
ALTER TABLE `microorganismo_has_carac_micromorfologica`
  MODIFY `idmicroorganismo_has_carac_micromorfologica` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `microorganismo_has_imagem_macro`
--
ALTER TABLE `microorganismo_has_imagem_macro`
  MODIFY `idmicroorganismo_has_imagem_macro` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `microorganismo_has_imagem_micro`
--
ALTER TABLE `microorganismo_has_imagem_micro`
  MODIFY `idmicroorganismo_has_imagem_micro` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `microorganismo_has_referencia_taxa`
--
ALTER TABLE `microorganismo_has_referencia_taxa`
  MODIFY `idmicroorganismo_has_referencia_taxa` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `microorganismo_has_referencia_temp`
--
ALTER TABLE `microorganismo_has_referencia_temp`
  MODIFY `idmicroorganismo_has_referencia_temp` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `ordem`
--
ALTER TABLE `ordem`
  MODIFY `idordem` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `pesquisador`
--
ALTER TABLE `pesquisador`
  MODIFY `idpesquisador` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `pigmento`
--
ALTER TABLE `pigmento`
  MODIFY `idpigmento` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `posicao`
--
ALTER TABLE `posicao`
  MODIFY `idposicao` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `prateleira`
--
ALTER TABLE `prateleira`
  MODIFY `idprateleira` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `referencia`
--
ALTER TABLE `referencia`
  MODIFY `idreferencia` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `reino`
--
ALTER TABLE `reino`
  MODIFY `idreino` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `relevo`
--
ALTER TABLE `relevo`
  MODIFY `idrelevo` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `repique`
--
ALTER TABLE `repique`
  MODIFY `idrepique` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `repique_has_imagem`
--
ALTER TABLE `repique_has_imagem`
  MODIFY `idrepique_has_imagem` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `repique_has_metodo_preservacao`
--
ALTER TABLE `repique_has_metodo_preservacao`
  MODIFY `idrepique_has_metodo_preservacao` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `repique_has_referencia`
--
ALTER TABLE `repique_has_referencia`
  MODIFY `idrepique_has_referencia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `sitio`
--
ALTER TABLE `sitio`
  MODIFY `idsitio` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `substrato`
--
ALTER TABLE `substrato`
  MODIFY `idsubstrato` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `sub_colecao`
--
ALTER TABLE `sub_colecao`
  MODIFY `idsub_colecao` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `sub_especie`
--
ALTER TABLE `sub_especie`
  MODIFY `idsub_especie` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `textura`
--
ALTER TABLE `textura`
  MODIFY `idtextura` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `unidade`
--
ALTER TABLE `unidade`
  MODIFY `idunidade` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `iduser` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de tabela `variedade`
--
ALTER TABLE `variedade`
  MODIFY `idvariedade` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `armario`
--
ALTER TABLE `armario`
  ADD CONSTRAINT `fk_armario_sub_colecao1` FOREIGN KEY (`sub_colecao_idsub_colecao`) REFERENCES `sub_colecao` (`idsub_colecao`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `classe`
--
ALTER TABLE `classe`
  ADD CONSTRAINT `fk_classe_filo1` FOREIGN KEY (`filo_idfilo`) REFERENCES `filo` (`idfilo`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `especie`
--
ALTER TABLE `especie`
  ADD CONSTRAINT `fk_especie_genero1` FOREIGN KEY (`genero_idgenero`) REFERENCES `genero` (`idgenero`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `familia`
--
ALTER TABLE `familia`
  ADD CONSTRAINT `fk_familia_ordem1` FOREIGN KEY (`ordem_idordem`) REFERENCES `ordem` (`idordem`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `filo`
--
ALTER TABLE `filo`
  ADD CONSTRAINT `fk_filo_reino1` FOREIGN KEY (`reino_idreino`) REFERENCES `reino` (`idreino`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `genero`
--
ALTER TABLE `genero`
  ADD CONSTRAINT `fk_genero_familia1` FOREIGN KEY (`familia_idfamilia`) REFERENCES `familia` (`idfamilia`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `habitat`
--
ALTER TABLE `habitat`
  ADD CONSTRAINT `fk_habitat_habitat_ani1` FOREIGN KEY (`habitat_ani_idhabitat_ani`) REFERENCES `habitat_ani` (`idhabitat_ani`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_habitat_habitat_veg1` FOREIGN KEY (`habitat_veg_idhabitat_veg`) REFERENCES `habitat_veg` (`idhabitat_veg`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `habitat_ani`
--
ALTER TABLE `habitat_ani`
  ADD CONSTRAINT `fk_habitat_ani_hospedeiro1` FOREIGN KEY (`hospedeiro_idhospedeiro`) REFERENCES `hospedeiro` (`idhospedeiro`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_habitat_ani_sitio1` FOREIGN KEY (`sitio_idsitio`) REFERENCES `sitio` (`idsitio`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `habitat_veg`
--
ALTER TABLE `habitat_veg`
  ADD CONSTRAINT `fk_habitat_veg_hospedeiro1` FOREIGN KEY (`hospedeiro_idhospedeiro`) REFERENCES `hospedeiro` (`idhospedeiro`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_habitat_veg_substrato1` FOREIGN KEY (`substrato_idsubstrato`) REFERENCES `substrato` (`idsubstrato`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `lote`
--
ALTER TABLE `lote`
  ADD CONSTRAINT `fk_lote_prateleira1` FOREIGN KEY (`prateleira_idprateleira`) REFERENCES `prateleira` (`idprateleira`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `microorganismo`
--
ALTER TABLE `microorganismo`
  ADD CONSTRAINT `fk_microorganismo_borda1` FOREIGN KEY (`borda_idborda`) REFERENCES `borda` (`idborda`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_microorganismo_cor1` FOREIGN KEY (`cor_colonia`) REFERENCES `cor` (`idcor`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_microorganismo_cor2` FOREIGN KEY (`cor_exudato`) REFERENCES `cor` (`idcor`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_microorganismo_cor3` FOREIGN KEY (`cor_pigmento`) REFERENCES `cor` (`idcor`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_microorganismo_exudato1` FOREIGN KEY (`exudato_idexudato`) REFERENCES `exudato` (`idexudato`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_microorganismo_habitat1` FOREIGN KEY (`habitat_idhabitat`) REFERENCES `habitat` (`idhabitat`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_microorganismo_laboratorio1` FOREIGN KEY (`laboratorio_mol`) REFERENCES `laboratorio` (`idlaboratorio`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_microorganismo_pesquisador1` FOREIGN KEY (`pesquisador_coleta`) REFERENCES `pesquisador` (`idpesquisador`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_microorganismo_pesquisador2` FOREIGN KEY (`pesquisador_isolamento`) REFERENCES `pesquisador` (`idpesquisador`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_microorganismo_pesquisador3` FOREIGN KEY (`pesquisador_ident`) REFERENCES `pesquisador` (`idpesquisador`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_microorganismo_pigmento1` FOREIGN KEY (`pigmento_idpigmento`) REFERENCES `pigmento` (`idpigmento`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_microorganismo_relevo1` FOREIGN KEY (`relevo_idrelevo`) REFERENCES `relevo` (`idrelevo`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_microorganismo_textura1` FOREIGN KEY (`textura_idtextura`) REFERENCES `textura` (`idtextura`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_microorganismo_variedade1` FOREIGN KEY (`variedade_idvariedade`) REFERENCES `variedade` (`idvariedade`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `microorganismo_has_anexos`
--
ALTER TABLE `microorganismo_has_anexos`
  ADD CONSTRAINT `fk_microorganismo_has_anexos_anexos1` FOREIGN KEY (`anexos_idanexos`) REFERENCES `anexos` (`idanexos`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_microorganismo_has_anexos_microorganismo1` FOREIGN KEY (`microorganismo_idmicroorganismo`) REFERENCES `microorganismo` (`idmicroorganismo`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `microorganismo_has_carac_micromorfologica`
--
ALTER TABLE `microorganismo_has_carac_micromorfologica`
  ADD CONSTRAINT `fk_microorganismo_has_carac_micromorfologica_carac_micromorfo1` FOREIGN KEY (`carac_micromorfologica_idcarac_micromorfologica`) REFERENCES `carac_micromorfologica` (`idcarac_micromorfologica`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_microorganismo_has_carac_micromorfologica_microorganismo1` FOREIGN KEY (`microorganismo_idmicroorganismo`) REFERENCES `microorganismo` (`idmicroorganismo`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `microorganismo_has_imagem_macro`
--
ALTER TABLE `microorganismo_has_imagem_macro`
  ADD CONSTRAINT `fk_microorganismo_has_imagem_imagem1` FOREIGN KEY (`imagem_idimagem`) REFERENCES `imagem` (`idimagem`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_microorganismo_has_imagem_microorganismo1` FOREIGN KEY (`microorganismo_idmicroorganismo`) REFERENCES `microorganismo` (`idmicroorganismo`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `microorganismo_has_imagem_micro`
--
ALTER TABLE `microorganismo_has_imagem_micro`
  ADD CONSTRAINT `fk_microorganismo_has_imagem_imagem2` FOREIGN KEY (`imagem_idimagem`) REFERENCES `imagem` (`idimagem`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_microorganismo_has_imagem_microorganismo2` FOREIGN KEY (`microorganismo_idmicroorganismo`) REFERENCES `microorganismo` (`idmicroorganismo`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `microorganismo_has_referencia_taxa`
--
ALTER TABLE `microorganismo_has_referencia_taxa`
  ADD CONSTRAINT `fk_microorganismo_has_referencia_microorganismo1` FOREIGN KEY (`microorganismo_idmicroorganismo`) REFERENCES `microorganismo` (`idmicroorganismo`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_microorganismo_has_referencia_referencia1` FOREIGN KEY (`referencia_idreferencia`) REFERENCES `referencia` (`idreferencia`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `microorganismo_has_referencia_temp`
--
ALTER TABLE `microorganismo_has_referencia_temp`
  ADD CONSTRAINT `fk_microorganismo_has_referencia1_microorganismo1` FOREIGN KEY (`microorganismo_idmicroorganismo`) REFERENCES `microorganismo` (`idmicroorganismo`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_microorganismo_has_referencia1_referencia1` FOREIGN KEY (`referencia_idreferencia`) REFERENCES `referencia` (`idreferencia`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `ordem`
--
ALTER TABLE `ordem`
  ADD CONSTRAINT `fk_ordem_classe1` FOREIGN KEY (`classe_idclasse`) REFERENCES `classe` (`idclasse`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `posicao`
--
ALTER TABLE `posicao`
  ADD CONSTRAINT `fk_posicao_lote1` FOREIGN KEY (`lote_idlote`) REFERENCES `lote` (`idlote`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `prateleira`
--
ALTER TABLE `prateleira`
  ADD CONSTRAINT `fk_prateleira_armario1` FOREIGN KEY (`armario_idarmario`) REFERENCES `armario` (`idarmario`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `reino`
--
ALTER TABLE `reino`
  ADD CONSTRAINT `fk_reino_dominio` FOREIGN KEY (`dominio_iddominio`) REFERENCES `dominio` (`iddominio`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `repique`
--
ALTER TABLE `repique`
  ADD CONSTRAINT `fk_repique_grupo_pesquisa1` FOREIGN KEY (`grupo_pesquisa_idgrupo_pesquisa`) REFERENCES `grupo_pesquisa` (`idgrupo_pesquisa`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_repique_microorganismo1` FOREIGN KEY (`microorganismo_idmicroorganismo`) REFERENCES `microorganismo` (`idmicroorganismo`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_repique_pesquisador1` FOREIGN KEY (`pesquisador_preserv`) REFERENCES `pesquisador` (`idpesquisador`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_repique_posicao1` FOREIGN KEY (`posicao_idposicao`) REFERENCES `posicao` (`idposicao`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_repique_unidade1` FOREIGN KEY (`unidade_idunidade`) REFERENCES `unidade` (`idunidade`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `repique_has_imagem`
--
ALTER TABLE `repique_has_imagem`
  ADD CONSTRAINT `fk_repique_has_imagem_imagem1` FOREIGN KEY (`imagem_idimagem`) REFERENCES `imagem` (`idimagem`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_repique_has_imagem_repique1` FOREIGN KEY (`repique_idrepique`) REFERENCES `repique` (`idrepique`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `repique_has_metodo_preservacao`
--
ALTER TABLE `repique_has_metodo_preservacao`
  ADD CONSTRAINT `fk_repique_has_metodo_preservacao_metodo_preservacao1` FOREIGN KEY (`metodo_preservacao_idmetodo_preservacao`) REFERENCES `metodo_preservacao` (`idmetodo_preservacao`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_repique_has_metodo_preservacao_repique1` FOREIGN KEY (`repique_idrepique`) REFERENCES `repique` (`idrepique`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `repique_has_referencia`
--
ALTER TABLE `repique_has_referencia`
  ADD CONSTRAINT `fk_repique_has_referencia_referencia1` FOREIGN KEY (`referencia_idreferencia`) REFERENCES `referencia` (`idreferencia`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_repique_has_referencia_repique1` FOREIGN KEY (`repique_idrepique`) REFERENCES `repique` (`idrepique`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `sub_especie`
--
ALTER TABLE `sub_especie`
  ADD CONSTRAINT `fk_sub_especie_especie1` FOREIGN KEY (`especie_idespecie`) REFERENCES `especie` (`idespecie`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `variedade`
--
ALTER TABLE `variedade`
  ADD CONSTRAINT `fk_variedade_sub_especie1` FOREIGN KEY (`sub_especie_idsub_especie`) REFERENCES `sub_especie` (`idsub_especie`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;